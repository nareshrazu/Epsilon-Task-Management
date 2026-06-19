import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { Task, TaskServices } from '../services/http-services';
import { FormBuilder, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { TaskCardComponent } from "../task-card-component/task-card-component";

@Component({
  selector: 'app-dashboard-component',
  imports: [ReactiveFormsModule, TaskCardComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private taskService:TaskServices){}

  isAtBottom = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (currentPosition >= totalHeight - 10) {
      this.isAtBottom.set(true);
    } else {
      this.isAtBottom.set(false);
    }
  }

  ngOnInit() {
    this.taskService.getTaskList('https://jsonplaceholder.typicode.com/todos')
  }

  private fb = inject(FormBuilder)

  filteredTaskList = computed(()=>{
    const allTask = this.taskService.taskListData();
    const searchQ = this.searchQuery()
    const statusQ = this.statusFilter()

    return allTask.filter((task)=>
      task.title.includes(searchQ) && statusQ == 'All' ? true : task.status == statusQ
    )
  })

  totalTasksCount = computed(() =>
    this.taskService.taskListData().length
  );

  pendingTasksCount = computed(() =>
    this.taskService.taskListData().filter(t => t.status === 'Pending').length
  );

  inProgressTasksCount = computed(() =>
    this.taskService.taskListData().filter(t => t.status === 'In Progress').length
  );

  completedTasksCount = computed(() =>
    this.taskService.taskListData().filter(t => t.status === 'Completed').length
  );

  viewMode = signal<'grid' | 'card'>('grid');

  searchQuery = signal<string>('');

  statusFilter = signal('All');

  isAddFormOpen = signal(false);

  taskForm = this.fb.group({
    title: ['',Validators.required],
    status: ['Pending',Validators.required],
    priority: ['Medium',Validators.required],
    assignee: ['',Validators.required],
    dueDate: ['',Validators.required]
  })

  addTask(){
    const formValues = this.taskForm.value;

    const newData: Task = {
      id: Date.now(),
      title: formValues.title || '',
      status: (formValues.status as 'Pending' | 'In Progress' | 'Completed') || 'Pending',
      priority: (formValues.priority as 'Low' | 'Medium' | 'High') || 'Medium',
      assignee: formValues.assignee || 'Unassigned',
      dueDate: formValues.dueDate ? new Date(formValues.dueDate) : new Date()
    };

    this.taskService.addTask(newData);

    this.taskForm.reset({
      status: 'Pending',
      priority: 'Medium'
    });

    this.toggleAddTaskFormPopup()
  }

  updateSearch(event:Event){
    this.searchQuery.set((event.target as HTMLSelectElement).value)
  }

  updateStatus(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.statusFilter.set(select.value);
  }

  setViewMode(mode: 'grid' | 'card') {
    this.viewMode.set(mode);
  }

  toggleAddTaskFormPopup() {
    this.isAddFormOpen.set(!this.isAddFormOpen());
  }
}

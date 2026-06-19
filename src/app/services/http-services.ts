import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
export interface Task {
  id: number,
  title: string,
  status: string,
  priority: string,
  assignee: string
  dueDate: Date
}

@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  constructor(private http:HttpClient){}

  taskListData = signal<Task[]>([])

  getTaskList(url:string){
    return this.http.get<any[]>(url).subscribe((response)=>{
      console.log('response',response);
      const mapped = response.map((apiTask: any) => ({
        id: apiTask.id,
        title: apiTask.title,
        status: apiTask.completed ? 'Completed' : 'Pending',
        priority: 'Medium',
        assignee: 'John Doe',
        dueDate: new Date('2025-12-31')
      }));

      this.taskListData.set(mapped)
    })
  }

  addTask(newTask: Task) {
    this.taskListData.update(currentTasks => [newTask, ...currentTasks]);
  }
}

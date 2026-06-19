import { Component, Input } from '@angular/core';
import { Task } from '../services/http-services';

@Component({
  selector: 'app-task-card-component',
  imports: [],
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.scss',
})
export class TaskCardComponent {
  @Input() task!:Task
}

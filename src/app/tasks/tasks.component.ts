import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = dummyTasks;

  get selectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}

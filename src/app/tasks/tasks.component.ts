import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = dummyTasks;
  isAddingTask = false;

  get selectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => {
      task.id !== id;
    });
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}

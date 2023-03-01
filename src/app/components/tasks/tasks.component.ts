import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';

import { Task } from '../../types/Task';
//import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(private taskService: TaskService) {}
  tasks: Task[] = [];
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}

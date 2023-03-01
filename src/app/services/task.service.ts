import { Injectable } from '@angular/core';
import { Task } from '../types/Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}

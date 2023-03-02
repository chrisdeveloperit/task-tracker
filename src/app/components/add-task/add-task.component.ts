import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onSubmitAction: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    // @todo - emit event
    this.onSubmitAction.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

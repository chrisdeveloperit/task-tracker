import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  @Output() onSubmitAction: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

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

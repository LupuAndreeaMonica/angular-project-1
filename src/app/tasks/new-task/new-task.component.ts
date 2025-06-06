import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}

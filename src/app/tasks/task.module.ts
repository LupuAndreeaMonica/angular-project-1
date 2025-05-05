import {NgModule} from "@angular/core";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent
  ],
  exports: [TasksComponent], // make available only the components that are used by other components
  imports: [ // nu merge prin mostenire, trebuie importat specific
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class TaskModule {}

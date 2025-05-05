import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { UserComponent } from './user/user.component';
import {SharedModule} from "./shared/shared.module";
import {TaskModule} from "./tasks/task.module";

@NgModule({
  declarations: [ // for non-standalone components
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [ // for standalone components
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

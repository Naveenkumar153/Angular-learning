import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { BaseComponent } from './components/base/base.component';
import { SuccessAlert } from './components/SuccessAlert/successalert.component';
import { WarningAlert } from './components/WarningAlert/warningalert.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BaseComponent,
    SuccessAlert,
    WarningAlert,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

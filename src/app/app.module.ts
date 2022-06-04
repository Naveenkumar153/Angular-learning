import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { BaseComponent } from './components/base/base.component';
import { SuccessAlert } from './components/SuccessAlert/successalert.component';
import { WarningAlert } from './components/WarningAlert/warningalert.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component'

import { NewAccountComponent } from './components/Services/new-account/new-account.component'; 
import { AccountComponent } from './components/Services/account/account.component';
import { AccountService } from './account.services';
import { LoggerSerives } from './logger.services';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BaseComponent,
    SuccessAlert,
    WarningAlert,
    CockpitComponent,
    ServerElementComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService,LoggerSerives],
  bootstrap: [AppComponent]
})
export class AppModule { }

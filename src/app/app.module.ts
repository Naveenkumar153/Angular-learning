import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { BaseComponent,BaseComponent2 } from './components/base/base.component';
import { SuccessAlert } from './components/SuccessAlert/successalert.component';
import { WarningAlert } from './components/WarningAlert/warningalert.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component'

import { NewAccountComponent } from './components/Services/new-account/new-account.component'; 
import { AccountComponent } from './components/Services/account/account.component';
import { AccountService } from './account.services';
import { LoggerSerives } from './logger.services';
import { HostDirectives } from './host.directive';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BaseComponent,
    BaseComponent2,
    SuccessAlert,
    WarningAlert,
    CockpitComponent,
    ServerElementComponent,
    NewAccountComponent,
    AccountComponent,
    HostDirectives,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService,LoggerSerives],
  entryComponents:[BaseComponent,BaseComponent2],
  bootstrap: [AppComponent]
})
export class AppModule { }

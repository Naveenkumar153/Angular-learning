import { Component, Input, OnInit,  } from '@angular/core';
import { AccountService } from 'src/app/account.services';
import { LoggerSerives } from 'src/app/logger.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers:[LoggerSerives,],
})
export class AccountComponent implements OnInit {
  @Input() account : {name:string,status:string};
  @Input()  id      : number;
  constructor(private loggerSerives:LoggerSerives,private accounts:AccountService) { }

  ngOnInit(): void {
  }
  
  onSetTo(status:string){
    console.log('app-account' + status)
    this.accounts.updateAccount(this.id,status);
    this.accounts.serviceUpdated.emit(status);
  }
}

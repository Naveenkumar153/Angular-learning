import { Component, OnInit,  } from '@angular/core';
import { AccountService } from 'src/app/account.services';
import { LoggerSerives } from 'src/app/logger.services';

@Component({
  selector   : 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls  : ['./new-account.component.scss'],
  // providers  : [LoggerSerives,]
})
export class NewAccountComponent implements OnInit {
  
  constructor(private loggerSerives:LoggerSerives,private account: AccountService) {
    this.account.serviceUpdated.subscribe((status:string,error:any,complete:any) => {
      alert('New Status ' + status);
    }
    )
   }

  ngOnInit(): void {}

  onCreateAccount(accountName:string,accountStatus:string){
    console.log(accountName,accountStatus)
    this.account.addAccount(accountName,accountStatus);
    }
}

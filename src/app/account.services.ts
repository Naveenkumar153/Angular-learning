import { EventEmitter, Injectable } from "@angular/core";
import { LoggerSerives } from "./logger.services";

@Injectable()
export class AccountService {
    constructor(private loggerService: LoggerSerives){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
     
    serviceUpdated = new EventEmitter<string>();
      
    addAccount(name:string,status:string){
        console.log(name,status)
        this.accounts.push({name:name,status:status});;
        this.loggerService.logStatusChanged(status)
    }
    updateAccount(id:number,status:string){
        console.log(id,status)
        this.accounts[id].status = status
    }
}
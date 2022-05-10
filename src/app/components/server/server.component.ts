import { Component } from '@angular/core';

@Component({ 
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.scss']
})

export class ServerComponent { 
    serverId           : number;
    server             : string;
    isDisabled         : boolean;
    serverCreatedStatus: string;
    twoWayBin:string;
    data:string = '';
    constructor(){
        this.serverId = 100000;
        this.server   = 'server Component';
        this.isDisabled = false;
        this.serverCreatedStatus = 'no server is created';
        
        setTimeout(() => {
            this.isDisabled = true;
        },3000);
    }
    onServerCreated(){
        this.serverCreatedStatus = 'Server is created ! name is ' + this.data;
    }
    twoWayBinding(event:any){
        this.twoWayBin =  (<HTMLInputElement>event.target).value;
        console.log(event.target.value)
    }
}
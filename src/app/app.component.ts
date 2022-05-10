import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = []
  
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    // console.log(serverData)
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent,
    })
  }
  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}){
    console.log(blueprintData)
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent,
    })
  }
  onChangeFirst(){
    console.log(this.serverElements);
    this.serverElements[0].name = 'changed!!!';
  }
  deleteElement(){
    this.serverElements.splice(0,1);
  }
}

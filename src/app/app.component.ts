// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   serverElements = []
  
//   onServerAdded(serverData:{serverName:string,serverContent:string}){
//     // console.log(serverData)
//     this.serverElements.push({
//       type:'server',
//       name:serverData.serverName,
//       content:serverData.serverContent,
//     })
//   }
//   onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}){
//     console.log(blueprintData)
//     this.serverElements.push({
//       type:'blueprint',
//       name:blueprintData.serverName,
//       content:blueprintData.serverContent,
//     })
//   }
//   onChangeFirst(){
//     console.log(this.serverElements);
//     this.serverElements[0].name = 'changed!!!';
//   }
//   deleteElement(){
//     this.serverElements.splice(0,1);
//   }
// }


import { Component, OnInit,DoCheck, ViewEncapsulation, ViewChild,ComponentFactoryResolver} from '@angular/core';
import { AccountService } from './account.services';
import { BaseComponent, BaseComponent2 } from './components/base/base.component';
import { HostDirectives } from './host.directive';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // providers:[AccountService]
})
export class AppComponent implements OnInit,DoCheck{

  name : string = 'Learn ViewEncapsulation';
  name2: string = 'Angular';

  @ViewChild(HostDirectives, {static:true}) childRef:HostDirectives;
  components = [BaseComponent,BaseComponent2]

  account : {name:string,status:string}[] = [];
  constructor(private accounts:AccountService, public factoryRes:ComponentFactoryResolver){}
  ngOnInit() {
    this.account = this.accounts.accounts
    console.log(this.account);
  }
  ngDoCheck() {
  }

  show(id){
    // console.log(this.childRef);
    // this.childRef.viewRef.clear();
    const resolvedFacotry = this.factoryRes.resolveComponentFactory(this.components[id])
    this.childRef.viewRef.createComponent(resolvedFacotry);

    
  }








  // courses = [];
  // public getCourseData(data:{courseType:string,coursePrice:number,courseReview:string}){
  //   this.courses.push({
  //     courseType  : data.courseType,
  //     coursePrice : data.coursePrice,
  //     courseReview: data.courseReview,
  //   });
  //   console.log('data',data)
  // }
  
  // onAccountAdded(account:{name:string,status:string}){
  //   this.account.push(account);
  // };
  // onStatusChanged(updateInfo:{id:number,newStatus:string}){
  //   this.account[updateInfo.id].status = updateInfo.newStatus;
  // }

  
}


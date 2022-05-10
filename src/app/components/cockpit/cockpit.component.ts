import { Component, ElementRef, EventEmitter, OnInit,Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output('serCreated') serverCreated    = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('serverContentInput') serverCetInput: ElementRef;
  // newServerName:string;
  // newServerContent:string;
  constructor() { 

  }

  ngOnInit(): void {
    console.log('cockpit ngOnInit called!')
  }

  onAddServer(serverName:HTMLInputElement){
    // console.log(serverName)
    this.serverCreated.emit({
      serverName   : serverName.value,
      serverContent: this.serverCetInput.nativeElement.value
    })
  };
  onAddblueprint(serverName:HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName   :  serverName.value,
      serverContent:  this.serverCetInput.nativeElement.value
    })
  }

}

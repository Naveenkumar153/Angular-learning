import { 
  Component, 
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements 
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewChecked,
 AfterViewInit,
 OnDestroy {
  @Input('srvElement') element:{
    type:string,
    name:string,
    content:string,
  }
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentparagraph') para:ElementRef;

  constructor() { 
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  };
  
  ngOnInit(){
    console.log('ngOnInit called');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
    // console.log('Text Content: ' + this.para.nativeElement.textContent);

  };

  ngDoCheck(){
    console.log('ngDoCheck called')
  };

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  };

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  };
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.para.nativeElement.textContent);
  };

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  };

  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }



}

import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class BaseComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'app-base2',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class BaseComponent2 implements OnInit {
  @Input() name:string;
  constructor() { 

  }

  ngOnInit(): void {
  }

}

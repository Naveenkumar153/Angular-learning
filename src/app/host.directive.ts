import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[host]',
})

export class HostDirectives {
    constructor(public viewRef:ViewContainerRef){

    }
}
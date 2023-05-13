import { style } from "@angular/animations";
import { Directive, HostBinding, HostListener, OnInit } from "@angular/core"
@Directive({
    selector :'[appBetterHighlight]'
})
export class BetterHighlightDirective{
    @HostBinding('style.backgroundColor')backgroundColor: String = 'transparent' ;
    @HostListener('mouseenter') mouseover(eventData : Event){
        this.backgroundColor ="#ced4da";
    }
    @HostListener('mouseleave') mouseleave(eventData : Event){
        this.backgroundColor ="transparent";
    }
}
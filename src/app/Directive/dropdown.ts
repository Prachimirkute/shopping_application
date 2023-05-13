import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core"

@Directive({
    selector :'[appDropdown]'
})
export class DropdownDirective {
    // private wasInside = false;
    constructor(private el : ElementRef, private renderer: Renderer2){}
    @HostBinding('class.show') isOpen = false ;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        let part = this.el.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen) this.renderer.addClass(part, 'show');
        else this.renderer.removeClass(part, 'show');
        // this.wasInside = true;
    }
  
    // https://stackoverflow.com/a/46656671
    // @HostListener("document:click") clickout() {
    //   if (!this.wasInside) {
    //     this.isOpen = false;
    //   }
    //   this.wasInside = false;
    // }
}
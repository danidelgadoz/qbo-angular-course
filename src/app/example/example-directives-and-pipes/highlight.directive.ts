import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elementRef: ElementRef) {
    console.log("HighlightDirective::constructor", elementRef);
    this.elementRef.nativeElement.style.textDecoration = 'underline';
    this.elementRef.nativeElement.style.color = 'grey';
    this.elementRef.nativeElement.style.fontSize = '24px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("HighlightDirective::onMouseEnter");
    this.elementRef.nativeElement.style.color = 'black';
    this.elementRef.nativeElement.style.fontSize = '32px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("HighlightDirective::onMouseLeave");
    this.elementRef.nativeElement.style.color = 'grey';
    this.elementRef.nativeElement.style.fontSize = '24px';
  }

}

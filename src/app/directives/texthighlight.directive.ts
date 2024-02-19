import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class TexthighlightDirective {

  @Input() 
  appHighlight=''
  @Input() 
  defaultColor=''
// document.getElement
  constructor(private domEle:ElementRef) {}
   @HostListener('mouseenter') onMouseEnter(){
     this.changeHeighlight(this.appHighlight ||this.defaultColor|| 'yellow')
   }
   @HostListener('mouseleave') onMouseLeave(){
     this.changeHeighlight('')
   }


  private changeHeighlight(color:string){
    this.domEle.nativeElement.style.backgroundColor=color;
  }

}

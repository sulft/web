import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/* ElementRef donne accès au DOM de l'élément */ 
/* HostListener permet de réagir aux action de l'utilisateur sur le site  */ 

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() appHighlight:string = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor|| 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  /* Création d'une fonction qui sera appelé pour changer la couleur de l'élément en cas d'action spécifique de l'utilisatur par exemple mouseenter ou mouseleave */
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

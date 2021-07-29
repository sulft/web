import { Directive,
   ElementRef, 
   HostBinding, 
   HostListener, 
   Input, 
   OnInit, 
   Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }
  @Input() defaultColor: string = "transparent";
  @Input() newColor: string = "blue";
  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouselener') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.newColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}

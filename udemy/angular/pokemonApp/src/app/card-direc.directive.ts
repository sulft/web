import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' 
})
export class CardDirecDirective {
	constructor(private el: ElementRef) {
		this.setBorder('#f5f5f5');
		this.setHeight(180);
	}

	//change la couleur de l'élément lorsque l'utilisateur passera son curseur sur le bloc
	@HostListener('mouseenter') onMouseEnter() {
		this.setBorder('#009688');
	}

	//change la couleur de l'élément lorsque l'utilisateur retire son curseur sur le bloc
	@HostListener('mouseleave') onMouseLeave() {
		this.setBorder('#f5f5f5');
	}


	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}
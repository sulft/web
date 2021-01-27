import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' 
})
export class CardDirecDirective {
	constructor(private el: ElementRef) {
		this.setBorder('#f5f5f5');
		this.setHeight(180);
	}

	initialColor:string = '#f5f5f5';
	defaultColor:string = '#009688';
	defaultHeight:number = 180;

	@Input('pkmnBorderCard') borderColor: string;// déclaration de la propriété borderColor avec alias

	//change la couleur de l'élément lorsque l'utilisateur passera son curseur sur le bloc
	@HostListener('mouseenter') onMouseEnter() {
		this.setBorder(this.borderColor ||this.defaultColor);
	}

	//change la couleur de l'élément lorsque l'utilisateur retire son curseur sur le bloc
	@HostListener('mouseleave') onMouseLeave() {
		this.setBorder(this.initialColor);
	}


	private setBorder(color: string) {
		let border = 'dotted 4px ' + color;
		this.el.nativeElement.style.border = border;
	}



	private setHeight(height: number) {
		this.el.nativeElement.style.height = this.defaultHeight + 'px';
	}
}
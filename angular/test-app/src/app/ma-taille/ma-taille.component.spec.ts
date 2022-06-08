import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTailleComponent } from './ma-taille.component';

describe('MaTailleComponent', () => {
  let component: MaTailleComponent;
  let fixture: ComponentFixture<MaTailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaTailleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaTailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

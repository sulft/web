import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirCouleurComponent } from './choisir-couleur.component';

describe('ChoisirCouleurComponent', () => {
  let component: ChoisirCouleurComponent;
  let fixture: ComponentFixture<ChoisirCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisirCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

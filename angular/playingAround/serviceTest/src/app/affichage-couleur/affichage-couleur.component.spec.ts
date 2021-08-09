import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageCouleurComponent } from './affichage-couleur.component';

describe('AffichageCouleurComponent', () => {
  let component: AffichageCouleurComponent;
  let fixture: ComponentFixture<AffichageCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

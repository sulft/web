import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprendreComponent } from './reprendre.component';

describe('ReprendreComponent', () => {
  let component: ReprendreComponent;
  let fixture: ComponentFixture<ReprendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

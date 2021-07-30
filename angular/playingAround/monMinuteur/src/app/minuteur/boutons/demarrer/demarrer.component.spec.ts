import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarrerComponent } from './demarrer.component';

describe('DemarrerComponent', () => {
  let component: DemarrerComponent;
  let fixture: ComponentFixture<DemarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemarrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrompreComponent } from './interrompre.component';

describe('InterrompreComponent', () => {
  let component: InterrompreComponent;
  let fixture: ComponentFixture<InterrompreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterrompreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrompreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

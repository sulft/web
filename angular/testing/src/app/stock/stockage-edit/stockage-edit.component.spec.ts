import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageEditComponent } from './stockage-edit.component';

describe('StockageEditComponent', () => {
  let component: StockageEditComponent;
  let fixture: ComponentFixture<StockageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

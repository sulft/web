import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingArticleComponent } from './choosing-article.component';

describe('ChoosingArticleComponent', () => {
  let component: ChoosingArticleComponent;
  let fixture: ComponentFixture<ChoosingArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

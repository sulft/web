import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingArticleComponent } from './managing-article.component';

describe('ManagingArticleComponent', () => {
  let component: ManagingArticleComponent;
  let fixture: ComponentFixture<ManagingArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagingArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

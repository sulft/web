import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', function() {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async function() {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(function() {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', function() {
    expect(component).toBeTruthy();
  });

  describe('Un ensemble de test', function() {
    it('calcul OK ?', function(){
      expect(10+10).toBe(20);
    });
  });
});

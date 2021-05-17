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
    beforeEach(function(){
      this.number=20;
    })

    it('calcul 20 == 30 ?', function(){
      expect(this.number).not.toBe(30);
    });

  });

});

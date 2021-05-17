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


  describe("mes tests", function() {
    it("let's check amount", function() {
      expect(100).toBe(100)
    });
    
    it("let's check string", function() {
      expect("test").toBe("test")
    });

    it('should create', function() {
      expect(component).toBeTruthy();
    });
  
    it('calculation', function() {
      expect(component.sum(40,60)).toBe(100);
    });
  
    it("test html element", function() {
      const data=fixture.nativeElement;
      expect(data.querySelector(".some span").textContent).toContain("User");
    });

    it("test html element 222", function() {
      const data=fixture.nativeElement;
      expect(data.querySelector("span").textContent);
    });
  });
});

import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculation', ()=> {
    expect(component.sum(40,60)).toBe(100);
  });

  it("test html element", () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".some span").textContent).toContain("User");
  });

  describe("dummy test", ()=> {
    it("let's check amount", ()=> expect(100).toBe(100));
  });
});

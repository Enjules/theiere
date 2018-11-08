import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuSidenavComponent } from './submenu-sidenav.component';

describe('SubmenuSidenavComponent', () => {
  let component: SubmenuSidenavComponent;
  let fixture: ComponentFixture<SubmenuSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

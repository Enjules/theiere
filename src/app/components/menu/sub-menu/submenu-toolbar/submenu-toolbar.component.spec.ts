import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuToolbarComponent } from './submenu-toolbar.component';

describe('SubmenuToolbarComponent', () => {
  let component: SubmenuToolbarComponent;
  let fixture: ComponentFixture<SubmenuToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavbarLeftComponent } from './home-navbar-left.component';

describe('HomeNavbarLeftComponent', () => {
  let component: HomeNavbarLeftComponent;
  let fixture: ComponentFixture<HomeNavbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavbarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

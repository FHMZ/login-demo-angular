import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavbarRightComponent } from './home-navbar-right.component';

describe('HomeNavbarRightComponent', () => {
  let component: HomeNavbarRightComponent;
  let fixture: ComponentFixture<HomeNavbarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavbarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavbarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

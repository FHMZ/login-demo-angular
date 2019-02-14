import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComNavbarComponent } from './com-navbar.component';

describe('ComNavbarComponent', () => {
  let component: ComNavbarComponent;
  let fixture: ComponentFixture<ComNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComMenuComponent } from './com-menu.component';

describe('ComMenuComponent', () => {
  let component: ComMenuComponent;
  let fixture: ComponentFixture<ComMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

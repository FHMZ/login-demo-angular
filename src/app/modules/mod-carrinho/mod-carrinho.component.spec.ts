import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCarrinhoComponent } from './mod-carrinho.component';

describe('ModCarrinhoComponent', () => {
  let component: ModCarrinhoComponent;
  let fixture: ComponentFixture<ModCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

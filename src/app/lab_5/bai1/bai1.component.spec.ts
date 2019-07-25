import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1Component } from './bai1.component';

describe('Bai1Component', () => {
  let component: Bai1Component;
  let fixture: ComponentFixture<Bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

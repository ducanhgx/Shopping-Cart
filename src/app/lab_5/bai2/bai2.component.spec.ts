import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2Component } from './bai2.component';

describe('Bai2Component', () => {
  let component: Bai2Component;
  let fixture: ComponentFixture<Bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

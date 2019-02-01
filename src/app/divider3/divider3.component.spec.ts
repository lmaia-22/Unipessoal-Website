import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Divider3Component } from './divider3.component';

describe('Divider3Component', () => {
  let component: Divider3Component;
  let fixture: ComponentFixture<Divider3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Divider3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Divider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

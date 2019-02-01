import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Divider2Component } from './divider2.component';

describe('Divider2Component', () => {
  let component: Divider2Component;
  let fixture: ComponentFixture<Divider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Divider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Divider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

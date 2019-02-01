import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaldivComponent } from './finaldiv.component';

describe('FinaldivComponent', () => {
  let component: FinaldivComponent;
  let fixture: ComponentFixture<FinaldivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaldivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaldivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

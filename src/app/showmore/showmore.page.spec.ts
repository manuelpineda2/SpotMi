import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmorePage } from './showmore.page';

describe('ShowmorePage', () => {
  let component: ShowmorePage;
  let fixture: ComponentFixture<ShowmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

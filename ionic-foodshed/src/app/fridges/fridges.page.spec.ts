import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgesPage } from './fridges.page';

describe('FridgesPage', () => {
  let component: FridgesPage;
  let fixture: ComponentFixture<FridgesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

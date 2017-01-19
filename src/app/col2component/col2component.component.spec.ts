/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Col2componentComponent } from './col2component.component';

describe('Col2componentComponent', () => {
  let component: Col2componentComponent;
  let fixture: ComponentFixture<Col2componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Col2componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Col2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

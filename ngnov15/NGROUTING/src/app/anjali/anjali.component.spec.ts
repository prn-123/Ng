import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnjaliComponent } from './anjali.component';

describe('AnjaliComponent', () => {
  let component: AnjaliComponent;
  let fixture: ComponentFixture<AnjaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnjaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnjaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

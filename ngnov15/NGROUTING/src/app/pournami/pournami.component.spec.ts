import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PournamiComponent } from './pournami.component';

describe('PournamiComponent', () => {
  let component: PournamiComponent;
  let fixture: ComponentFixture<PournamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PournamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PournamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

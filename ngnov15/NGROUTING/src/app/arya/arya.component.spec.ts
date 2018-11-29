import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AryaComponent } from './arya.component';

describe('AryaComponent', () => {
  let component: AryaComponent;
  let fixture: ComponentFixture<AryaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AryaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

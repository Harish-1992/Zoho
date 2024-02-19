import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravalPageComponent } from './traval-page.component';

describe('TravalPageComponent', () => {
  let component: TravalPageComponent;
  let fixture: ComponentFixture<TravalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravalPageComponent]
    });
    fixture = TestBed.createComponent(TravalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

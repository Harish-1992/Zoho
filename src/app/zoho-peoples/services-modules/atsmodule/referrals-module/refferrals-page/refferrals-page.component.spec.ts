import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferralsPageComponent } from './refferrals-page.component';

describe('RefferralsPageComponent', () => {
  let component: RefferralsPageComponent;
  let fixture: ComponentFixture<RefferralsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefferralsPageComponent]
    });
    fixture = TestBed.createComponent(RefferralsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

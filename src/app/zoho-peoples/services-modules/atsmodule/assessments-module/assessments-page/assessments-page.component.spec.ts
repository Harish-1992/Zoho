import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsPageComponent } from './assessments-page.component';

describe('AssessmentsPageComponent', () => {
  let component: AssessmentsPageComponent;
  let fixture: ComponentFixture<AssessmentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentsPageComponent]
    });
    fixture = TestBed.createComponent(AssessmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

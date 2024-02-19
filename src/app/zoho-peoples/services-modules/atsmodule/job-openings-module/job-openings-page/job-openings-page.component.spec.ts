import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningsPageComponent } from './job-openings-page.component';

describe('JobOpeningsPageComponent', () => {
  let component: JobOpeningsPageComponent;
  let fixture: ComponentFixture<JobOpeningsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOpeningsPageComponent]
    });
    fixture = TestBed.createComponent(JobOpeningsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

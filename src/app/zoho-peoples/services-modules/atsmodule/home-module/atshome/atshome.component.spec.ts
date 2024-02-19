import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtshomeComponent } from './atshome.component';

describe('AtshomeComponent', () => {
  let component: AtshomeComponent;
  let fixture: ComponentFixture<AtshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtshomeComponent]
    });
    fixture = TestBed.createComponent(AtshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

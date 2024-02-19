import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyactionPageComponent } from './myaction-page.component';

describe('MyactionPageComponent', () => {
  let component: MyactionPageComponent;
  let fixture: ComponentFixture<MyactionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyactionPageComponent]
    });
    fixture = TestBed.createComponent(MyactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

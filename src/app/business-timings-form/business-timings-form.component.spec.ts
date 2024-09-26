import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTimingsFormComponent } from './business-timings-form.component';

describe('BusinessTimingsFormComponent', () => {
  let component: BusinessTimingsFormComponent;
  let fixture: ComponentFixture<BusinessTimingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessTimingsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTimingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

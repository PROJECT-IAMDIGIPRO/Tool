import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerAvailabilityComponent } from './freelancer-availability.component';

describe('FreelancerAvailabilityComponent', () => {
  let component: FreelancerAvailabilityComponent;
  let fixture: ComponentFixture<FreelancerAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelancerAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

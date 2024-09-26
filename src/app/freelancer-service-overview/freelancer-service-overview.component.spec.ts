import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerServiceOverviewComponent } from './freelancer-service-overview.component';

describe('FreelancerServiceOverviewComponent', () => {
  let component: FreelancerServiceOverviewComponent;
  let fixture: ComponentFixture<FreelancerServiceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelancerServiceOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerServiceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

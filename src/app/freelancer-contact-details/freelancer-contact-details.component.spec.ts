import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerContactDetailsComponent } from './freelancer-contact-details.component';

describe('FreelancerContactDetailsComponent', () => {
  let component: FreelancerContactDetailsComponent;
  let fixture: ComponentFixture<FreelancerContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelancerContactDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsFormComponent } from './business-details-form.component';

describe('BusinessDetailsFormComponent', () => {
  let component: BusinessDetailsFormComponent;
  let fixture: ComponentFixture<BusinessDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessDetailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

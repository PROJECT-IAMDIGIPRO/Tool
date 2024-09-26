import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCatogeryFormComponent } from './business-catogery-form.component';

describe('BusinessCatogeryFormComponent', () => {
  let component: BusinessCatogeryFormComponent;
  let fixture: ComponentFixture<BusinessCatogeryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessCatogeryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCatogeryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

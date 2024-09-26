import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelistingComponent } from './freelisting.component';

describe('FreelistingComponent', () => {
  let component: FreelistingComponent;
  let fixture: ComponentFixture<FreelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

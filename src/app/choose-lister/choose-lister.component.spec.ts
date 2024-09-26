import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseListerComponent } from './choose-lister.component';

describe('ChooseListerComponent', () => {
  let component: ChooseListerComponent;
  let fixture: ComponentFixture<ChooseListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseListerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

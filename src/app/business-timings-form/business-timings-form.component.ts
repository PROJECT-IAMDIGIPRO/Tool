import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-timings-form',
  templateUrl: './business-timings-form.component.html',
  styleUrls: ['./business-timings-form.component.css']
})
export class BusinessTimingsFormComponent {

  businessTimingsForm: FormGroup;

  daysOfWeek = [
    { label: 'Mon', value: 'monday' },
    { label: 'Tue', value: 'tuesday' },
    { label: 'Wed', value: 'wednesday' },
    { label: 'Thu', value: 'thursday' },
    { label: 'Fri', value: 'friday' },
    { label: 'Sat', value: 'saturday' },
    { label: 'Sun', value: 'sunday' },
  ];

  constructor(private fb: FormBuilder) {
    this.businessTimingsForm = this.fb.group({
      monday: [false],
      tuesday: [false],
      wednesday: [false],
      thursday: [false],
      friday: [false],
      saturday: [false],
      sunday: [false],
      timeSlots: this.fb.array([this.createTimeSlot()])
    });
  }

  // Create a new time slot group
  createTimeSlot(): FormGroup {
    return this.fb.group({
      openTime: ['', Validators.required],
      closeTime: ['', Validators.required]
    });
  }

  // Get timeSlots FormArray
  get timeSlots() {
    return this.businessTimingsForm.get('timeSlots') as FormArray;
  }

  // Add another time slot
  addTimeSlot() {
    this.timeSlots.push(this.createTimeSlot());
  }

  // Select all days of the week
  selectAllDays(event: any) {
    const isChecked = event.target.checked;
    this.daysOfWeek.forEach(day => {
      this.businessTimingsForm.get(day.value)?.setValue(isChecked);
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.businessTimingsForm.valid) {
      const formValues = this.businessTimingsForm.value;
      console.log('Form Submitted', formValues);
      // Here, you can route to the next page or save the form data
    }
  }
}

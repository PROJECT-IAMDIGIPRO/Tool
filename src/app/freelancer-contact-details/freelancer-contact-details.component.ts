import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freelancer-contact-details',
  templateUrl: './freelancer-contact-details.component.html',
  styleUrl: './freelancer-contact-details.component.css'
})
export class FreelancerContactDetailsComponent {
    contactForm!: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    createForm() {
      this.contactForm = this.fb.group({
        title: ['Ms', Validators.required],
        contactPerson: ['', Validators.required],
        mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        whatsappNumber: [''],
        sameAsMobileNumber: [false],
        email: ['', [Validators.required, Validators.email]]
      });
  
      // Automatically copy mobile number to WhatsApp number if checkbox is checked
      this.contactForm.get('sameAsMobileNumber')?.valueChanges.subscribe(value => {
        if (value) {
          this.contactForm.get('whatsappNumber')?.setValue(this.contactForm.get('mobileNumber')?.value);
          this.contactForm.get('whatsappNumber')?.disable();
        } else {
          this.contactForm.get('whatsappNumber')?.enable();
        }
      });
    }
  
    addMobileNumber() {
      // Logic to add another mobile number field
    }
  
    addWhatsappNumber() {
      // Logic to add another WhatsApp number field
    }
  
    addEmail() {
      // Logic to add another email field
    }
  
    onSubmit() {
      if (this.contactForm.valid) {
        console.log(this.contactForm.value);
      }
    }
  }
  

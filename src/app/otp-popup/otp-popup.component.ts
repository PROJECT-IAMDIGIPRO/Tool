import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-otp-popup',
  templateUrl: './otp-popup.component.html',
  styleUrl: './otp-popup.component.css'
})
export class OtpPopupComponent implements OnInit{
    title = 'Tool';
  
    faCircleCheck = faCircleCheck;
    fb: any;
    @Output() close = new EventEmitter<void>();
  
    constructor() { }
    
    otpForm!: FormGroup;
    
    // constructor(private fb: FormBuilder, private http: HttpClient) { }
  
    ngOnInit(): void {
      // Initialize the OTP form with 6 controls, each for a single digit
      this.otpForm = this.fb.group({
        otp1: ['', [Validators.required, Validators.pattern('[0-9]')]],
        otp2: ['', [Validators.required, Validators.pattern('[0-9]')]],
        otp3: ['', [Validators.required, Validators.pattern('[0-9]')]],
        otp4: ['', [Validators.required, Validators.pattern('[0-9]')]],
        otp5: ['', [Validators.required, Validators.pattern('[0-9]')]],
        otp6: ['', [Validators.required, Validators.pattern('[0-9]')]]
      });
    }
  
    // This function automatically focuses the next input when a digit is entered
    onInputChange(event: any, controlName: string): void {
      const nextElementSibling = event.target.nextElementSibling;
      if (nextElementSibling && event.target.value.length) {
        nextElementSibling.focus();
      }
    }
  
    // Submit handler to verify OTP
    onSubmit(): void {
      if (this.otpForm.valid) {
        const otpValue = Object.values(this.otpForm.value).join('');
        console.log('Entered OTP:', otpValue);
        // Here you would send the OTP value to your server for verification
      } else {
        console.log('Invalid OTP Form');
      }
    }
  
    // ngOnInit(): void {
    // }
  


    closeModal() {
      this.close.emit(); // Emit an event to the parent to close the modal
    }
  
  }
  
  
  

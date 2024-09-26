import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUser,faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
faUser =faUser;
faLock = faLock;
faEnvelope = faEnvelope;
 
isModalVisible = false; // Variable to control modal visibility
 
// Function to show the modal
openModal(): void {
  this.isModalVisible = true;
}
 
// Function to close the modal
closeModal(): void {
  this.isModalVisible = false;
}
 
// Function to handle form submission
onSubmit(signupForm: NgForm): void {
  if (signupForm.valid) {
    const formData = signupForm.value;
    console.log('Form Data:', formData);
    // Perform login logic here
 
    this.closeModal(); // Close the modal after form submission
  }
}
}
 
 
 
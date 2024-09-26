import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faUser =faUser;
  faLock = faLock;
  faFacebook =  faFacebook;
  faGoogle =  faGoogle;
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
 
 
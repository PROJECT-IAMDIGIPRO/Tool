import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-freelisting',
  templateUrl: './freelisting.component.html',
  styleUrl: './freelisting.component.css'
})
export class FreelistingComponent {  
    faCircleCheck = faCircleCheck;
    showModal: boolean = false;
  
    constructor() { }

    openModal() {
      this.showModal = true; // Open the modal when the button is clicked
      document.body.classList.add('modal-open');
    }
  
    closeModal() {
      this.showModal = false; // Close the modal when the event is triggered
      document.body.classList.remove('modal-open'); 
    }
  }


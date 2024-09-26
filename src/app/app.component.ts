import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tool';

  faCircleCheck = faCircleCheck;
  fb: any;

  constructor() { }
  
  otpForm!: FormGroup;

  isStaticVisible: boolean = true;
 
  setVisible(isVisible: boolean) {
    this.isStaticVisible = isVisible;
  }

  showModal: boolean = false;
  openModal() {
    this.showModal = true;
    document.body.classList.add('modal-open');
  }
 
  closeModal() {
    this.showModal = false;
    document.body.classList.remove('modal-open');
  }
 
}

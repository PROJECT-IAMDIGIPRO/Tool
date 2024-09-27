import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tool';

  faCircleCheck = faCircleCheck;
  fb: any;

  isServiceRoute = false;
  isBSRoute = false;
  isBCFRoute = false;
  isBDFRoute = false;
  isBPRoute = false;
  isBTFRoute = false;
  isCLRoute = false;
  isFARoute = false;
  isFCDRoute = false;
  isFSORoute = false;
  isFLRoute = false;
  isLTRoute = false;
  isLOGINRoute = false;
  isOTPPRoute = false;
  isSCRoute = false;
  isSIGNUPRoute = false;
   constructor(private router: Router) {}

  ngOnInit(): void {
    // this.setMetaTags();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });
  }
  updateRouteFlags(url: string): void {
    this.isBSRoute = url.startsWith('/bookslot');
    this.isBCFRoute =url.startsWith('/businessCatogeryForm');
    this.isBPRoute = url.startsWith('/businessProfile');
    this.isBDFRoute = url.startsWith('/businessDetailsForm');
    this.isBTFRoute = url.startsWith('/businessTimingsForm');
    this.isCLRoute = url.startsWith('/chooseLister');
    this.isFARoute = url.startsWith('/freelancerAvailabilityDetails');
    this.isFCDRoute = url.startsWith('/freelancerContactDetails');
    this.isFSORoute = url.startsWith('/freelancerServiceOverview');
    this.isFLRoute = url.startsWith('/freelisting');
    this.isLTRoute = url.startsWith('/listing');
    this.isLOGINRoute = url.startsWith('/login');
    this.isOTPPRoute = url.startsWith('/otpPopup');
    this.isSCRoute = url.startsWith('/selectCategory');
    this.isSIGNUPRoute = url.startsWith('/signup');
   

    this.isServiceRoute = this.isBSRoute || this.isBCFRoute ||
      this.isBPRoute || this.isBTFRoute || this.isCLRoute || this.isBDFRoute ||
      this.isFARoute || this.isFCDRoute || this.isFSORoute ||
      this.isFLRoute || this.isLTRoute || this.isLOGINRoute ||
      this.isOTPPRoute || this.isSCRoute || this.isSIGNUPRoute ;
  }

  
  closeLogin() {
    const loginModal = document.querySelector('app-login');
    if (loginModal) {
      const loginComponent = loginModal as any;
      loginComponent.closeModal();
    }
  }

  closeSignUp() {
    const signupModal = document.querySelector('app-signup');
    if (signupModal) {
      const signupComponent = signupModal as any;
      signupComponent.closeModal();
    }
  }
}

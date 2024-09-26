import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { OtpPopupComponent } from './otp-popup/otp-popup.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ContactDetailsFormComponent } from './contact-details-form/contact-details-form.component';
import { BusinessDetailsFormComponent } from './business-details-form/business-details-form.component';
import { BusinessTimingsFormComponent } from './business-timings-form/business-timings-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessCatogeryFormComponent } from './business-catogery-form/business-catogery-form.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { FreelancerServiceOverviewComponent } from './freelancer-service-overview/freelancer-service-overview.component';
import { FreelancerContactDetailsComponent } from './freelancer-contact-details/freelancer-contact-details.component';
import { FreelancerAvailabilityComponent } from './freelancer-availability/freelancer-availability.component';
import { FreelistingComponent } from './freelisting/freelisting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ChooseListerComponent } from './choose-lister/choose-lister.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListingComponent,
    OtpPopupComponent,
    ContactDetailsFormComponent,
    BusinessDetailsFormComponent,
    BusinessTimingsFormComponent,
    BusinessCatogeryFormComponent,
    BookSlotComponent,
    SelectCategoryComponent,
    FreelancerServiceOverviewComponent,
    FreelancerContactDetailsComponent,
    FreelancerAvailabilityComponent,
    FreelistingComponent,
    LoginComponent,
    SignupComponent,
    BusinessProfileComponent,
    ChooseListerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircleCheck);
  }
}

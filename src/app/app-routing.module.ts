import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsFormComponent } from './contact-details-form/contact-details-form.component';
import { BusinessDetailsFormComponent } from './business-details-form/business-details-form.component';
import { BusinessTimingsFormComponent } from './business-timings-form/business-timings-form.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { FreelancerServiceOverviewComponent } from './freelancer-service-overview/freelancer-service-overview.component';
import { FreelancerContactDetailsComponent } from './freelancer-contact-details/freelancer-contact-details.component';
import { FreelancerAvailabilityComponent } from './freelancer-availability/freelancer-availability.component';
import { FreelistingComponent } from './freelisting/freelisting.component';
import { OtpPopupComponent } from './otp-popup/otp-popup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ChooseListerComponent } from './choose-lister/choose-lister.component';

const routes: Routes = [
  { path: 'freelisting', component: FreelistingComponent },
  { path: 'otpPopup', component: OtpPopupComponent },
  { path: 'businessDetailsForm', component: BusinessDetailsFormComponent },
  { path: 'contactDetailsForm', component: ContactDetailsFormComponent },
  { path: 'businessTimingsForm', component: BusinessTimingsFormComponent },
  { path: 'selectCategory', component: SelectCategoryComponent },
  { path: 'freelancerContactDetails', component: FreelancerContactDetailsComponent },
  { path: 'freelancerServiceOverview', component: FreelancerServiceOverviewComponent },
  { path: 'freelancerAvailabilityDetails', component: FreelancerAvailabilityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'businessProfile', component: BusinessProfileComponent },
  { path: 'chooseLister', component: ChooseListerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Location {
  place_id: number;
  display_name: string; // This contains the full address
}

@Component({
  selector: 'app-business-details-form',
  templateUrl: './business-details-form.component.html',
  styleUrls: ['./business-details-form.component.css']
})
export class BusinessDetailsFormComponent {
  
//   locationData: Location[] = [];
//   errorMessage: string = '';
//   pincode: string = '';
//   city: string = '';
//   district: string = '';
//   state: string = '';
//   country: string = '';
 
//   private baseApiUrl = 'https://nominatim.openstreetmap.org/search';
 
//   constructor(private http: HttpClient) { }
 
 
//    onSearch(): void {
//     const pincode = (document.getElementById('pincode') as HTMLInputElement).value;
//     if (pincode) {
//       this.loadLocationData(pincode);
//     }
//   }
 
//   loadLocationData(pincode: string): void {
//     const apiUrl = `${this.baseApiUrl}?q=${pincode}&format=json`;
//     this.http.get<Location[]>(apiUrl).subscribe({
//       next: (data) => {
//         this.locationData = data;
 
//         if (data.length > 0) {
//           const displayNameParts = data[0].display_name.split(',').map(part => part.trim());
//            const len = displayNameParts.length;
//           this.country = displayNameParts[len - 1] || '';
//           this.state = displayNameParts[len - 2] || '';
//           this.district = displayNameParts[len - 3] || '';
//           this.city = displayNameParts[len - 4] || '' ;
//           this.pincode = displayNameParts[0] || '';
//         }
//       },
//       error: (err) => this.errorMessage = 'Error fetching location data'
//     });
//   }
 
 
// }
 

  pincode: string = '';
  city: string = '';
  district: string = '';
  state: string = '';
  country: string = '';
  errorMessage: string = '';

  private baseApiUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(private http: HttpClient) {}

  onSearch(): void {
    if (this.pincode.length === 6) { // Check if pincode length is valid
      this.loadLocationData(this.pincode);
    }
  }

  loadLocationData(pincode: string): void {
    const apiUrl = `${this.baseApiUrl}?q=${pincode}&format=json&addressdetails=1&limit=1`;
    this.http.get<Location[]>(apiUrl).subscribe({
      next: (data) => {
        if (data.length > 0) {
          const location = data[0];
          const addressParts = this.parseDisplayName(location.display_name);
          this.updateAddressFields(addressParts);
        } else {
          this.errorMessage = 'No location data found';
          this.clearAddressFields();
        }
      },
      error: () => {
        this.errorMessage = 'Error fetching location data';
        this.clearAddressFields();
      }
    });
  }

  parseDisplayName(displayName: string): { city: string, state: string, district: string, country: string } {
    // Split display_name and get the relevant address parts
    const parts = displayName.split(',');
    const trimmedParts = parts.map(part => part.trim());
    
    // Return city and state assuming the format is [area, city, state, country]
    return {
      city: trimmedParts.length > 0 ? trimmedParts[trimmedParts.length - 4] : '',
      district: trimmedParts.length > 1 ? trimmedParts[trimmedParts.length - 3] : '',
      state: trimmedParts.length > 1 ? trimmedParts[trimmedParts.length - 2] : '',
      country: trimmedParts.length > 1 ? trimmedParts[trimmedParts.length - 1] : ''
    };
  }

  updateAddressFields(addressParts: { city: string, state: string, district: string, country: string }): void {
    // Apply the condition to check if the country is India
    if (addressParts.country.toLowerCase() === 'india') {
      this.city = addressParts.city || '';
      this.district = addressParts.district || '';
      this.state = addressParts.state || '';
      this.country = addressParts.country || '';
    } else {
      this.errorMessage = 'Location not in India';
      this.clearAddressFields();
    }

  }

  clearAddressFields(): void {
    this.city = '';
    this.district = '';
    this.state = '';
    this.country = '';
  }
}
  

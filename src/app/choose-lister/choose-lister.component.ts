import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-lister',
  templateUrl: './choose-lister.component.html',
  styleUrl: './choose-lister.component.css'
})
export class ChooseListerComponent {
  selectedOption: string = ''; // To store the selected radio button
  isSaved: boolean = false;    // To track if the save button was clicked and hide the form

  // Method to handle the Save button click
  onSave() {
    if (this.selectedOption) {
      this.isSaved = true; // Show the relevant component and hide the form
    } else {
      alert('Please select an option');
    }
  }
}

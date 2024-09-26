import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
 
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectCategoryComponent {
  selectedItem: HTMLElement | null = null; // Track the currently selected item
  isInputVisible = false; // Track visibility of input field
 
  constructor(private renderer: Renderer2) {}
 
  ngOnInit() {
    const tabs = document.querySelectorAll(".tabs_wrap ul li") as NodeListOf<HTMLElement>;
    const allItems = document.querySelectorAll(".item_wrap") as NodeListOf<HTMLElement>;
    const footer = document.querySelector(".footer") as HTMLElement;
    const serviceInput = document.getElementById('serviceInput') as HTMLInputElement;
    const addMoreBtn = document.getElementById('addMoreBtn') as HTMLElement;
    const saveBtn = document.getElementById('saveBtn') as HTMLElement; // Get the Save button
 
    this.renderer.setStyle(footer, 'display', 'none');
 
    // Handle tab clicks
    tabs.forEach((tab) => {
      this.renderer.listen(tab, 'click', () => {
        tabs.forEach((t) => this.renderer.removeClass(t, 'active'));
        this.renderer.addClass(tab, 'active');
 
        const tabval = tab.getAttribute("data-tabs");
        allItems.forEach((item) => {
          this.renderer.setStyle(item, 'display', 'none');
        });
 
        if (tabval === "male") {
          allItems.forEach((item) => {
            if (item.classList.contains('male')) {
              this.renderer.setStyle(item, 'display', 'block');
            }
          });
        } else if (tabval === "female") {
          allItems.forEach((item) => {
            if (item.classList.contains('female')) {
              this.renderer.setStyle(item, 'display', 'block');
            }
          });
        } else {
          allItems.forEach((item) => {
            this.renderer.setStyle(item, 'display', 'block');
          });
        }
 
        this.renderer.setStyle(footer, 'display', 'none');
      });
    });
 
    // Handle item clicks
    allItems.forEach((item) => {
      this.renderer.listen(item, 'click', () => {
        this.selectedItem = item; // Set the selected item
        allItems.forEach((i) => this.renderer.setStyle(i, 'display', 'none'));
        this.renderer.setStyle(item, 'display', 'block');
        this.renderer.setStyle(footer, 'display', 'block'); // Show footer
        // Show the input box
        this.renderer.setStyle(serviceInput, 'display', 'block'); // Ensure input is displayed
        serviceInput.focus(); // Focus the input for user to type
 
        // Re-add close buttons when item is clicked
        const extraContent = this.selectedItem.querySelector('.extra-content') as HTMLElement;
        const serviceItems = extraContent.querySelectorAll('.service-item');
        serviceItems.forEach((serviceItem) => {
          const existingCloseIcon = serviceItem.querySelector('.close-icon');
          if (!existingCloseIcon) {
            // Create a close icon for removal
            const closeIcon = document.createElement('span');
            closeIcon.innerHTML = '&times;'; // Using &times; for the close icon
            closeIcon.classList.add('close-icon');
 
            // Add event listener to remove the service on click
            this.renderer.listen(closeIcon, 'click', () => {
              this.renderer.removeChild(extraContent, serviceItem);
            });
 
            serviceItem.appendChild(closeIcon);
          }
        });
      });
    });
 
    // Handle 'Add More' button click
    this.renderer.listen(addMoreBtn, 'click', () => {
      // Always show the input field on click
      this.renderer.setStyle(serviceInput, 'display', 'block');
      serviceInput.focus(); // Focus the input box for user to start typing
 
      // On each click: add service to extra-content
      if (this.selectedItem) {
        const extraContent = this.selectedItem.querySelector('.extra-content') as HTMLElement;
        const service = serviceInput.value.trim();
        if (service) {
          const newServiceElement = document.createElement('div');
          newServiceElement.classList.add('service-item');
         
          // Create a paragraph for the service name
          const serviceText = document.createElement('span'); // Changed to span
          serviceText.innerText = service;
          newServiceElement.appendChild(serviceText);
 
          // Create a close icon for removal
          const closeIcon = document.createElement('span');
          closeIcon.innerHTML = '&times;'; // Using &times; for the close icon
          closeIcon.classList.add('close-icon');
         
          // Add event listener to remove the service on click
          this.renderer.listen(closeIcon, 'click', () => {
            this.renderer.removeChild(extraContent, newServiceElement);
          });
 
          newServiceElement.appendChild(closeIcon);
          extraContent.appendChild(newServiceElement);
          serviceInput.value = ''; // Clear the input for next entry
        }
      }
    });
 
    // Handle 'Save' button click
    this.renderer.listen(saveBtn, 'click', () => {
      if (this.selectedItem) {
        const extraContent = this.selectedItem.querySelector('.extra-content') as HTMLElement;
        const closeIcons = extraContent.querySelectorAll('.close-icon'); // Find all close icons
 
        // Remove all close icons
        closeIcons.forEach((icon) => {
          this.renderer.removeChild(icon.parentElement, icon);
        });
 
        // Show all hidden items after saving
        allItems.forEach((item) => {
          this.renderer.setStyle(item, 'display', 'block'); // Display all items
        });
 
        // Hide the footer again after saving
        this.renderer.setStyle(footer, 'display', 'none');
      }
    });
  }
}
 
 
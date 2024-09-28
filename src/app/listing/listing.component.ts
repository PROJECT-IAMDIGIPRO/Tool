import { Component } from '@angular/core';
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Define the Service interface
interface Service {
  name: string;
  description: string;
  price: number;
  duration: number;
}

// Define the Salon interface
interface Salon {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  address: string;
  services: Service[];
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  faStar = faStar; 
  faArrowLeft = faArrowLeft;
  faArrowRight =  faArrowRight;
  totalSlots = 200;
  sortOption = 'recommended'; 
  currentSlideIndex = 0; 
  salonsPerPage = 3; 
  // visibleSalons: Salon[] = []; 

  // Salon data
  salons: Salon[] = [
    {
      name: 'Elite Salon',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.5,
      reviews: 120,
      address: 'Sardar Patel Rd, Secunderabad, Hyderabad, Telangana 500003',
      services: [
        { name: 'Haircut', description: 'Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 500, duration: 45 },
        { name: 'Shaving', description: 'Luxury shaving service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 200, duration: 30 },
        { name: 'Shaving', description: 'Luxury shaving service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 200, duration: 30 }
      ]
    },
    {
      name: 'Modern Men Salon',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.7,
      reviews: 150,
      address: 'Sardar Patel Rd, Secunderabad, Hyderabad, Telangana 500003',
      services: [
        { name: 'Haircut', description: 'Professional haircut service,Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 450, duration: 40 },
        { name: 'Beard Trim', description: 'Precision beard trimming,Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 300, duration: 25 },
        { name: 'Shaving', description: 'Luxury shaving service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 200, duration: 30 }
      ]
    },
    {
      name: 'Classic Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.6,
      reviews: 130,
      address: '789 Broad Street, City',
      services: [
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
        { name: 'Facial', description: 'Relaxing facial treatment, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 1000, duration: 60 },
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
      ]
    },
    {
      name: 'Classic Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.6,
      reviews: 130,
      address: '789 Broad Street, City',
      services: [
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
        { name: 'Facial', description: 'Relaxing facial treatment, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 1000, duration: 60 },
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
      ]
    },
    {
      name: 'Classic Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.6,
      reviews: 130,
      address: '789 Broad Street, City',
      services: [
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
        { name: 'Facial', description: 'Relaxing facial treatment, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 1000, duration: 60 },
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
      ]
    },
    {
      name: 'Classic Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.6,
      reviews: 130,
      address: '789 Broad Street, City',
      services: [
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
        { name: 'Facial', description: 'Relaxing facial treatment, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 1000, duration: 60 },
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
      ],
    },
    {
      name: 'Classic Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.6,
      reviews: 130,
      address: '789 Broad Street, City',
      services: [
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
        { name: 'Facial', description: 'Relaxing facial treatment, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 1000, duration: 60 },
        { name: 'Haircut', description: 'Premium haircut service, Achieve a sharp, confident look with precision haircuts tailored to elevate your style.', price: 600, duration: 50 },
      ]
    }
  ];

   // Separate data for the visible salons carousel
   visibleSalons: Salon[] = [
    {
      name: 'Top Men’s Studio',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 5.0,
      reviews: 250,
      address: '789 Fashion Street',
      services: [
        { name: 'Haircut', description: 'Sharp and stylish haircut', price: 600, duration: 45 },
        { name: 'Beard Trim', description: 'Classic beard trimming', price: 350, duration: 20 }
      ]
    },
    {
      name: 'Royal Barbers',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.7,
      reviews: 180,
      address: '101 King’s Road',
      services: [
        { name: 'Haircut', description: 'Precision haircut for gentlemen', price: 500, duration: 40 },
        { name: 'Shaving', description: 'Luxury shaving experience', price: 250, duration: 25 }
      ]
    },
    {
      name: 'Urban Grooming',
      image: 'https://res.cloudinary.com/dhdpgmubv/image/upload/v1642867367/samples/landscapes/beach-boat.jpg',
      rating: 4.8,
      reviews: 200,
      address: '202 City Center, Metro Road',
      services: [
        { name: 'Haircut', description: 'Trendy urban haircut', price: 550, duration: 50 },
        { name: 'Facial', description: 'Refreshing facial treatment', price: 700, duration: 60 }
      ]
    }
  ];
  currentIndex: number = 0;

  constructor() {
    this.updateVisibleSalons();
  }

  updateVisibleSalons() {
    // Calculate visible salons based on the current index
    const numberOfVisibleSalons = 3; // Change this to set how many cards to show
    this.visibleSalons = this.salons.slice(this.currentIndex, this.currentIndex + numberOfVisibleSalons);
  }

  nextSlide() {
    if (this.currentIndex < this.salons.length - 3) { // Check bounds
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to start
    }
    this.updateVisibleSalons();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.salons.length - 3; // Loop to last if at the beginning
    }
    this.updateVisibleSalons();
  }
  // Sort salons based on selected option
  sortSalons(): void {
    if (this.sortOption === 'rating') {
      this.salons.sort((a, b) => b.rating - a.rating);
    } else if (this.sortOption === 'price') {
      this.salons.sort((a, b) => a.services[0].price - b.services[0].price);
    } else if (this.sortOption === 'distance') {
      // Distance sorting logic (if applicable)
    } else {
      // Default sorting (recommended)
    }
    this.updateVisibleSalons(); // Update the display after sorting
  }
 
}

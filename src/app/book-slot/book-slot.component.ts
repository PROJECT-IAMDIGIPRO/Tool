import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrl: './book-slot.component.css'
})
export class BookSlotComponent {
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    this.generateCalendar();
    // Equivalent to document.ready in jQuery
    const overlay = document.querySelector('#overlay') as HTMLElement;
    const calendar = document.querySelector('.calendar') as HTMLElement;
    const datesElement = document.querySelector('.dates') as HTMLElement;
    const popUpButtons = document.querySelectorAll('.pop-up');
    popUpButtons.forEach(button => {
      this.renderer.listen(button, 'click', () => {
        if (overlay && calendar) { 
          this.fadeIn(overlay, 300);
          this.fadeIn(calendar, 300);
          const clickedButton = (button.parentElement?.querySelector('input') as HTMLInputElement)?.id;
          if (datesElement && clickedButton) {
            this.renderer.setAttribute(datesElement, 'data-type', clickedButton);
          }
        }
      });
    });
    const table = document.querySelector('table') as HTMLTableElement; 
    if (table) {
      this.renderer.listen(table, 'click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'TD' && !target.classList.contains('notCurMonth') && !target.classList.contains('holiday') && !target.classList.contains('curDay')) {
          const currentDay = document.querySelector('td.curDay') as HTMLElement; 
          if (currentDay) {
            currentDay.classList.remove('curDay');
          }
          target.classList.add('curDay');
        }
      });
    }
    const addEventButton = document.querySelector('#add_event') as HTMLElement;
    if (addEventButton) {
      this.renderer.listen(addEventButton, 'click', () => {
        const selectedDay = document.querySelector('td.curDay')?.innerHTML;
        if (overlay && calendar) {
          this.fadeOut(overlay, 300);
          this.fadeOut(calendar, 300);
        }
        const id = datesElement?.getAttribute('data-type');
        if (id && selectedDay) {
          const inputField = document.querySelector(`#${id}`) as HTMLInputElement | null;
          if (inputField) {
            inputField.value = `${selectedDay} May, 2014`;
          }
        }
      });
    }
    const searchButton = document.querySelector('#search') as HTMLElement;
    if (searchButton) {
      this.renderer.listen(searchButton, 'click', (event: Event) => {
        event.preventDefault();
        const booking = document.querySelector('.booking') as HTMLElement;
        if (booking) {
          booking.classList.add('is-sent');
        }
      });
    }
  }
  fadeIn(element: HTMLElement, duration: number): void {
    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.setStyle(element, 'opacity', '0');
    let opacity = 0;
    const step = 100 / duration;
    const interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      }
      opacity += step;
      this.renderer.setStyle(element, 'opacity', `${opacity}`);
    }, 1);
  }
  fadeOut(element: HTMLElement, duration: number): void {
    let opacity = 1;
    const step = 100 / duration;
    const interval = setInterval(() => {
      if (opacity <= 0) {
        this.renderer.setStyle(element, 'display', 'none');
        clearInterval(interval);
      }
      opacity -= step;
      this.renderer.setStyle(element, 'opacity', `${opacity}`);
    }, 1);
  }



  //  CUSTOM CALENDAR 
  currentMonth: Date = new Date();
  selectedDay: number | null = null;
  checkinDate: string = '';
  checkoutTime: string = '';
  adults: number = 2;
  children: number = 1;
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendar: number[][] = [];
  monthIndex: number = this.currentMonth.getMonth();
  generateCalendar(): void {
    this.calendar = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let week: number[] = Array(firstDay).fill(0).map(() => -1);
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        this.calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      week = week.concat(Array(7 - week.length).fill(-1));
      this.calendar.push(week);
    }
  }
  changeMonth(direction: number): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + direction);
    this.generateCalendar();
  }
  selectDay(day: number): void {
    if (day > 0) {
      this.selectedDay = day;
    }
  }
  confirmDate(): void {
    if (this.selectedDay) {
      this.checkinDate = `${this.selectedDay} ${this.currentMonth.toLocaleString('default', { month: 'long' })}, ${this.currentMonth.getFullYear()}`;
    }
  }
  onSubmit(event: Event): void {
    event.preventDefault();
    alert(`Booking confirmed for ${this.checkinDate} with ${this.adults} adults and ${this.children} children.`);
  }
  onAdultsChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.adults = Number(selectElement.value);
  }
  onChildrenChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.children = Number(selectElement.value);
  }
  openCalendar(): void {
    console.log('Calendar opened');
  }
  openTimePicker(): void {
    console.log('Time picker opened');
  }
  isHoliday(day: number): boolean {
    const holidays = [7, 23 , 30]; 
    return holidays.includes(day);
  }

  timeSlots: string[] = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];
  selectedTimeSlot: string = '';
  onTimeSlotChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTimeSlot = selectElement.value;
    console.log('Selected Time Slot:', this.selectedTimeSlot);
  }
}
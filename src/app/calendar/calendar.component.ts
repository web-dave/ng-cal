import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('table') cal: any;
  headline: string = '';
  dayNames: string[] = [];
  calendar: [string[]?] = [];
  todayDate = -1;
  month = -1;
  year = -1;
  isToday: any;
  monthObject: { [id: number]: any } = {};

  constructor(private service: CalendarService) {}

  ngOnInit(): void {
    const d = new Date();
    const dm = d.getMonth() + 1;
    const dj = d.getFullYear();
    this.kalender(dm, dj);

    this.dayNames = this.service.dayNames;
  }
  kalender(month: number, year: number) {
    const today = new Date();
    this.month = month;
    this.year = year;
    this.todayDate = -1;

    if (today.getFullYear() == year && today.getMonth() + 1 == month) {
      this.todayDate = today.getDate();
    }

    const firstDayInMonth = new Date(year, month - 1, 1);
    const firstDayInMonthIndex = (firstDayInMonth.getDay() + 6) % 7;
    let numberOfDaysInMonth = new Date(year, month, 0).getDate();
    this.monthObject = this.service.getMonthObject(year, month);

    this.headline = this.service.monthNames[month - 1] + ' ' + year;

    this.calendar = [];
    let dayNumber = 1;
    for (let i = 0; dayNumber <= numberOfDaysInMonth; i++) {
      let week: string[] = [];
      for (let j = 0; j < 7; j++) {
        let day = '';
        if (
          (i == 0 && j < firstDayInMonthIndex) ||
          dayNumber > numberOfDaysInMonth
        ) {
          day = ' ';
        } else {
          day = dayNumber.toString();
          dayNumber++;
        }
        week.push(day);
      }
      this.calendar.push(week);
    }
    console.log(this.calendar);
    return true;
  }

  tip(day: number) {
    if (this.monthObject) {
      console.log(this.monthObject[day]);
    }
  }
}

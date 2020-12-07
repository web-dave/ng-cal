import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  monthNames = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  constructor() {}

  isToday(year: number, month: number, day: number) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() + 1 === month &&
      today.getDate() === day
    );
  }
  getMonthObject(year: number, month: number) {
    const monthObj: { [id: number]: any } = {};
    let numberOfDaysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      const d = new Date(year, month - 1, i);
      monthObj[i] = {
        year,
        month,
        day: i,
        dayName: this.dayNames[d.getDay()],
        slots: [],
      };
    }
    return monthObj;
  }

  generateHeadLine(year: number, month: number, table: HTMLTableElement) {
    table.createCaption().innerHTML = this.monthNames[month - 1] + ' ' + year;
    // caption.innerHTML = this.monthNames[month - 1] + ' ' + year;
  }
  generateHeader(table: HTMLTableElement) {
    const headRow = table.insertRow(0);
    for (let i = 0; i < 7; i++) {
      headRow.insertCell(i).innerHTML = this.dayNames[i];
      // cell.innerHTML = this.dayNames[i];
    }
  }
}

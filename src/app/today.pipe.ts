import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'today',
})
export class TodayPipe implements PipeTransform {
  transform(day: string, today: string): string {
    console.log(day, today);
    let name = 'day_' + day;
    if (parseInt(day, 10) === parseInt(today, 10)) {
      name += ' today';
    }
    return name;
  }
}

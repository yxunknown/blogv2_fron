import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-time-progress',
  templateUrl: './time-progress.component.html',
  styleUrls: ['./time-progress.component.scss']
})
export class TimeProgressComponent implements OnInit {

  year: string;
  month: string;
  day: string;

  thisYear: Date;
  nextYear: Date;
  total: number;
  current: number;
  progress: number;

  @ViewChild('pvalue') pvalue: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const currentDate = new Date();
    this.thisYear = new Date(currentDate.getFullYear(), 0, 1, 0, 0, 0);
    this.nextYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);
    this.total = this.nextYear.getTime() - this.thisYear.getTime();
    this.current = currentDate.getTime() - this.thisYear.getTime();
    this.year = currentDate.getFullYear() + '';
    this.month = currentDate.getMonth() + 1 + '';
    this.day = currentDate.getDate() + '';
    this.progress = this.current * 100 / this.total;
    setInterval(() => {
      const date = new Date();
      this.current = date.getTime() - this.thisYear.getTime();
      this.progress = this.current * 100 / this.total;
      this.pvalue.nativeElement.style.width = `${this.progress}%`;
    }, 500);
  }

}

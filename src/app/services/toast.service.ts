import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

interface Toast {
  type: string;
  msg: string;
  title: string;
  date: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private subject = new Subject<any>();

  constructor() { }

  toast(toast: Toast) {
    this.subject.next(toast);
  }

  /**
   * do never call this function
   * @param handler the handle for new toast coming in
   */
  handleToast(handler: (toast: Toast) => void) {
    this.subject.subscribe({
      next: value => handler(value)
    });
  }
}

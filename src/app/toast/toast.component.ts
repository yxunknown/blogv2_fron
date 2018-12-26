import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ToastService} from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toasts = [];

  @ViewChild('toastContainer') container: ElementRef;

  constructor(
    private toast: ToastService) {
  }

  ngOnInit() {
    this.toast.handleToast(toast => {
      this.handleToast(toast);
    });
  }

  handleToast(toast) {
    toast.date = this.getDate();
    this.toasts.push(toast);
    if (toast.duration !== 0) {
      setTimeout(() => {
        this.deleteToastWithAnimation(toast);
      }, toast.duration);
    }
  }
  deleteToastWithAnimation(toast) {
    const index = this.toasts.indexOf(toast);
    const div = this.container.nativeElement.childNodes[index + 1];
    div.classList.remove('fadeInUp');
    div.classList.add('fadeOutDown');
    setTimeout(() => {
      this.deleteToastFromStorage(toast);
    }, 1000);
  }

  deleteToastFromStorage(toast) {
    const index = this.toasts.indexOf(toast);
    this.toasts.splice(index, 1);
  }

  getDate(): string {
    const date = new Date();
    return date.toLocaleString();
  }


}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

interface NavItemClickListener {
  onNavItemClicked(index: number);
}

@Injectable({
  providedIn: 'root'
})
export class NavEventService {

  private subject = new Subject<any>();

  constructor() { }

  addOnNavItemClickedListener(listener: NavItemClickListener) {
    this.subject
      .asObservable()
      .subscribe({
        next: value => listener.onNavItemClicked(value)
      });
  }

  itemClick(index: number) {
    this.subject.next(index);
  }
}

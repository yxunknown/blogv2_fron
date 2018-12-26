import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeUser(user: any) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem('user'));
  }
}

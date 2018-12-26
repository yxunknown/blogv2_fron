import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://132.232.36.151:9092';

  constructor() { }

  login() {
    return `${this.BASE_URL}/blog/login`;
  }

  register() {
    return `${this.BASE_URL}/blog/register`;
  }
}

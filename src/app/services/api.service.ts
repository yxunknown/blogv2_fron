import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://192.168.123.125:9092';

  constructor() { }

  login() {
    return `${this.BASE_URL}/blog/login`;
  }

  register() {
    return `${this.BASE_URL}/blog/register`;
  }

  getArticles() {
    return `${this.BASE_URL}/p`;
  }

  getTypes() {
    return `${this.BASE_URL}/p/type`;
  }
}

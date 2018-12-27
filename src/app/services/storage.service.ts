import { Injectable } from '@angular/core';
import {JSON_CONFIG_FILENAME} from 'tslint/lib/configuration';

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

  setArticle(article) {
    window.localStorage.setItem('article', JSON.stringify(article));
  }

  getArticle() {
    return JSON.parse(window.localStorage.getItem('article'));
  }
}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';

interface HttpHandler {
  onPre();
  onPost(value, err);
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private subject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private api: ApiService) {
  }

  login(user, handler: HttpHandler) {
    handler.onPre();
    this.http.post(this.api.login(), user)
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

  register(user, handler: HttpHandler) {
    handler.onPre();
    this.http.post(this.api.register(), user)
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

}

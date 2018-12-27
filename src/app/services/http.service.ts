import {Injectable} from '@angular/core';
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

  constructor(
    private http: HttpClient,
    private api: ApiService) {
  }

  login(user, handler: HttpHandler) {
    handler.onPre();
    const body = new FormData();
    body.set('email', user.email);
    body.set('password', user.password);
    this.http.post(this.api.login(), body)
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

  register(user, handler: HttpHandler) {
    handler.onPre();
    const body = new FormData();
    body.set('email', user.email);
    body.set('password', user.password);
    body.set('nickname', user.nickname);
    body.set('profile', 'null');
    this.http.post(this.api.register(), body)
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

  getArticles(pagination, handler: HttpHandler) {
    handler.onPre();
    this.http.get(this.api.getArticles(), {params: pagination})
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

  getTypes(handler: HttpHandler) {
    handler.onPre();
    this.http.get(this.api.getTypes())
      .subscribe({
        next: value => handler.onPost(value, undefined),
        error: err => handler.onPost(undefined, err)
      });
  }

}

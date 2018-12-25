import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private http: HttpService
  ) {
  }

  ngOnInit() {
  }

  loginWithGithub() {
    const clientid = 'fac48429e3d3e35aaec2';
    const url = `https://github.com/login/oauth/authorize?client_id=${clientid}&scope=user:email`;
    window.location.href = url;
  }

  login() {
    if (this.username === '') {
      alert('用户名为空');
      return false;
    }
    if (this.password === '') {
      alert('密码为空');
      return false;
    }
    console.log(this.user);
    this.http.login(this.user, {
      onPre: () => {},
      onPost: ((value, err) => {
        console.log(value, err);
      })
    });
  }

  back() {
    this.router.navigate(['/home']);
  }
}

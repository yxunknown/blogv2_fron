import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import {ToastService} from '../services/toast.service';
import Nprogress from 'nprogress';
import {StorageService} from '../services/storage.service';

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

  terminal = true;

  input: string;
  caches = [];
  tip: string;
  shellUser = 'login $';
  showInput = true;
  hasFocus = true;
  constructor(
    private router: Router,
    private http: HttpService,
    private toast: ToastService,
    private storage: StorageService
  ) {
    this.input = '';
    this.tip = 'Please input email:';
  }

  ngOnInit() {
  }

  loginWithGithub() {
    const clientid = 'fac48429e3d3e35aaec2';
    const url = `https://github.com/login/oauth/authorize?client_id=${clientid}&scope=user:email`;
    window.location.href = url;
  }

  login() {
    if (this.user.email === '') {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '邮箱为空',
        duration: 2000,
        date: ''
      });
      return false;
    }
    if (this.user.password === '') {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '密码为空',
        duration: 2000,
        date: ''
      });
      return false;
    }
    this.http.login(this.user, {
      onPre: () => {
        Nprogress.start();
      },
      onPost: ((value, err) => {
        Nprogress.done();
        if (value !== undefined && value.code === 200) {
          this.toast.toast({
            type: 'success',
            title: '提示',
            msg: `登录成功，正在为你跳转到主页。请稍候...`,
            duration: 2000,
            date: ''
          });
          this.storage.storeUser(value.data.user);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        } else {
          this.toast.toast({
            type: 'danger',
            title: '错误',
            msg: `登录失败，${value.info}`,
            duration: 2000,
            date: ''
          });
        }
      })
    });
  }

  back() {
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  keyDown(event) {
    if (event.code.toLowerCase() === 'enter') {
      if (this.input !== '') {
        if (this.input.toLowerCase() === 'github') {
          this.caches.push(`${this.shellUser} ${this.tip}${this.input}`);
          this.caches.push(`rerouting to github, please wait...`);
          this.tip = '';
          this.showInput = false;
          this.loginWithGithub();
        } else if (this.user.email === '') {
          this.user.email = this.input;
          this.caches.push(`${this.shellUser} ${this.tip}${this.input}`);
          this.tip = 'Please input password:';
        } else {
          this.user.password = this.input;
          this.caches.push(`${this.shellUser} ${this.tip}${this.input}`);
          this.caches.push('processing, plz wait...');
          this.tip = '';
          this.showInput = false;
          this.terminalLogin();
        }
        this.input = '';
      } else {
        this.caches.push(`${this.shellUser} ${this.tip}`);
      }
    }
  }

  terminalLogin() {
    this.http.login(this.user, {
      onPre: () => {
        this.caches.push('Connecting to server...');
      },
      onPost: ((value, err) => {
        Nprogress.done();
        if (value !== undefined && value.code === 200) {
          this.caches.push('Login success, rerouting to home.');
          this.storage.storeUser(value.data.user);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        } else {
          this.caches.push(`Login failed with: ${value.info}`);
          this.caches.push(`Please try again.`);
          this.user.password = '';
          this.user.email = '';
          this.tip = 'Please input email:';
          this.showInput = true;
        }
      })
    });
  }
}

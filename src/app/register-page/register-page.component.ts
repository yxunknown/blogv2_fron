import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastService} from '../services/toast.service';
import {HttpService} from '../services/http.service';

import Nprogress from 'nprogress';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user = {
    email: '',
    nickname: '',
    password: '',
    commitPassword: ''
  };

  constructor(
    private router: Router,
    private toast: ToastService,
    private http: HttpService) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/login']);
  }

  register() {
    if (this.validateUser()) {
      const userBody = {
        email: this.user.email,
        nickname: this.user.nickname,
        password: this.user.password
      };
      this.http.register(userBody, {
        onPre: () => {
          Nprogress.start();
        },
        onPost: ((value, err) => {
          Nprogress.done();
          if (value !== undefined && value.code === 200) {
            this.toast.toast({
              type: 'success',
              title: '恭喜',
              msg: '注册成功，正在为你跳转到登录页面。请稍候...',
              duration: 2000,
              date: ''
            });
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          } else {
            this.toast.toast({
              type: 'success',
              title: '错误',
              msg: `注册失败. ${value.info}`,
              duration: 2000,
              date: ''
            });
          }
        })
      });
    }
  }

  private validateUser(): boolean {
    if (this.user.email === '') {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '邮箱地址不能为空',
        duration: 2000,
        date: ''
      });
      return false;
    }
    if (this.user.nickname === '') {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '用户名不能为空',
        duration: 2000,
        date: ''
      });
      return false;
    }
    if (this.user.password === '') {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '密码不能为空',
        duration: 2000,
        date: ''
      });
      return false;
    }
    if (this.user.password !== this.user.commitPassword) {
      this.toast.toast({
        type: 'warning',
        title: '提示',
        msg: '确认密码与密码不一致',
        duration: 2000,
        date: ''
      });
      return false;
    }
    return true;
  }
}

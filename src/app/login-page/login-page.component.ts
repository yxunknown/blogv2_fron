import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginWithGithub() {
    const clientid = 'fac48429e3d3e35aaec2';
    const url = `https://github.com/login/oauth/authorize?client_id=${clientid}&scope=user:email`;
    window.location.href = url;
  }

  back() {
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}

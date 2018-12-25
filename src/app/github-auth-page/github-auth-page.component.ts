import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-github-auth-page',
  templateUrl: './github-auth-page.component.html',
  styleUrls: ['./github-auth-page.component.scss']
})
export class GithubAuthPageComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  toHome() {
    this.router.navigate(['/home']);
    return false;
  }

}

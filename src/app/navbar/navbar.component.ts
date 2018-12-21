import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() leftBtn = false;
  @Input() rightBtn = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    // const clientid = 'fac48429e3d3e35aaec2';
    // const url = `https://github.com/login/oauth/authorize?client_id=${clientid}&scope=user:email`;
    // alert(url);
    // window.location.href = url;
    this.router.navigate(['login']);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavEventService} from '../services/nav-event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() leftBtn = false;
  @Input() rightBtn = false;

  currentItem = 0;

  constructor(
    private router: Router,
    private navEvent: NavEventService) { }

  ngOnInit() {
  }

  login() {
    // const clientid = 'fac48429e3d3e35aaec2';
    // const url = `https://github.com/login/oauth/authorize?client_id=${clientid}&scope=user:email`;
    // alert(url);
    // window.location.href = url;
    this.router.navigate(['login']);
  }

  itemClicked(parent, index: number) {
    // don't handle clicking on same item
    if (index !== this.currentItem) {
      this.currentItem = index;
      this.navEvent.itemClick(index);
    }
  }
}

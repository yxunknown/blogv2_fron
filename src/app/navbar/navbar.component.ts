import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavEventService} from '../services/nav-event.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() leftBtn = false;
  @Input() rightBtn = false;

  currentItem = 0;

  username = '';

  constructor(
    private router: Router,
    private navEvent: NavEventService,
    private storage: StorageService) { }

  ngOnInit() {
    const user = this.storage.getUser();
    if (user !== null) {
      this.username = user.email;
    } else {
      this.username = '未登录';
    }
  }

  login() {
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

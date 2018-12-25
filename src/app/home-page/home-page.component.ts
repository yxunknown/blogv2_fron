import {Component, OnInit} from '@angular/core';
import {NavEventService} from '../services/nav-event.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  currentTap = 0;

  constructor(
    private navEvent: NavEventService) {
    this.navEvent.addOnNavItemClickedListener({
      onNavItemClicked: item => {
        this.currentTap = item;
      }
    });
  }

  ngOnInit() {
  }

}

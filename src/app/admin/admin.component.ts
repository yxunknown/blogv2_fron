import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  write() {
    this.route.navigate(['/article/write']);
  }

}

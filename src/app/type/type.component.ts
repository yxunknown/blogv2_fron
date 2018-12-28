import {AfterViewInit, Component, OnInit} from '@angular/core';

import analyze from 'rgbaster';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getResult().then(data => {
      console.log(data);
    });
  }

   async getResult() {
      const result = await this.getS();
      return result;
  }

  getS() {
    return 's';
  }

}

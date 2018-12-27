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
    const img = document.getElementById('type-img');
    console.log(img);
    const result = analyze('https://photo-1253210260.cos.ap-chengdu.myqcloud.com/1542072554094.jpg');
    console.log(result);
  }

}

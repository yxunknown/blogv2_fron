import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

// import analyze from '../services/color.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, AfterViewInit {

  background: string;

  @ViewChild('header') header: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.background = '../../assets/images/1542072554094.jpg';
    this.header.nativeElement.style.backgroundImage = `url('${this.background}')`;
  }

}

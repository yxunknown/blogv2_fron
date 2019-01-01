import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../services/storage.service';

// import analyze from '../services/color.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, AfterViewInit {

  background: string;
  private selection;

  @ViewChild('header') header: ElementRef;

  private type: any;
  constructor(
    private storage: StorageService) {
    this.type = this.storage.getType();
    this.selection = {
      'type.id': this.type.id
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.background = '../../assets/images/1542072554094.jpg';
    this.header.nativeElement.style.backgroundImage = `url('${this.background}')`;
  }

  back() {
    window.history.back();
  }

}

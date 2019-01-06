import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.scss']
})
export class WriteArticleComponent implements OnInit {

  @ViewChild('input') inputEle: ElementRef;
  @ViewChild('actions') actions: ElementRef;
  showActions = false;
  toggleIcon = 'fa-chevron-down';
  constructor() { }

  ngOnInit() {
    const totalHeight = document.documentElement.clientHeight;
    this.inputEle.nativeElement.style.height = `${totalHeight - 60}px`;
  }

  showActionBar() {
    if (this.showActions === true) {
      // hide action bar
      this.actions.nativeElement.classList.remove('zoomInDown');
      this.actions.nativeElement.classList.add('zoomOutUp');
      this.toggleIcon = 'fa-chevron-down';
      setTimeout(() => {
        this.actions.nativeElement.classList.remove('zoomOutUp');
        this.actions.nativeElement.classList.add('zoomInDown');
        this.showActions = false;
      }, 1500);
    } else {
      this.showActions = true;
      this.toggleIcon = 'fa-chevron-up';
    }
  }

}

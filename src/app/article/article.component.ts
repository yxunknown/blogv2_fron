import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../services/storage.service';

import marked from 'marked';
import {container} from '@angular/core/src/render3';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;

  @ViewChild('articleContainer') container: ElementRef;

  constructor(
    private storage: StorageService) {
    this.article = this.storage.getArticle();
  }

  ngOnInit() {
    this.container.nativeElement.innerHTML = marked(this.article.content);
  }

  back() {
    window.history.back();
  }
}

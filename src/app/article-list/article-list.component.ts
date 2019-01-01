import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

import NProgress from 'nprogress';
import {ToastService} from '../services/toast.service';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

interface Selection {
  'type.id': number;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  @Input() selection: Selection;

  articles = [];

  start = 0;

  showLoadMore = true;
  constructor(
    private http: HttpService,
    private toast: ToastService,
    private storage: StorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.http.getArticles(this.getParam(), {
      onPre: () => {
        NProgress.start();
      },
      onPost: (value, err) => {
        NProgress.done();
        if (value === undefined) {
          this.toast.toast({
            type: 'warning',
            title: '提示',
            msg: '获取文章数据失败',
            duration: 2000,
            date: ''
          });
        } else {
          if (value.code === 200) {
            this.renderArticle(value.data.articles);
          } else {
            this.toast.toast({
              type: 'info',
              title: '提示',
              msg: `获取文章数据失败,${value.info}`,
              duration: 2000,
              date: ''
            });
          }
        }
      }
    });
  }

  getParam() {
    if (this.selection === undefined) {
      return {
        start: this.start,
        limit: 20
      };
    } else {
      return {
        start: this.start,
        limit: 20,
        'type.id': this.selection['type.id']
      };
    }
  }

  ngAfterViewInit() {
    console.log('inited');
    if (this.selection !== undefined) {
      console.log(this.selection);
    }
  }

  renderArticle(articles) {
    if (articles.length > 0) {
      // group by date
      let group = articles[0].createDate.substring(0, 7);
      let items = [];
      items.push(articles[0]);
      for (let i = 1; i < articles.length; i++) {
        const a = articles[i];
        if (a.createDate.substring(0, 7) !== group) {
          this.articles.push({
            date: group,
            items: items
          });
          items = [];
          group = a.createDate.substring(0, 7);
        }
        items.push(a);
      }
      // there is a new group which is not appended into list
      if (items.length > 0) {
        this.articles.push({
          date: group,
          items: items
        });
      }
      // update pagination param
      this.start += articles.length;
    } else {
      // there is no more article data
      // give a tip to user?
      this.toast.toast({
        type: 'info',
        title: '提示',
        msg: '没有文章数据了',
        duration: 2000,
        date: ''
      });
      // hide load-more button
      this.showLoadMore = false;
    }
  }

  private checkDate(date: string, other: string) {
    return date.substring(0, 7) === other.substring(0, 7);
  }

  toArticle(article) {
    this.storage.setArticle(article);
    this.router.navigate(['/article']);
  }

}

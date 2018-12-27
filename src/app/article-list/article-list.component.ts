import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

import NProgress from 'nprogress';
import {ToastService} from '../services/toast.service';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  articles = [];
  constructor(
    private http: HttpService,
    private toast: ToastService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.articles.length === 0) {
      this.http.getArticles({start: 0, limit: 20}, {
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
  }

  ngAfterViewInit() {
    console.log("inited");
  }

  renderArticle(articles) {
    if (articles.length > 0) {
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
      if (items.length > 0) {
        this.articles.push({
          date: group,
          items: items
        });
      }
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

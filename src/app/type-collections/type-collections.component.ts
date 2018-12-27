import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {ToastService} from '../services/toast.service';

import NProgress from 'nprogress';

@Component({
  selector: 'app-type-collections',
  templateUrl: './type-collections.component.html',
  styleUrls: ['./type-collections.component.scss']
})
export class TypeCollectionsComponent implements OnInit {

  types = [];
  constructor(
    private http: HttpService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.http.getTypes({
      onPre: () => {
        NProgress.start();
      },
      onPost: (value, err) => {
        NProgress.done();
        if (value === undefined) {
          this.toast.toast({
            type: 'warning',
            title: '提示',
            msg: '获取文章分类失败',
            duration: 2000,
            date: ''
          });
        } else if (value.code === 200) {
          this.types = value.data.types;
        } else {
          this.toast.toast({
            type: 'info',
            title: '提示',
            msg: `获取文章分类失败,${value.info}`,
            duration: 2000,
            date: ''
          });
        }
      }
    });
  }

}

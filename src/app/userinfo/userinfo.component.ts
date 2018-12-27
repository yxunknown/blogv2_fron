import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  showPassword = false;

  user: any;
  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.storage.getUser();
  }

  changePassword() {
    this.showPassword = true;
  }
  back() {
    this.router.navigate(['/home']);
  }

  profileChange(profile) {
    const f = profile.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.addEventListener('load', () => {
      this.user.profile = reader.result;
    });
  }
}

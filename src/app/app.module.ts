import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LifeTimeComponent } from './life-time/life-time.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { TimeProgressComponent } from './time-progress/time-progress.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { TypeCollectionsComponent } from './type-collections/type-collections.component';
import {NavEventService} from './services/nav-event.service';
import { GithubAuthPageComponent } from './github-auth-page/github-auth-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import {EvilsComponent} from './evils/evils.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ArticleComponent } from './article/article.component';
import { TypeComponent } from './type/type.component';

const route = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login/code', component: GithubAuthPageComponent},
  {path: 'user', component: UserinfoComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'type', component: TypeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LifeTimeComponent,
    LoginPageComponent,
    TimeProgressComponent,
    ArticleListComponent,
    TypeCollectionsComponent,
    GithubAuthPageComponent,
    ToastComponent,
    EvilsComponent,
    RegisterPageComponent,
    UserinfoComponent,
    ArticleComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  ],
  providers: [NavEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

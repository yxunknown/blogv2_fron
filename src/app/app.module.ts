import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LifeTimeComponent } from './life-time/life-time.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from '@angular/router';

const route = [
  {path: 'login', component: LoginPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LifeTimeComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

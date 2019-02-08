import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeNavbarLeftComponent } from './home-navbar-left/home-navbar-left.component';
import { HomeNavbarRightComponent } from './home-navbar-right/home-navbar-right.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MenuLeftSideComponent } from './menu-left-side/menu-left-side.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeNavbarComponent,
    HomeNavbarLeftComponent,
    HomeNavbarRightComponent,
    HomeContentComponent,
    MenuLeftSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component: LoginComponent
      },
      {
        path:'home',
        component:HomeNavbarComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

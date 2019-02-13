import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModLoginComponent } from './modules/mod-login/mod-login.component';
import { ModHomeComponent } from './modules/mod-home/mod-home.component';
import { ComNavbarComponent } from './component/com-navbar/com-navbar.component';


const appRoutes: Routes = [
  { path: '', component: ModLoginComponent },
  { path: 'home', component: ModHomeComponent },
  { path: 'com-navbar', component: ComNavbarComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ModLoginComponent,
    ModHomeComponent,
    ComNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

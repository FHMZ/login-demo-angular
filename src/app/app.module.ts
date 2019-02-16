import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModLoginComponent } from './modules/mod-login/mod-login.component';
import { ModHomeComponent } from './modules/mod-home/mod-home.component';

const appRoutes: Routes = [
  { path: '', component: ModLoginComponent },
  { path: 'home', component: ModHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ModLoginComponent,
    ModHomeComponent
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

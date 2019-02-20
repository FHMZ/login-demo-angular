import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComMenuComponent } from './component/com-menu/com-menu.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ComFooterComponent } from './component/com-footer/com-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComMenuComponent,
    routingComponents,
    ComFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

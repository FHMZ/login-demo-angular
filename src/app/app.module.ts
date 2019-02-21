import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ComMenuComponent} from './component/com-menu/com-menu.component';
import {ComFooterComponent} from './component/com-footer/com-footer.component';
import {ComNavbarComponent} from './component/com-navbar/com-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComMenuComponent,
    routingComponents,
    ComFooterComponent,
    ComNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

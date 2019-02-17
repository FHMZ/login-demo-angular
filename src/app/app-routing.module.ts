import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModLoginComponent} from './modules/mod-login/mod-login.component';
import {ModHomeComponent} from './modules/mod-home/mod-home.component';
import {ModCarrinhoComponent} from './modules/mod-carrinho/mod-carrinho.component';
import {ComMenuComponent} from './component/com-menu/com-menu.component';

const appRoutes: Routes = [
  {path: '', component: ModLoginComponent},
  {path: 'home', component: ModHomeComponent},
  {path: 'menu', component: ComMenuComponent},
  {path: 'carrinho', component: ModCarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  ModLoginComponent, ModHomeComponent, ModCarrinhoComponent, ComMenuComponent
];

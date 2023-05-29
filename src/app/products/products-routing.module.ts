import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './basics-page/basics-page.component';
import { NumbersPageComponent } from './numbers-page/numbers-page.component';
import { UncommonPageComponent } from './uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

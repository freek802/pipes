import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './basics-page/basics-page.component';
import { UncommonPageComponent } from './uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './numbers-page/numbers-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    UncommonPageComponent,
    NumbersPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductExceptionComponent } from './product-exception.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/exception',
    component: ProductExceptionComponent,
  },
  {
    path: 'product/detail',
    component: ProductDetailComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

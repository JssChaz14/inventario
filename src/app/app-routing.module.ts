import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeReportComponent } from './extraescolares/free-report/free-report.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'crear-producto', component: AddProductComponent },

  { path: 'extra/liberacion', component: FreeReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

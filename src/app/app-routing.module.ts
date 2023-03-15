import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeReportComponent } from './extraescolares/free-report/free-report.component';
import { FreeComponent } from './extraescolares/free/free.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products/products.component';
import { AddProviderComponent } from './providersTec/add-provider/add-provider.component';
import { DetailProvidersComponent } from './providersTec/detail-providers/detail-providers.component';
import { EditProviderComponent } from './providersTec/edit-provider/edit-provider.component';
import { ListProvidersComponent } from './providersTec/list-providers/list-providers.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'crear-producto', component: AddProductComponent },

  { path: 'proveedores', component: ListProvidersComponent },
  { path: 'proveedores/agregar', component: AddProviderComponent },
  { path: 'proveedores/:id', component: DetailProvidersComponent },
  { path: 'proveedores/editar/:id', component: EditProviderComponent },

  { path: 'extra/liberacion', component: FreeComponent },
  { path: 'extra/liberacion-reporte', component: FreeReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

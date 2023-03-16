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
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },

  { path: 'productos', component: ProductsComponent },
  { path: 'productos/agregar', component: AddProductComponent },
  { path: 'producto/:id', component: DetailProductComponent },
  { path: 'prodcutos/editar/:id', component: EditProductComponent },

  { path: 'proveedores', component: ListProvidersComponent },
  { path: 'proveedores/agregar', component: AddProviderComponent },
  { path: 'proveedor/:id', component: DetailProvidersComponent },
  { path: 'proveedores/editar/:id', component: EditProviderComponent },

  { path: 'categorias', component: ListCategoryComponent },
  { path: 'categorias/agregar', component: AddCategoryComponent },

  { path: 'empleados', component: EmployeesComponent },
  { path: 'empleados/agregar', component: AddEmployeeComponent },
  { path: 'empleado/:id', component: DetailEmployeeComponent },
  { path: 'empleado/editar/:id', component: EditEmployeeComponent },


  { path: 'extra/liberacion', component: FreeComponent },
  { path: 'extra/liberacion-reporte', component: FreeReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

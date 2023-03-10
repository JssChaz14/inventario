import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersComponent } from './users/users/users.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsComponent } from './products/products/products.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { FreeComponent } from './extraescolares/free/free.component';
import { FreeReportComponent } from './extraescolares/free-report/free-report.component';
import { FreeLoanComponent } from './extraescolares/free-loan/free-loan.component';
import { FreeLoanReportComponent } from './extraescolares/free-loan-report/free-loan-report.component';
import { AddProviderComponent } from './providersTec/add-provider/add-provider.component';
import { EditProviderComponent } from './providersTec/edit-provider/edit-provider.component';
import { ListProvidersComponent } from './providersTec/list-providers/list-providers.component';
import { DetailProvidersComponent } from './providersTec/detail-providers/detail-providers.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    UsersComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsComponent,
    DetailProductComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DetailEmployeeComponent,
    FreeComponent,
    FreeReportComponent,
    FreeLoanComponent,
    FreeLoanReportComponent,
    AddProviderComponent,
    EditProviderComponent,
    ListProvidersComponent,
    DetailProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

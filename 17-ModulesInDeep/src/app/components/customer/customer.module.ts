import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/add', component: AddCustomerComponent },
      { path: 'customers/:id', component: CustomerDetailComponent },
    ]),//custom module'umuzde verilecek rootlar forchild uzerinden verilir.
  ],
  exports:[
    CustomerListComponent,
    AddCustomerComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule {}

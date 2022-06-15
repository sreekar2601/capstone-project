import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { AddManagerComponent } from './admin/add-manager/add-manager.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AddEngineerComponent } from './admin/add-engineer/add-engineer.component';
import { ViewManagersComponent } from './admin/view-managers/view-managers.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewEngineersComponent } from './admin/view-engineers/view-engineers.component';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { AssignengineerComponent } from './manager/assignengineer/assignengineer.component';

import { ActualassignComponent } from './manager/actualassign/actualassign.component';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';
import { AddcomplaintComponent } from './customer/addcomplaint/addcomplaint.component';
import { ViewcomplaintComponent } from './customer/viewcomplaint/viewcomplaint.component';
import { ChangestatusComponent } from './engineer/changestatus/changestatus.component';
import { EngineerOperationsComponent } from './engineer-operations/engineer-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminOperationsComponent,
    AddManagerComponent,
    AddCustomerComponent,
    AddEngineerComponent,
    ViewManagersComponent,
    ViewCustomersComponent,
    ViewEngineersComponent,
    ManagerComponent,
    CustomerComponent,
    EngineerComponent,
    AssignengineerComponent,

    ActualassignComponent,
     CustomerOperationsComponent,
     AddcomplaintComponent,
     ViewcomplaintComponent,
     ChangestatusComponent,
     EngineerOperationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

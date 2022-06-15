import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AddEngineerComponent } from './admin/add-engineer/add-engineer.component';
import { AddManagerComponent } from './admin/add-manager/add-manager.component';
import { AdminComponent } from './admin/admin.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewEngineersComponent } from './admin/view-engineers/view-engineers.component';
import { ViewManagersComponent } from './admin/view-managers/view-managers.component';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';
import { AddcomplaintComponent } from './customer/addcomplaint/addcomplaint.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewcomplaintComponent } from './customer/viewcomplaint/viewcomplaint.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ActualassignComponent } from './manager/actualassign/actualassign.component';
import { AssignengineerComponent } from './manager/assignengineer/assignengineer.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerOperationsComponent } from './engineer-operations/engineer-operations.component';
import { ChangestatusComponent } from './engineer/changestatus/changestatus.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'adminoperations', component: AdminOperationsComponent },
  { path: 'adminoperations/addmanager', component: AddManagerComponent },
  { path: 'adminoperations/addcustomer', component: AddCustomerComponent },
  { path: 'adminoperations/addengineer', component: AddEngineerComponent },
  { path: 'adminoperations/viewmanager', component: ViewManagersComponent },
  { path: 'adminoperations/viewcustomer', component: ViewCustomersComponent },
  { path: 'adminoperations/viewengineer', component: ViewEngineersComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'engineer', component: EngineerComponent },
  { path: 'manager/assignengineer', component: AssignengineerComponent },
  {
    path: 'assignengineer/actualassign/:name',
    component: ActualassignComponent,
  },
  { path: 'customeroperations', component: CustomerOperationsComponent },
  { path: 'customeroperations/addcomplaint', component: AddcomplaintComponent },
  {
    path: 'customeroperations/viewcomplaint',
    component: ViewcomplaintComponent,
  },
  {
    path: 'engineer/engineeroperations',
    component: EngineerOperationsComponent,
  },
  {
    path: 'engineeroperations/changestatus/:name',
    component: ChangestatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

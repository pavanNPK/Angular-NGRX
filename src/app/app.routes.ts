import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestDataComponent} from './test-data/test-data.component';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {EmployeesCreateComponent} from './employees-create/employees-create.component';
import {EmployeesEditComponent} from './employees-edit/employees-edit.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'test', component: TestDataComponent, pathMatch: 'prefix'
  },
  {
    path: 'dashboard', component: DashboardComponent, pathMatch: 'prefix'
  },
  {
    path: 'employees', component: EmployeesListComponent, pathMatch: 'prefix'
  },
  {
    path: 'employees/create', component: EmployeesCreateComponent, pathMatch: 'prefix'
  },
  {
    path: 'employees/edit/:id', component: EmployeesEditComponent, pathMatch: 'prefix'
  },
  {
    path: '**', redirectTo: '/dashboard', pathMatch: 'full'
  },
];

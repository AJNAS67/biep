import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ExamsComponent } from './exams/exams.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { ReportsComponent } from './reports/reports.component';
import { SchoolsComponent } from './schools/schools.component';
import { StudentsComponent } from './students/students.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'employees',
        component:EmployeesComponent
      },
      {
        path: 'exams',
        component:ExamsComponent
      },
      {
        path: 'feedetails',
        component:FeeDetailsComponent
      },
      {
        path: 'reports',
        component:ReportsComponent
      },
      {
        path: 'schools',
        component:SchoolsComponent
      },{
        path:'employees/list',
        component:EmployeeListComponent
      },

      {
        path:'schools/list',
        component:SchoolListComponent
      },{
        path:'schools/list/details',
        component:CollegeDetailsComponent
      },

      {
        path: 'students',
        component:StudentsComponent
      }
    ]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

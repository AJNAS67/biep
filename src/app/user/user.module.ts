import { NgModule } from '@angular/core';


import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../layout/header/header.component';
import { ReportsComponent } from './reports/reports.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { ExamsComponent } from './exams/exams.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { SchoolsComponent } from './schools/schools.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { FilterModelComponent } from './filter-model/filter-model.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    DashboardComponent,
    ReportsComponent,
    EmployeesComponent,
    StudentsComponent,
    ExamsComponent,
    FeeDetailsComponent,
    SchoolsComponent,
    EmployeeListComponent,
    SchoolListComponent,
    CollegeDetailsComponent,
    FilterModelComponent,

  ],
  imports: [
    MatCheckboxModule,
    MatDialogModule,
    CommonModule,
    CarouselModule,
    UserRoutingModule,

  ],
  providers:[]
})
export class UserModule { }

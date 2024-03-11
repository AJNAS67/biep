import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    LoginComponent,
    TestComponent,

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

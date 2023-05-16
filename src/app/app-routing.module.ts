import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path: '',

    component: LayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

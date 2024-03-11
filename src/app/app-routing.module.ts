import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guard/auth.guard';


// const routes: Routes = [
//   { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

//   {
//     path: 'auth',
//     loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
//   },

//   {
//     path: '',

//     component: LayoutComponent,
//     children: [
//       {
//         path: 'user',
//         loadChildren: () => import('./user/user.module').then(m => m.UserModule)
//       },


//     ]
//   },


// ];
const routes:Routes=[
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule
      ),canActivate: [AuthGuard],
  },
    {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

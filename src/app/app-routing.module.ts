import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    children: [
      // auth module
      {path: 'login' ,loadChildren: './core/auth/login/login.module#LoginModule'},
      // users module
      { path: 'users', loadChildren: './Modules/users/users.module#UsersModule' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

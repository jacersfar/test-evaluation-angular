import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [ 
  { path: 'authenticate', loadChildren: () => AuthenticationModule },
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: '**', redirectTo: 'authenticate'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{path:'super-admin-login', component: SuperAdminLoginComponent},
  // {path:'admin-dashboard', component:AdminDashboardComponent},
  // {path:'add-tenant', component:AddTenantComponent},
  // {path:'side-nav-bar', component:SideNavBarComponent},
  // {path:'sample',component:SampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

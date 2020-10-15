import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperAdminLoginComponent } from './layouts/super-admin-login/super-admin-login.component';
import { CreateTenantComponent } from './layouts/create-tenant/create-tenant.component';
import { SideNavBarComponent } from './layouts/side-nav-bar/side-nav-bar.component';
import { SuperAdminDashboardComponent } from './layouts/super-admin-dashboard/super-admin-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SuperAdminLoginComponent,
    CreateTenantComponent,
    SideNavBarComponent,
    SuperAdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'add-tenant',
        component:CreateTenantComponent
      },
      {
        path:'admin-dashboard',
        component:SuperAdminDashboardComponent
      },
      {
        path:'',
        component:SuperAdminLoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

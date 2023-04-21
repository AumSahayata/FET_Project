import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'dashboard/report',component:ReportComponent},
{path:'dashboard/profile',component:ProfileComponent},
{path:'dashboard/track',component:TrackComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

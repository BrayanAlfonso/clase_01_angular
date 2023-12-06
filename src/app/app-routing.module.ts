import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { JobopeningsComponent } from './jobopenings/jobopenings.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'JobSearch', component:JobsearchComponent},
  {path:'Curriculum', component: CurriculumComponent},
  {path:'JobOpenings', component: JobopeningsComponent},
  {path:'DashboardAdmin', component: DashboardadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginComponent } from './components/login/login.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"client/add",component:AddClientComponent},
  {path:"client/:id",component:DetailsClientComponent},
  {path:"client/edit/:id",component:EditClientComponent},
  {path:"register",component:RegisterComponent},
  {path:"setting",component:SettingsComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

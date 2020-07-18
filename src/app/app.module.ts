import { environment } from './../environments/environment';

import { AuthClientService } from './services/auth-client.service';
import { ClientService } from './services/client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'

//had module hwa responsable 3la authentification bin component et firestore
import { AngularFireAuthModule } from 'angularfire2/auth'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    AddClientComponent,
    EditClientComponent,
    DetailsClientComponent,
    NavBarComponent,
    SidebarComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ClientService,
    AuthClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { StreetartListComponent } from './pages/streetart-list/streetart-list.component';
import { StreetartCreateComponent } from './pages/streetart-create/streetart-create.component';
import { StreetartDetailComponent } from './pages/streetart-detail/streetart-detail.component';
import { StreetartProfileComponent } from './pages/streetart-profile/streetart-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'streetart-list', component: StreetartListComponent }, 
  { path: 'profile', component: StreetartProfileComponent },
  { path: 'streetart-detail', component: StreetartDetailComponent },
  { path: 'streetart-create', component: StreetartCreateComponent },


  
  //{ path: '**', component: NotFoundPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninComponent,
    LoginComponent,
    StreetartListComponent,
    StreetartCreateComponent,
    StreetartDetailComponent,
    StreetartProfileComponent
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';



import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { StreetartListComponent } from './pages/streetart-list/streetart-list.component';
import { StreetartCreateComponent } from './pages/streetart-create/streetart-create.component';
import { StreetartProfileComponent } from './pages/streetart-profile/streetart-profile.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { StreetartCardComponent } from './components/streetart-card/streetart-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [InitAuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [RequireAnonGuard] },
  { path: 'signup', component: SigninComponent,canActivate: [RequireAnonGuard] },
  { path: 'streetart', component: StreetartListComponent, canActivate: [InitAuthGuard] }, 
  { path: 'profile', component: StreetartProfileComponent, canActivate: [RequireUserGuard]},
  { path: 'streetart/create', component: StreetartCreateComponent, canActivate: [RequireUserGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [InitAuthGuard]},



  
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
    StreetartProfileComponent,
    StreetartCardComponent,
    NotFoundComponent
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

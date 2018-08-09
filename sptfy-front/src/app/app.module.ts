import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './not-authorized/login/login.component';
import { WelcomeComponent } from './not-authorized/welcome/welcome.component';
import { RegisterComponent } from './not-authorized/register/register.component';
import { IndexMenuComponent } from './index-menu/index-menu.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {RequestsService} from "./requests.service";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: IndexMenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    IndexMenuComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

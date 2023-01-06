import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { ReactivefromsComponent } from './reactivefroms/reactivefroms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    LoginComponent,
    SignupComponent,
    BindingComponent,
    DirectiveComponent,
    FormsComponent,
    ReactivefromsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

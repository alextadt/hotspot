import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}

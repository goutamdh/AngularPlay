import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { DynamicFormInputComponent } from './users/dynamic/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from './users/dynamic/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormInputComponent,
    DynamicFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, UsersComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

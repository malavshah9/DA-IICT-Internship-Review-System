import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { SelectRecruiterComponent } from './select-recruiter/select-recruiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({ 
  declarations: [
    AppComponent,
    ViewAllReviewsComponent,
    SelectRecruiterComponent
=======

import { MatCardModule, } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";


import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllReviewsComponent,
    SideMenuComponent,
>>>>>>> 7224aab5e0a3e4da7d6de53ebc5b6f269b5b50da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
<<<<<<< HEAD
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule
=======
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule
>>>>>>> 7224aab5e0a3e4da7d6de53ebc5b6f269b5b50da
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

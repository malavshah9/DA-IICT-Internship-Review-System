import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule, } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddInternshipComponent } from './add-internship/add-internship.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material';
=======
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { WriteFeedbackComponent } from './write-feedback/write-feedback.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewInternshipComponent } from './view-internship/view-internship.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
>>>>>>> 2c312a32ee6903a75c181eee2d9ec9915cf7555d

@NgModule({
  declarations: [
    AppComponent,
    ViewAllReviewsComponent,
    SideMenuComponent,
<<<<<<< HEAD
    AddInternshipComponent
=======
    WriteFeedbackComponent,
    ViewInternshipComponent,
>>>>>>> 2c312a32ee6903a75c181eee2d9ec9915cf7555d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
<<<<<<< HEAD
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule
=======
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
>>>>>>> 2c312a32ee6903a75c181eee2d9ec9915cf7555d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

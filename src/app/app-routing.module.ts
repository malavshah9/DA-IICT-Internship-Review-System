import { AddInternshipComponent } from './add-internship/add-internship.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';

const routes: Routes = [
  { path: 'reviews', component: ViewAllReviewsComponent },
  { path: 'add_internship', component: AddInternshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

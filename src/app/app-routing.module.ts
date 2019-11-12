import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { WriteFeedbackComponent } from './write-feedback/write-feedback.component';
import { ViewInternshipComponent } from './view-internship/view-internship.component';

const routes: Routes = [
  { path: 'reviews', component: ViewAllReviewsComponent },
  { path: 'feedback', component: WriteFeedbackComponent },
  { path: 'internship', component: ViewInternshipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AddInternshipComponent } from './add-internship/add-internship.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { WriteFeedbackComponent } from './write-feedback/write-feedback.component';
import { ViewInternshipComponent } from './view-internship/view-internship.component';

const routes: Routes = [
  { path: 'reviews', component: ViewAllReviewsComponent },
<<<<<<< HEAD
  { path: 'add_internship', component: AddInternshipComponent}
=======
  { path: 'feedback', component: WriteFeedbackComponent },
  { path: 'internship', component: ViewInternshipComponent },
>>>>>>> 2c312a32ee6903a75c181eee2d9ec9915cf7555d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

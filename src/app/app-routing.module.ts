import { SelectRecruiterComponent } from './select-recruiter/select-recruiter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';

const routes: Routes = [
<<<<<<< HEAD
{path: 'select_recruiter' , component: SelectRecruiterComponent}
=======
  { path: 'reviews', component: ViewAllReviewsComponent }
>>>>>>> 7224aab5e0a3e4da7d6de53ebc5b6f269b5b50da
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

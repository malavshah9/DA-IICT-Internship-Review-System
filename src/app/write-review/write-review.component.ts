import { StarRatingColor } from './../star-rating/star-rating.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { StarRatingColor } from '../star-rating/star-rating.component';
@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent {
  current_rating=2;
  startColor:StarRatingColor=StarRatingColor.accent;
  reviewForm = this.fb.group({
    title: [null,  Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    ],
    cons: [null,  Validators.compose([
      Validators.required, Validators.minLength(50), Validators.maxLength(400)])
    ],
    pros: [null,  Validators.compose([
      Validators.required, Validators.minLength(50), Validators.maxLength(400)])
    ],
    rating: [null, Validators.compose([
      Validators.required])
    ],
    description: [null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(50)])
    ]
  });
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<WriteReviewComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(" component : view-all-internship")
  }
  // @Inject(MAT_DIALOG_DATA) public data: any);
  onSubmit() {
    alert('Thanks!');
    this.dialogRef.close();
  }
  onClose(){
    this.dialogRef.close();
  }
  onRatingChanged(event){
    console.log(event);
    this.current_rating=event;
    // this.current_rating++;
    console.log("star clicked");
  }
}

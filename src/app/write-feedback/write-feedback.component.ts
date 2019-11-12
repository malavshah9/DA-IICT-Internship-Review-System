import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-write-feedback',
  templateUrl: './write-feedback.component.html',
  styleUrls: ['./write-feedback.component.scss']
})
export class WriteFeedbackComponent {
  feedbackForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required]
  });
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    alert('Thanks!');
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // this.srcResult = e.target.result;
        console.log(e.target.result);
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}

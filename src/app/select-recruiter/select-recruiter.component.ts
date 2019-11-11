import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-recruiter',
  templateUrl: './select-recruiter.component.html',
  styleUrls: ['./select-recruiter.component.scss']
})
export class SelectRecruiterComponent implements OnInit {
  selectRecruiter:FormGroup;
  constructor() { 
    this.selectRecruiter=new FormGroup({
      recruiters:new FormControl('')
    });
   }

  ngOnInit() {
  }
  onSubmit()
  {
    alert("onsubmit");
    var tmp=this.selectRecruiter.value.recruiters;
    alert(tmp);

  }

}

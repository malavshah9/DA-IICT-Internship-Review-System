import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-internship',
  templateUrl: './add-internship.component.html',
  styleUrls: ['./add-internship.component.scss']
})
export class AddInternshipComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  companies: String[]=['a','b','c','d','e','g'];
  locations:String[]=['Ahmedabad','Pune','Banglore'];
  profiles:String[]=['Front-End','Back-End','Full-Stack'];
  types:String[]=['Summer','Winter'];
  selectRecruiterFormGroup:FormGroup;
  selectCompanyFormGroup:FormGroup;
  selectJobLocationFormGroup:FormGroup;
  selectFacultyFormGroup:FormGroup;
  isCompany:boolean=false;
  ngOnInit() {
    this.selectRecruiterFormGroup = this._formBuilder.group({
      recruiters: ['', Validators.required]
    });
    this.selectCompanyFormGroup = this._formBuilder.group({
      companyName: ['', Validators.required]
    });
    this.selectFacultyFormGroup = this._formBuilder.group({
      facultyName: ['', Validators.required]
    });
    this.selectJobLocationFormGroup = this._formBuilder.group({
      selectedLocation: ['', Validators.required],
      selectedProfile:['',Validators.required],
      selectedInternshipType:['',Validators.required]
    });


  }
  recruiterSubmit()
  {
    let val=this.selectRecruiterFormGroup.value.recruiters;
    if(val=="company")
    {
      this.isCompany=true;
    }
    else
    {
      this.isCompany=false;
    }
  }

}

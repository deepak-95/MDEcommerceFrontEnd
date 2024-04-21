import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = this._formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    emailAddress:['',Validators.required],
    passWord:['',Validators.required]

  })
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm = this._formBuilder.group({
    emailId: ['', Validators.required, Validators.email],
    passWord: ['', Validators.required]
  })
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}




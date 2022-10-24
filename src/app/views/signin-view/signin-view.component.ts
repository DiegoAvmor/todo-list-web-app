import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin-view',
  templateUrl: './signin-view.component.html',
  styleUrls: ['./signin-view.component.css']
})
export class SigninViewComponent implements OnInit {

  signInForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    const passwordFormControl = new FormControl("", Validators.required);

    this.signInForm = new FormBuilder().group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: passwordFormControl,
    });
  }

  get controls() {
    return this.signInForm.controls;
  }
}

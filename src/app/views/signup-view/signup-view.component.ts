import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/PassworValidator';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {

  signUpForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    const passwordFormControl = new FormControl("", Validators.required);

    this.signUpForm = new FormBuilder().group({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: passwordFormControl,
      passwordRepetition: new FormControl("", [
        Validators.required,
        PasswordValidator.repetition(passwordFormControl),
      ]),
    });
  }

  get controls() {
    return this.signUpForm.controls;
  }
}

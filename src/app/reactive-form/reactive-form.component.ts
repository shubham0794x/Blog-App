import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  careers: string[];

  registerForm: FormGroup;
  name: FormControl;
  email: FormControl;
  age: FormControl;
  career: FormControl;
  password: FormControl;
  passwordConfirmation: FormControl;

  constructor() {
    this.careers = ['Computer Science', 'Mathematics', 'Biology', 'Physics', 'Chemistry'];

    this.name = new FormControl('', [ Validators.required, CustomValidator.nameValidator ]);
    this.email = new FormControl('', [ Validators.required, Validators.email ]);
    this.password = new FormControl('', [ Validators.required, Validators.minLength(8) ]);
    this.passwordConfirmation = new FormControl('', [ Validators.required, Validators.minLength(8)]);
    this.age = new FormControl('', [ Validators.required, CustomValidator.ageValidator(1, 99) /*Validators.min(1), Validators.max(99)*/]);
    this.career = new FormControl('', [ Validators.required ]);

    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
      age: this.age,
      career: this.career
    }, [CustomValidator.checkPassword]);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Creating user...');
    console.log(this.registerForm.value);
    console.log(this.name.value);
  }

}

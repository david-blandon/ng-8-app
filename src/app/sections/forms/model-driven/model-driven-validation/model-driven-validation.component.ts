import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-validation',
  templateUrl: './model-driven-validation.component.html',
  styleUrls: ['./model-driven-validation.component.scss']
})
export class ModelDrivenValidationComponent implements OnInit {

  form: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null],
      confirmPassword: [null],
      language: [null],
    })
  }

  get firstname():FormControl {
    return this.form.get('firstname') as FormControl;
  }

  get email():FormControl {
    return this.form.get('email') as FormControl;
  }

  onSubmit() {
    console.log(this.form);
  }

}


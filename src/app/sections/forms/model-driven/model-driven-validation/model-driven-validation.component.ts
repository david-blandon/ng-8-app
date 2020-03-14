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
      firstname: null,
      lastname: [null],
      email: [null],
      password: [null],
      confirmPassword: [null],
      language: [null],
    })
  }

  get firstname():FormControl {
    return this.form.get('firstname') as FormControl;
  }

  onSubmit() {
    console.log(this.form);
  }

}


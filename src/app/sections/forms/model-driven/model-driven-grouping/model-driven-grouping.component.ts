import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-grouping',
  templateUrl: './model-driven-grouping.component.html',
  styleUrls: ['./model-driven-grouping.component.scss']
})
export class ModelDrivenGroupingComponent implements OnInit {

  form: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      userData: this.fb.group({
        firstname: [null, Validators.required],
        lastname: [null],
      }),
      email: [null, [Validators.required, Validators.email]],
      password: [null],
      confirmPassword: [null],
      language: [null],
    })
  }

  get userDataGroup():FormGroup {
    return this.form.get('userData') as FormGroup;
  }

  get firstname():FormControl {
    return this.form.get('firstname') as FormControl;
  }

  onSubmit() {
    console.log(this.form);
  }

}



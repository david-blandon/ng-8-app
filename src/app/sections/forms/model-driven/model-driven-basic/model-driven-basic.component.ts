import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-basic',
  templateUrl: './model-driven-basic.component.html',
  styleUrls: ['./model-driven-basic.component.scss']
})
export class ModelDrivenBasicComponent implements OnInit {

  form: FormGroup;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      language: new FormControl(),
    });

    // this.form = this.fb.group({
    //   firstname: null,
    //   lastname: null,
    //   email: null,
    //   password: null,
    //   confirmPassword: null,
    //   language: null,
    // })

  }

  onSubmit() {
    console.log(this.form);
  }

}

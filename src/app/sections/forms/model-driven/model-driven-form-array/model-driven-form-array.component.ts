import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form-array',
  templateUrl: './model-driven-form-array.component.html',
  styleUrls: ['./model-driven-form-array.component.scss']
})
export class ModelDrivenFormArrayComponent implements OnInit {

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
      hobbies: this.fb.array([])
    })
  }

  get userDataGroup():FormGroup {
    return this.form.get('userData') as FormGroup;
  }

  get firstname():FormControl {
    return this.form.get('userData.firstname') as FormControl;
  }

  get hobbies() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  onAddHobbies() {
    (<FormArray>this.form.get('hobbies')).push(
      this.createHobby()
    );
  }

  onDelete(index) {
    (<FormArray>this.form.get('hobbies')).removeAt(index);
  }

  onSubmit() {
    console.log(this.form);
  }

  private createHobby(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      frecuency: new FormControl(null, [
        Validators.required
      ])
    });
  }

}

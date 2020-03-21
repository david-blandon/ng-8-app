import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-model-driven-custom-validation',
  templateUrl: './model-driven-custom-validation.component.html',
  styleUrls: ['./model-driven-custom-validation.component.scss']
})
export class ModelDrivenCustomValidationComponent implements OnInit {

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
      email: ['', [Validators.required, Validators.email], this.forbiddenEmails],
      password: [null],
      confirmPassword: [null, this.confirmPasswordValidator],
      language: [null],
      hobbies: this.fb.array([])
    })
  }

  get userDataGroup(): FormGroup {
    return this.form.get('userData') as FormGroup;
  }

  get firstname(): FormControl {
    return this.form.get('userData.firstname') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
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

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {

    if (!control.parent || !control) {
      return null;
    }

    const password = control.parent.get('password');
    const confirmPassword = control.parent.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (confirmPassword.value === '') {
      return null;
    }

    if (password.value === confirmPassword.value) {
      return null;
    }

    return { passwordsNotMatching: true };
  };

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}

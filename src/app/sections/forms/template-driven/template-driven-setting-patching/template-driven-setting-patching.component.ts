import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-setting-patching',
  templateUrl: './template-driven-setting-patching.component.html',
  styleUrls: ['./template-driven-setting-patching.component.scss']
})
export class TemplateDrivenSettingPatchingComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  email: string;
  lang: string;

  constructor() { }

  ngOnInit() {
    console.log(this.form)

    this.email = "david@test.com";

    // setTimeout(() => {
    //   this.form.setValue({
    //     userData: {
    //       firstname: "David",
    //       lastname: "Blandon"
    //     },
    //     email: null,
    //     password: null,
    //     confirmPassword: null,
    //     language: null
    //   });
    // })

    setTimeout(() => {
      this.form.form.patchValue({
        userData: {
          firstname: "David"
        }
      });
    })

  }

  onSubmit() {

  }
}

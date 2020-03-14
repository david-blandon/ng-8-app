import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validation',
  templateUrl: './template-driven-validation.component.html',
  styleUrls: ['./template-driven-validation.component.scss']
})
export class TemplateDrivenValidationComponent implements OnInit {

  langs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

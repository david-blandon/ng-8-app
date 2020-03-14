import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-basic',
  templateUrl: './template-driven-basic.component.html',
  styleUrls: ['./template-driven-basic.component.scss']
})
export class TemplateDrivenBasicComponent implements OnInit {

  langs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: HTMLFormElement) {
    console.log(form);
  }
}

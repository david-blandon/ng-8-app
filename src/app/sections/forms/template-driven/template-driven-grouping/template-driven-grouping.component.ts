import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-grouping',
  templateUrl: './template-driven-grouping.component.html',
  styleUrls: ['./template-driven-grouping.component.scss']
})
export class TemplateDrivenGroupingComponent implements OnInit {

  langs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

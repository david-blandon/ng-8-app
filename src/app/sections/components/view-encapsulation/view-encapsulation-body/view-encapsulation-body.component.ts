import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-body',
  templateUrl: './view-encapsulation-body.component.html',
  styleUrls: ['./view-encapsulation-body.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-header',
  templateUrl: './view-encapsulation-header.component.html',
  styleUrls: ['./view-encapsulation-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-footer',
  templateUrl: './view-encapsulation-footer.component.html',
  styleUrls: ['./view-encapsulation-footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

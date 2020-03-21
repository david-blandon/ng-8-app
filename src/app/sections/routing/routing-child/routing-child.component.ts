import { Component, OnInit } from '@angular/core';
import { RoutingChildService } from './routing-child.service';

@Component({
  selector: 'app-routing-child',
  templateUrl: './routing-child.component.html',
  styleUrls: ['./routing-child.component.scss']
})
export class RoutingChildComponent implements OnInit {

  isEditMode$ = this.routingChildService.editModeChange$.asObservable();

  constructor(private routingChildService: RoutingChildService) { }

  ngOnInit() {
  }
}

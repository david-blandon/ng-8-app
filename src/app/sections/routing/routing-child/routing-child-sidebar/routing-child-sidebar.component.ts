import { Component, OnInit } from '@angular/core';
import { RoutingChildService } from '../routing-child.service';

@Component({
  selector: 'app-routing-child-sidebar',
  templateUrl: './routing-child-sidebar.component.html',
  styleUrls: ['./routing-child-sidebar.component.scss']
})
export class RoutingChildSidebarComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private routingChildService: RoutingChildService) { }

  ngOnInit() {
    this.servers = this.routingChildService.getServers();
  }
}

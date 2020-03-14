import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-routing-resolve',
  templateUrl: './routing-resolve.component.html',
  styleUrls: ['./routing-resolve.component.scss']
})
export class RoutingResolveComponent implements OnInit {

  server: { id: number, name: string, status: string };

  changesSaved: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
  }

  onSubmit() {

  }
}

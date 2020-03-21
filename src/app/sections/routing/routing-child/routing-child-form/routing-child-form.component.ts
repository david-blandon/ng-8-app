import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingChildService } from '../routing-child.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-child-form',
  templateUrl: './routing-child-form.component.html',
  styleUrls: ['./routing-child-form.component.scss']
})
export class RoutingChildFormComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  private subscription = new Subscription();

  constructor(
    private routingChildService: RoutingChildService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];
    this.server = this.routingChildService.getServer(id);
    // Subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onEdit():void {
    this.routingChildService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onCancel():void {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingChildService } from '../routing-child.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-routing-child-view',
  templateUrl: './routing-child-view.component.html',
  styleUrls: ['./routing-child-view.component.scss']
})
export class RoutingChildViewComponent implements OnInit, OnDestroy {

  server: {id: number, name: string, status: string};

  private subscription = new Subscription();

  constructor(
    private routingChildService: RoutingChildService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.routingChildService.getServer(id);

    // this.subscription = this.activatedRoute.params
    // .subscribe(
    //   (params: Params) => {
    //     this.server = this.routingChildService.getServer(+params['id']);
    //   }
    // );
  }

  onEdit(): void {
    this.router.navigate(['../edit'], {relativeTo: this.activatedRoute})
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

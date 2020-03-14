import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ServersService } from '../routing-resolve/servers.service';

@Component({
  selector: 'app-routing-can-deactivate',
  templateUrl: './routing-can-deactivate.component.html',
  styleUrls: ['./routing-can-deactivate.component.scss']
})
export class RoutingCanDeactivateComponent implements OnInit, CanComponentDeactivate {
  servers: {id: number, name: string, status: string}[] = [];
  user: {id: number, firstname: string, email: string};

  allowEdit:boolean = true;
  changesSaved:boolean = false;
  firstname:string = '';
  email:string = '';

  constructor(
    private serverService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: 1,
      firstname: "David B",
      email: "test@test.com"
    };

    this.servers = this.serverService.getServers();

    this.email = this.user.email;
    this.firstname = this.user.firstname;
  }

  onSubmit() {
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.firstname !== this.user.firstname || this.email !== this.user.email) && !this.changesSaved) {
      return confirm('¿Quieres descartar los cambios?');
    } else {
      return true;
    }
  }
}

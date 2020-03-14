import { Component, OnInit } from '@angular/core';
import { ObservableSubjectService } from './observable-subject.service';

@Component({
  selector: 'app-observables-subject',
  templateUrl: './observables-subject.component.html',
  styleUrls: ['./observables-subject.component.scss']
})
export class ObservablesSubjectComponent implements OnInit {

  constructor(
    private service: ObservableSubjectService
  ) { }

  ngOnInit() {
  }

  onActivate() {
    this.service.activatedEmitter.next(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { ObservableSubjectService } from '../observables-subject/observable-subject.service';

@Component({
  selector: 'app-observables-subject-child',
  templateUrl: './observables-subject-child.component.html',
  styleUrls: ['./observables-subject-child.component.scss']
})
export class ObservablesSubjectChildComponent implements OnInit {

  isActive: boolean = false;

  constructor(
    private service: ObservableSubjectService
  ) { }

  ngOnInit() {
    this.service.activatedEmitter.subscribe(data => {
      this.isActive = data;
    })
  }

}

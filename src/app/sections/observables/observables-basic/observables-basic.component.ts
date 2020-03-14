import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables-basic',
  templateUrl: './observables-basic.component.html',
  styleUrls: ['./observables-basic.component.scss']
})
export class ObservablesBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    interval(1000).subscribe(count => {
      console.log(count);
    });

    // const customIntervalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     if (count === 5) {
    //       observer.complete();
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('Count is greater 3!'));
    //     }
    //     count++;
    //   }, 1000);
    // });


    // customIntervalObservable.subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    //   alert(error.message);
    // }, () => {
    //   console.log('Completed!');
    // });

  }

}

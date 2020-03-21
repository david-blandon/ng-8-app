import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval, merge, of, timer } from 'rxjs';
import { filter, map, debounceTime, switchMap, distinctUntilChanged, take, mergeMap, concatMap, delay, exhaustMap } from 'rxjs/operators';
import { ObservableOperatorvice } from './observables-operator.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-observables-operator',
  templateUrl: './observables-operator.component.html',
  styleUrls: ['./observables-operator.component.scss']
})
export class ObservablesOperatorComponent implements OnInit, OnDestroy {

  private subs: Subscription;

  form: FormGroup;

  itunes: any;
  itunesMerge: any[] = [];
  itunesExhaust: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: ObservableOperatorvice
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: [null]
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


    // this.subs = customIntervalObservable.pipe(
    //   filter(data => {
    //     return data > 0;
    //   }),
    //   map((data: number) => {
    //     return 'Round: ' + (data + 1);
    //   }))
    //   .subscribe(data => {
    //     console.log(data);
    //   }, error => {
    //     console.log(error);
    //     alert(error.message);
    //   }, () => {
    //     console.log('Completed!');
    //   });

    this.service.getNumber().subscribe(data => console.log(data));

    this.form.get('search').valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.service.search(term))
      )
      .subscribe((response: any) => {
        console.log(response)
        this.itunes = response;
      });
  }

  onMergeMap(): void {
    this.itunesMerge = [];

    const source$ = interval(1000).pipe(
      map(value => "Source " + value),
      take(5)
    );

    source$.pipe(
      mergeMap(sv => interval(500).pipe(
        map(value => sv + " | Inner " + value),
        take(10))
      )
    ).subscribe(value => console.log(value))
  }

  onMergeMapAjax(): void {
    this.itunesMerge = [];

    const source$ = of('Metallica', 'Madona', 'Eminen');
    source$.pipe(
      mergeMap(term => this.service.search(term))
    ).subscribe((response: any) => {

      this.itunesMerge.push(...response.results);
    });
  }

  onConcatMap(): void {
    const source$ = interval(1000).pipe(
      map(value => "Source " + value),
      take(5)
    );

    source$.pipe(
      concatMap(sv => interval(500).pipe(
        map(value => sv + " | Inner " + value),
        take(10))
      )
    ).subscribe(value => console.log(value))
  }

  onExhaustMap(): void {
    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(2));

    firstInterval
      .pipe(
        exhaustMap(f => {
          console.log(`Emission Corrected of first interval: ${f}`);
          return secondInterval;
        })
      )
      .subscribe(s => console.log(s));
  }


  onExhaustMapAjax(): void {
    this.itunesMerge = [];

    const source$ = of('Metallica', 'Madona', 'Eminen');
    source$.pipe(
      exhaustMap(term => this.service.search(term))
    ).subscribe((response: any) => {

      this.itunesMerge.push(...response.results);
    });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {TestComponent} from "../test/test.component";
import {TestForNgrxComponent} from "../test-for-ngrx/test-for-ngrx.component";
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-test-data',
  standalone: true,
    imports: [
        AsyncPipe,
        TestComponent,
        TestForNgrxComponent
    ],
  templateUrl: './test-data.component.html',
  styleUrl: './test-data.component.scss'
})
export class TestDataComponent implements OnInit {
  title = 'angular-ngrx';
  countWONgrx: number = 0;
  countWNgrx: number = 0;

  countValueWONgrx: string = '';
  countValueWNgrx: string = '';
  counterValue$: any
  counterValueSelector$: any

  constructor(private realStore:Store<any>) {

    // we can subscribe to the store
    realStore.subscribe((val) => {
      this.counterValue$ = val.counterNumber;
      console.log(this.counterValue$);
    })

    // we can use selector to get the value. Then we can get observable again we need to subscribe so we can directly use async pipe
    this.counterValueSelector$ = realStore.select('counterNumber');
    console.log(this.counterValueSelector$);
  }

  ngOnInit(): void {
  }

  // without ngrx
  incrementCountWONgrx() {
    this.countWONgrx++;
    this.countValueWONgrx = 'Value from parent: ' + this.countWONgrx + ' (without ngrx)' + ' Increment button clicked on child';
  }
  decrementCountWONgrx() {
    this.countWONgrx--;
    this.countValueWONgrx = this.countWONgrx > 0 ? 'Value from parent: ' + this.countWONgrx + ' (without ngrx)' + ' Decrement button clicked on child' : '';
  }

  // with ngrx
  incrementCountWNgrx() {
    this.countWNgrx++;
    this.countValueWNgrx = 'Value from parent: ' + this.countWNgrx + ' (with ngrx)' + ' Increment button clicked on child';
  }
  decrementCountWNgrx() {
    this.countWNgrx--;
    this.countValueWNgrx = this.countWNgrx > 0 ? 'Value from parent: ' + this.countWNgrx + ' (with ngrx)' + ' Decrement button clicked on child' : '';
  }
}

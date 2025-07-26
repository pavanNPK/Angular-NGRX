import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {Store} from '@ngrx/store';
import {decreaseAction, increaseAction, resetAction} from '../store/count.actions';

@Component({
  selector: 'app-test-for-ngrx',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test-for-ngrx.component.html',
  styleUrls: ['./test-for-ngrx.component.scss']
})
export class TestForNgrxComponent implements OnInit {

  countValue: number= 0;
  constructor(private realStore:Store<any>) { }

  ngOnInit(): void {
  }

  incrementWNgrx(){
    this.realStore.dispatch(increaseAction())
  }
  decrementWNgrx(){
    this.realStore.dispatch(decreaseAction())
  }
  resetWNgrx(){
    this.realStore.dispatch(resetAction())
  }
}

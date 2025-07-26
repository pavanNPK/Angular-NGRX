import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  @Output() incrementCountWONgrxEmit =  new EventEmitter<any>();
  @Output() decrementCountWONgrxEmit = new EventEmitter<any>();
  @Input() countValue = '';

  decrementWONgrx() {
    this.decrementCountWONgrxEmit.emit();
  }
  incrementWONgrx() {
    this.incrementCountWONgrxEmit.emit();
  }
}

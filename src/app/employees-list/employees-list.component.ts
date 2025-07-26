import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AsyncPipe, CurrencyPipe, NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [
    AsyncPipe, NgFor, RouterLink, CurrencyPipe
  ],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent implements OnInit {

  employeesData$: any

  constructor(private realStore:Store<any>) {

    // this is one method with subscribe no need to use in async in template
    this.realStore.select('employeesData').subscribe((val) => {
      this.employeesData$ = val.employees;
      console.log(this.employeesData$);
    })

    // this is second method with async in template
    // this.employeesData$ = this.realStore.select('employeesData');
    // console.log(this.employeesData$);
  }

  ngOnInit(): void {
  }

  deleteEmployee(id: any) {
    console.log(id);
    // here we can dispatch action
    this.realStore.dispatch({
      type: '[Employees List] DELETE_EMPLOYEE',
      id});
  }

  updateEmployee(id: any) {
    console.log(id);
    // here we can dispatch action
    this.realStore.dispatch({
      type: '[Employees List] UPDATE_EMPLOYEE',
      id});
  }
}

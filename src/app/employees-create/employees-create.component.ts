import {Component, OnInit} from '@angular/core';
import {Location, NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employees-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './employees-create.component.html',
  styleUrl: './employees-create.component.scss'
})
export class EmployeesCreateComponent implements OnInit {
  employeeForm!: FormGroup | any;

  constructor(private location: Location, private fb: FormBuilder, private  realStore:Store<any>, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeForm =this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  backToList(){
    this.location.back();
  }

  createEmployee(){
    if (this.employeeForm.invalid) {
      return;
    } else {
      console.log(this.employeeForm.value);
      this.realStore.dispatch({
        type: '[Employees List] CREATE_EMPLOYEE',
        data: this.employeeForm.value
      });
      this.route.navigate(['employees']);
    }
  }

}

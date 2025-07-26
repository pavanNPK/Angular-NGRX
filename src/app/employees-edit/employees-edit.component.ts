import { Component, OnInit } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-edit',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './employees-edit.component.html',
  styleUrl: './employees-edit.component.scss'
})
export class EmployeesEditComponent implements OnInit {
  employeeForm!: FormGroup;
  employeesData$: any;
  employeeId!: number;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form first
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required]
    });

    // Get route param and fetch employee
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];

      this.store.select('employeesData').subscribe((val) => {
        const employee = val.employees?.find((emp: any) => emp.id === this.employeeId);

        if (employee) {
          this.employeeForm.patchValue(employee);
        } else {
          console.warn(`Employee with id ${this.employeeId} not found.`);
        }

        this.employeesData$ = val.employees;
      });
    });
  }

  backToList() {
    this.location.back();
  }

  updateEmployee() {
    if (this.employeeForm.valid) {
      const updatedEmployee = this.employeeForm.value;
      console.log('Updating employee:', updatedEmployee);

      // Dispatch update action here if using NgRx
      this.store.dispatch({
        type: '[Employees List] UPDATE_EMPLOYEE',
        data: updatedEmployee});
      // Optionally navigate back
      this.backToList();
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}

import {createAction} from '@ngrx/store';

export const deleteEmployeeAction = createAction('[Employees List] DELETE_EMPLOYEE', (id: number) => ({id}));
export const createEmployeeAction = createAction('[Employees List] CREATE_EMPLOYEE', (data: any) => ({data}));
export const updateEmployeeAction = createAction('[Employees List] UPDATE_EMPLOYEE', (data: any) => ({data}));

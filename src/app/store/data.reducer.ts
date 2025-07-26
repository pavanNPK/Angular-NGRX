import {createReducer, on} from '@ngrx/store';
import {createEmployeeAction, deleteEmployeeAction, updateEmployeeAction} from './data.actions';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'Hossam',
      salary: 22000
    },
    {
      id: 2,
      name: 'Ahmed',
      salary: 25000
    },
    {
      id: 3,
      name: 'Ali',
      salary: 30000
    },
    {
      id: 4,
      name: 'Ahmed',
      salary: 25000
    },
  ],
};
export const createDataReducer = createReducer(
  initialState,
  on(deleteEmployeeAction, (state, {id}) => {
    console.log(id, state, '.....');
    return {
      ...state,
      employees: state.employees.filter((emp) => emp.id !== id),
    };
  }),
  on(createEmployeeAction, (state, {data}) => {
    console.log(data, state, '.....');
    let obj  = {
      id: 0,
      ...data
    }
    obj.id = state.employees[state.employees.length - 1].id + 1;
    return {
      ...state,
      employees: [...state.employees, obj],
    };
  }),
  on(updateEmployeeAction, (state, { data }) => {
    const exists = state.employees.some(emp => emp.id === data.id);

    return {
      ...state,
      employees: exists
        ? state.employees.map(emp =>
          emp.id === data.id ? data : emp
        )
        : [...state.employees, data]
    };
  })

);

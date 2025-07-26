import {createAction} from '@ngrx/store';

// we can use the `createAction` function to create actions
// we need to use [] to identify the action type
export const increaseAction = createAction('[Test for Ngrx] Count Increase');
export const decreaseAction = createAction('[Test for Ngrx] Count Decrease');
export const resetAction = createAction('[Test for Ngrx] Count Reset');

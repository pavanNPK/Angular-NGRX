import {createReducer, on} from '@ngrx/store';
import {decreaseAction, increaseAction, resetAction} from './count.actions';

// Define the initial state
const initialState = 0;

// Create the reducer with proper typing
export const counterReducer = createReducer<number>(
  initialState,
  on(increaseAction, (state) => state + 1),
  on(decreaseAction, (state) => state - 1),
  on(resetAction, (state) => 0)
);

//test command -> set CI=true && npm test
//test coverage -> set CI=true && npm test -- --coverage
//report can be found on coverage/lcov-report

import filterReducer from './filterReducer';
import deepFreeze from 'deep-freeze';

describe('filterReducer', () => {
  test('default filter is ALL', () => {
    const returnedState = filterReducer(undefined, 'NO_ACTION');
    expect(returnedState).toBe('ALL');
  });


  test('filter can be changed', () => {
    const state = 'ALL';
    deepFreeze(state);
    const newState = filterReducer(state, { type: 'SET_FILTER', filter:'IMPORTANT' });
    expect(newState).toBe('IMPORTANT');
  });
});
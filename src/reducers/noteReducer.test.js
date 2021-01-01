//test command -> set CI=true && npm test
//test coverage -> set CI=true && npm test -- --coverage
//report can be found on coverage/lcov-report

import noteReducer from './noteReducer';
import deepFreeze from 'deep-freeze';

describe('noteReducer', () => {


  test('returns new state with action NEW_NOTE', () => {
    const state = [];
    const action = {
      type: 'NEW_NOTE',
      data: {
        content:'the app state is in redux store',
        important: true,
        id: 1
      }
    };

    //keeping the state in deepFreeze ensures that the state is not mutated
    //by the reducer
    //reducers should always replace the old state with a new state
    //but never directly make any changes to the old state
    deepFreeze(state);

    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(action.data);
  });


  test('returns new state with action TOGGLE_IMPORTANCE', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      },
      {
        content: 'state change is made with actions',
        important: false,
        id: 2
      }
    ];
    const action = {
      type: 'TOGGLE_IMPORTANCE',
      data: {
        id: 2
      }
    };

    //keeping the state in deepFreeze ensures that the state is not mutated
    //by the reducer
    //reducers should always replace the old state with a new state
    //but never directly make any changes to the old state
    deepFreeze(state);

    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      content: state[1].content,
      important: true,
      id: state[1].id
    });
  });
});


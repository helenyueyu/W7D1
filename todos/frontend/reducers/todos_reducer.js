import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'Find out who\'s the most attractive TA?',
    body: 'Probably Elliot',
    done: false
  },
  2: {
    id: 2,
    title: 'Survey who can pull off the mustache the best?',
    body: 'Potentially Ronil???(I don\'t think so)',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      // TODOS may look like this:
      // [ {1: { id:1, title.... }}, {2:{ id:2, title... }} ]
      action.todos.map( (el) => {
        nextState[el.id] = el;
      });
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
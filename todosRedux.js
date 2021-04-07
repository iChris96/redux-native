const { createStore } = require('redux');

// ...helpers
const filters = {
    all: 'ALL',
    completed: 'COMPLETED',
    incompleted: 'INCOMPLETED'
}

// actions
const SET_FILTER = 'SET_FILTER';
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

//action creators
const setFilter = payload => ({ type: SET_FILTER, payload });
const addTodo = payload => ({ type: ADD_TODO, payload });
const completeTodo = payload => ({ type: COMPLETE_TODO, payload });

// reducer
const initialState = {
    todos: [],
    filter: filters.all
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload].concat(state.todos)
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, idx) => idx === action.payload ? { ...todo, completed: true } : todo)
            };
        default:
            return state;
    }
}

const store = createStore(counter)
store.subscribe(() => console.log("something was dispatched: ", store.getState())); // run in every dispatch call

store.dispatch(addTodo({ msg: "first todo" }));
store.dispatch(addTodo({ msg: "second todo" }));
store.dispatch(setFilter(filters.completed));
store.dispatch(completeTodo(0)); //  { todos: [ { msg: 'second todo', completed: true }, { msg: 'first todo' } ],  filter: 'COMPLETED' }

const { createStore, combineReducers } = require('redux');

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

// reducers
const filterReducer = (state = filters.all, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload
        default:
            return state;
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload].concat(state)
        case COMPLETE_TODO:
            return state.map((todo, idx) => idx === action.payload ? { ...todo, completed: true } : todo)
        default:
            return state;
    }
}

const reducer = combineReducers({
    filter: filterReducer,
    todos: todosReducer
})

const store = createStore(reducer)
store.subscribe(() => console.log("something was dispatched: ", store.getState())); // run in every dispatch call

store.dispatch(addTodo({ msg: "first todo" }));
store.dispatch(addTodo({ msg: "second todo" }));
store.dispatch(addTodo({ msg: "third todo" }));
store.dispatch(setFilter(filters.completed));
store.dispatch(completeTodo(0)); //  {filter: 'COMPLETED',todos: [  { msg: 'third todo', completed: true },  { msg: 'second todo' },  { msg: 'first todo' }]}

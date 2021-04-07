const { createStore } = require('redux');

// actions
const INCREASE = 'increase';
const DECREASE = 'decrease';


//action creators
const increaseAction = () => ({ type: INCREASE });
const decreaseAction = () => ({ type: DECREASE });


// reducer
const initialState = 0;
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;
            break;
        case DECREASE:
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

const store = createStore(counter)
store.subscribe(() => console.log("something was dispatched: ", store.getState())); // run in every dispatch call

store.dispatch(increaseAction());
store.dispatch(increaseAction());
store.dispatch(increaseAction());

console.log(store.getState()) //3

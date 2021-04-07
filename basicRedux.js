const { createStore } = require('redux');

// reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'increase':
            return state + 1;
            break;
        case 'decrease':
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

const store = createStore(counter)
store.subscribe(() => console.log("something was dispatched: ", store.getState())); // run in every dispatch call

store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });
store.dispatch({ type: 'decrease' });
console.log(store.getState()) //2

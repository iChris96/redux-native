/* 
    Using same action-creators in multiples scenarios 
*/

const makeType = mode => type => `${mode}/${type}`
const listType = makeType('LIST');

// actions
const ADD_TODO = listType('ADD_TODO'); // -> LIST/ADD_TODO;
const REMOVE_TODO = listType('REMOVE_TODO'); // -> LIST/REMOVE_TODO;

// ----> problem example 1 <----

const addTodo = payload({ //works but is redundant
    type: ADD_TODO,
    payload
})

const removeTodo = payload({
    type: REMOVE_TODO,
    payload
})

// ----> solution 1  <----

const makeActionCreator = (type, ...argNames) => (...args) => {
    const action = { type }
    console.log(argNames)
    argNames.forEach((arg, idx) => {
        action[argNames[idx]] = args[idx]
    })
    return action;
}


const addTodoAction = makeActionCreator(ADD_TODO, 'payload')
const removeTodoAction = makeActionCreator(REMOVE_TODO, 'payload')
addTodoAction(1) // -> { type: 'LISTA/ADD_TODO', payload: 1}
addTodoAction({ text: 'some text', isCompleted: true }) // -> { type: 'LISTA/ADD_TODO', payload: { text: 'some text', isCompleted: true}}
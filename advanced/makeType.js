/* 
    Using same action-verb in multiples files 

*/

// ----> problem example 1 <----

//file 1
const ADD_TODO = 'ADD_TODO'; //This will work if you are using this action-vern in a single file
//file 2
const ADD_TODO = 'ADD_TODO'; //This will not work

// ----> problem example 1 <----

//file 1
const ADD_TODO = 'ADD_TODO';
//file 2
const ADD_TODO = 'ADD_TODO_2'; //This will work, but isn't the best practice

// ----> solution 1 <----

//file 1
const ADD_TODO = 'LIST/ADD_TODO'; //this works and is a better practice
const REMOVE_TODO = 'LIST/REMOVE_TODO';
const UPDATE_TODO = 'LIST/UPDATE_TODO';

//file 2
const ADD_TODO = 'FORM/ADD_TODO';
const REMOVE_TODO = 'FORM/REMOVE_TODO';
const UPDATE_TODO = 'FORM/UPDATE_TODO';

// ----> solution 2 <----

const makeType = mode => type => `${mode}/${type}`

//file1
const listType = makeType('LIST');
const ADD_TODO = listType('ADD_TODO'); // -> LIST/ADD_TODO;
const REMOVE_TODO = listType('REMOVE_TODO'); // -> LIST/REMOVE_TODO;

//file2
const formType = makeType('FORM');
const ADD_TODO = formType('ADD_TODO'); // -> FORM/ADD_TODO;
const REMOVE_TODO = formType('REMOVE_TODO'); // -> FORM/REMOVE_TODO;
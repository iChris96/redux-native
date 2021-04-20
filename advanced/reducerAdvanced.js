
//actions
const FETCH_START = 'TODOS/FETCH_START';
const FETCH_SUCCESS = 'TODOS/FETCH_SUCCESS';
const FETCH_ERROR = 'TODOS/FETCH_ERROR';

//action creators
const startFetch = () => ({ type: FETCH_START });
const sucessFetch = payload => ({ type: FETCH_SUCCESS, payload })
const errorFetch = payload => ({ type: FETCH_ERROR, payload })


//reducer
const initialState = {
    data: [],
    fetched: false,
    fetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                fetching: true,
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        }
        case FETCH_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
    }
}

//redux thunk
export const fetch = () => {
    async (dispatch, getState) => {
        dispatch(startFetch());
        try {
            const response = await fetch('www.api/todos');
            const data = await response.json();
            sucessFetch(data);
        } catch (e) {
            dispatch(errorFetch(e));
        }
    }
}

export default reducer;
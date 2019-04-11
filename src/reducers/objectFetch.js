import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED } from "../actions/manualFetch";


const initialState = {
    todoObj: {},
    loading: false,
    error: "",
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_START: return {...state, loading: true};
        case FETCH_TODOS_SUCCESS: return {
            ...state, 
            loading: false,
            todoObj: action.payload.todo
        };
        case FETCH_TODOS_FAILED: return {
            ...state, 
            loading: false,
            error: action.payload.error
        };


        default: return state;
    }
}

export default todosReducer;
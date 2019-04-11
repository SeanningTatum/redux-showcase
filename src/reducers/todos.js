import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED } from "../actions/todos";


const initialState = {
    todosArr: [],
    loading: false,
    error: "",
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_START: return {...state, loading: true};
        case FETCH_TODOS_SUCCESS: return {
            ...state, 
            loading: false,
            todosArr: action.payload.todos
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
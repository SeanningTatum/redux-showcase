import {INCREMENT, DECREMENT} from '../actions/counter';

const initialState = {
    counter: 100,
}



const reducer = (state = initialState, action) => {
    console.log(action.type)    

    switch(action.type) {
        case INCREMENT: {
            return {
                ...state, 
                counter: state.counter + parseInt(action.payload.incrementNumber)
            }
        }
        case DECREMENT: 
            return {
                ...state, 
                counter: state.counter - +(action.payload.decrementNumber)
            }

        default: return state;

    }
}

export default reducer




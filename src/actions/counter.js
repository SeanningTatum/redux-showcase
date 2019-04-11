export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (number) => ({
    type: INCREMENT,
    payload: {
        incrementNumber: number,
    }
})

export const decrement = (number) => ({
    type: DECREMENT,
    payload: {
        decrementNumber: number,
    }
})



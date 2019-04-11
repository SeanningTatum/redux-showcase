export const FETCH_TODOS_START = 'FETCH_TODOS_START'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'


const fetchTodosStart = () => ({
    type: FETCH_TODOS_START,
})

const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: {todos}
})

const fetchTodosErrors = (error) => ({
    type: FETCH_TODOS_FAILED,
    payload: {error}
})

export const fetchTodos = () => {
    return dispatch => {
        dispatch(fetchTodosStart())

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                // throw new Error('MY ERROR')
                dispatch(fetchTodosSuccess(data))
            })
            .catch(error => {
                console.error(error)
                dispatch(fetchTodosErrors(error.message))
            })

    }
}


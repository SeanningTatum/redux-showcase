export const FETCH_TODOS_START = 'FETCH_TODOS_START'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED'


const fetchTodosStart = (todoId) => ({
    type: FETCH_TODOS_START,
    payload: {todoId}
})

const fetchTodosSuccess = (todo) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: {todo}
})

const fetchTodosErrors = (error) => ({
    type: FETCH_TODOS_FAILED,
    payload: {error}
})

export const fetchTodos = (todoId) => {
    return async function (dispatch) {
        dispatch(fetchTodosStart(todoId))

        try {


            const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + +todoId)
            const data = await response.json();
    
            dispatch(fetchTodosSuccess(data))
        } catch(error) {
            dispatch(fetchTodosErrors(error.message))
        }
        

    }
}

// fetch('https://jsonplaceholder.typicode.com/todos/' + +todoId)
//     .then(response => response.data())
//     .then(data => {
//         dispatch(fetchTodosSuccess(data))
//     })
//     .catch(error => {
//         dispatch(fetchTodosErrors(error.message))

//     })


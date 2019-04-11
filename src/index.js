import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import counterReducer from './reducers/counter'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import todosReducer from './reducers/todos';
import todoObjReducer from './reducers/objectFetch'

const reducers = combineReducers({
    ctr: counterReducer,
    todos: todosReducer,
    todoObj: todoObjReducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

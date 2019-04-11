import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterActions from './components/counterActions';
import { fetchTodos } from './actions/manualFetch';
import {Spinner, Card, CardBody, Row, Col} from 'reactstrap'
class App extends Component {

  state = {
    number: 1,
  }

  componentDidMount() {
    this.props.fetchTodos(1);
  }

  render() {
    return (
      <div className="App">
        {/* <h5>Counter: {this.props.counter}</h5> */}
        <input 
          type="text" 
          value={this.state.number} 
          onChange={(event) => {
            this.setState({number: event.target.value})
            this.props.fetchTodos(event.target.value)
            }}/>

      
        {/* <CounterActions number={this.state.number} /> */}

        

        {/* <div className="mt-5">
          {this.props.todosLoading && <Spinner color="primary" />}
          {this.props.todosError !== '' && <h5>{this.props.todosError}</h5>}
          {this.props.todos.map(todo => (
            <Row>
              <Col md={3}>
                <Card key={todo.id} className="mr-3 mb-5">
                  <CardBody>
                    <h3>{todo.title}</h3>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))}
        </div> */}

        <div className="mt-5">
          {this.props.todoObjLoading && <Spinner color="primary" />}
          {this.props.todoObjError !== '' && <h5>{this.props.todoObjError}</h5>}
          {JSON.stringify(this.props.todoObj)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.ctr.counter,
  todosLoading: state.todos.loading,
  todos: state.todos.todosArr,
  todosError: state.todos.error,

  todoObjLoading: state.todoObj.loading,
  todoObj: state.todoObj.todoObj,
  todoObjError: state.todoObj.error
  
})

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: (number) => dispatch(fetchTodos(number))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);

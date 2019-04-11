import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter';

const CounterActions = (props) => {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <button onClick={() => props.dec(props.number)} style={{marginRight: '12px'}}>Decrement</button>
        <button onClick={() => props.inc(props.number)}>Increment</button>
        
    </div>
  )
}

const mapStateToProps = (state) => ({
    ctr: state.ctr.counter,
})

const mapDispatchToProps = (dispatch) => ({
    inc: (num) => dispatch(increment(num)),
    dec: (num) => dispatch(decrement(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterActions)
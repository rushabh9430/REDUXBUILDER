import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
function Counter() {

    // Counter 
    const data = useSelector((counter) => counter.CounterReducer.state1)
    const Dispatch = useDispatch()

    const onClickIncrease = () => {
        Dispatch({type : 'INCREMENT'})
    }

    const onClickDecrease = () => {
        Dispatch({type : 'DECREMENT'})
    }

    // Theme Switcher 

  return (
    <div className='counter'>
        <div className='my-5 d-flex justify-content-center marginTop_150 '>
        <button className='btn btn-dark py-1 px-5 mx-5 counter_button' onClick={onClickIncrease}>+</button>
        {data}
        <button className='btn btn-dark py-1 px-5 mx-5 counter_button' onClick={onClickDecrease} >-</button>
    </div>
    </div>
  )
}

export default Counter
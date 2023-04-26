import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  // need to pass a function to useSelector which will determine what data we are looking; for a slice
  // it automatically suscribes the store and updates the state whenever there is a state change ans if we unmount the component it also clea the subscription
  const dispatch = useDispatch();

  const incrementHandler =()=>{
    dispatch( {
      type: 'increment'
    })
  }
  const dreementHandler =()=>{
    dispatch( {
      type: 'decrement'
    })
  }
  const incrementby5handler = ()=>{
    dispatch(
      {
        type:'incrementby5'
      }
    )
  }
  const decrementby5handler = ()=>{
    dispatch(
      {
        type:'decrementby5'
      }
    )
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={dreementHandler}>Decrement</button>
      <button onClick={incrementby5handler}>Increment by 5</button>
      <button onClick={decrementby5handler}>Decrement by 5</button>
    </main>
  );
};

export default Counter;

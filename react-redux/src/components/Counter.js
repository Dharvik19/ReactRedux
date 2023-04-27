import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {counterActions}from '../Store/index'
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);// first counter is the property name we chose in reducer object second counter is the initial counter state
  const show = useSelector(state=> state.counter.showCounter);
  // need to pass a function to useSelector which will determine what data we are looking; for a slice
  // it automatically suscribes the store and updates the state whenever there is a state change ans if we unmount the component it also clea the subscription
  const dispatch = useDispatch();

  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }
  const dreementHandler =()=>{
    dispatch(counterActions.decrement())
  }
  const incrementby5handler = ()=>{
    dispatch(
      counterActions.incrementBy5(5)
    )
  }
  const decrementby5handler = ()=>{
    dispatch(
      counterActions.decrementBy5(5)
    )
  }
  // const toggleCounterHandler = () => {
  //   dispatch({
  //     type: 'toggle'
  //   })
  // };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={dreementHandler}>Decrement</button>
      <button onClick={incrementby5handler}>Increment by 5</button>
      <button onClick={decrementby5handler}>Decrement by 5</button>
    </main>
  );
};

export default Counter;

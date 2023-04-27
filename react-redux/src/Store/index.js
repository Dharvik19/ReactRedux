// import {createStore} from 'redux';
// import { legacy_createStore as createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit';
const initialState = {counter:0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementBy5(state, action){
            state.counter = state.counter + action.payload;
        },
        decrementBy5(state, action){
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }

})
const initialAuthState = {
    isAuthenticated: false
}
const authSlice =createSlice({
    name: 'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logOut(state){
            state.isAuthenticated = false;
        },
    }
})
// const counterReducer = (state = initialState, action)=>{
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter + action.value,
//             showCounter : state.showCounter
//             //if we don not add showCounter here the property value would be undefined and it is treated as falsy and hence it will not render the counter
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - action.value,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'incrementby5'){
//         return {
//             counter : state.counter + action.value,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'decrementby5'){
//         return{
//             counter: state.counter - action.value,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }
// const store   = createStore(counterSlice.reducer);

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth:authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
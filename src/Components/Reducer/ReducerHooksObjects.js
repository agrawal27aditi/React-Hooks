import React, { useReducer } from 'react';

//Using useReducer with objects state and actions both can be objects.
const initialState = {
    firstCounter: 0,
    secoundCounter:5
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'increment 2':
            return { ...state,firstCounter: state.firstCounter + action.value }
        case 'decrement 2':
            return { ...state,firstCounter: state.firstCounter - action.value }
        case 'increment 5':
            return { ...state,secoundCounter: state.secoundCounter + action.value }
        case 'decrement 5':
            return { ...state,secoundCounter: state.secoundCounter - action.value }

        case 'reset':
            return initialState;
        default:
            return state;
    }

}

export default function HookReducerObjects() {
    const [count, dispatch] = useReducer(reducer, initialState);
    //dispatch here is a method to dispatch appropriate action.
    return (
        <div>
            <div> First counter-{count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment 2', value: 2 })}>increment by 2</button>
                <button onClick={() => dispatch({ type: 'decrement 2', value: 2 })}>decrement by 2</button>
            </div>
            <div> Second counter-{count.secoundCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment 5', value: 5 })}>increment by 5</button>
                <button onClick={() => dispatch({ type: 'decrement 5', value: 5 })}>decrement by 5</button>
            </div>

            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </div>
    )
}

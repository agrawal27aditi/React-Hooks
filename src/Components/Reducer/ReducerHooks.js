import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

export default function HookReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    //dispatch here is a method to dispatch appropriate action.
    return (
        <div>
            <div>count-{count}</div>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>

        </div>
    )
}

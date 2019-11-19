import React, { useRef, useEffect } from 'react';

//Useref
// 1. This hook helps to access DOM nodes directly from the functional ComponentC.

export default function HooksRef() {
    const inputRef = useRef(null);
    
    useEffect(() =>
        inputRef.current.focus(),[]);

    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}
import React, { useState, useEffect } from 'react';

export default function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)

    }
    useEffect(() => {
        console.log('useEffect Called')
        console.log(window.addEventListener);
        window.addEventListener('mousemove', logMousePosition)

        return()=>{
            console.log("We are unMounting this Component")
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])
    /* If we dont mention any array of value in the second argrument then useeffect is rendered everytim
    as we haven't mentioned the dependency of that UseEffect--
    --> Here we want our UseEffect to be called only once like ComponentDidMount
    we can do this by passing [](empty array) this means that our useEffect is not dependent
    on any state or props*/
    return (
        <div>
            X:{x} Y:{y}
        </div>
    )
}

/*Rules of Hooks
    1.Always describe hooks at the Top,not in nested loops,condition or functions
    2.Always use  hooks in react functional components not in regular JS functions*/

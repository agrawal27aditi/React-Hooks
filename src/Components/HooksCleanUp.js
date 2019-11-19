import React, { useState } from 'react';
import HookMouse from './HookMouse';

export default function HooksCleanUp() {
    const [display, setdisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setdisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />
            }
        </div>
    )
}

/* So here we have one problem --->
when the condition of display is true --It is working fine 
but when the condition of display becomes false after clicking on the
button then we get a warning and the mouse coodrinates still gets updated-->
this is becoz here we did not unMounted a component .
so it is ver important when we unmount a component--->>
make sure to remove all the subscriptions,methodsfrom the background.

Earlier we could have done this very easily by using the life Cycle method but
now we need to do this via UsEffect---> so we know UseEffect take first argument as a function 
which can RETURN A FUNCTION(this will help us to unMount the component.)*/
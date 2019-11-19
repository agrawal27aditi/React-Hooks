import React, { useState,useEffect ,useRef} from 'react';

export default function HookSetStateObjects() {
    /* The main difference between setsate of class component VS the  setter functional of UseState
    is that setState merge the pervious state value to next state value while Use state function will not update the values in case of Objects,
    we need to do it manually..To handle manual merge we can use spread operators*/


    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <>
            
            <input
                type="text"
                value={name.firstName}
                placeholder="Enter First Name"
                onChange={e => setName({ ...name, firstName: e.target.value })}
                required />
             <input
                type="text"
                value={name.lastName}
                placeholder="Enter First Name"
                onChange={e => setName({ ...name, lastName: e.target.value })}
                required />
        
        <h2> Your First Name is:{name.firstName} </h2><br />
        <h2> Your Last Name is:{name.lastName} </h2><br />
        </>
    )
}


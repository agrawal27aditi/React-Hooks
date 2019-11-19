/*

Advantages

1.Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props.
A secondary benefit (of Effect hooks in particular) is the avoidance of bugs that might otherwise arise if state-dependent side effects are not properly handled within componentDidUpdate (since Effect hooks ensure that such side effects are setup and torn-down on every render).
See also the peformance and readability benefits detailed below.

 2.Close replacepement for 3 lifeCycle Methods known as componentDidMount,componentDidUpdate,
 componentWillUnmount

 3. UseState and UseEffect both are functions.
Use cases

Any component that implements stateful logic using lifecycle methods—the Effect hook is a "Better Way".

*/

import React,{useState,useEffect} from 'react';

export default function HooksEffect()
{
    const[count,setcount]=useState(0);
    const[name,setName]=useState('');
    /*Conditionally working of useEffect
    1. useEffect takes two agrauments--one function and other as a array of values
    -->This array of value can be any prop or state for which that UseEffect is dependent */
    useEffect(()=>{
        console.log('useeffect--->Updating document title')
        document.title=`You clicked ${count} times`
    }, [])

    /* Here useEffect has a great uasge of not rendering the component every time by mentioning one exta
    parameter (Array of values)i.e. count which means that this useEffect will work or render on change of count */

    /* here if we want our useEffect to run only once like componentDidMount then too can be done .Just by passing an empty array
    which means that react will understand that this useeffect is not dependent on any of the state or props so run only once. */

    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setcount(count +1)}>Count {count}</button>
        </div>
    )
}

import React,{useState} from 'react';

export default function HookCounter()
{
    const[count,setcount]=useState(0)//useState take inital value which returns a pair of value (state Variable,function to update state Variable)
    //Above Syntax is called as Array Destructing
    //setCount will always take argument
    //On RE-Render default value is never used,always the current value of count is used
    return(
        <div>
            <button onClick={()=>setcount(count +1)}>Count {count}</button>
        </div>
    )
}

/*Rules of Hooks 
    1.Always describe hooks at the Top level ,not in nested loops,condition or functions
    2.Always use  hooks in react functional components not in regular JS functions*/

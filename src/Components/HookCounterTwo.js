import React,{useState} from 'react';

 export default function HookCounterTwo(){
     const initalCount=0;
     const [count,setCount]=useState(initalCount);
     return(
         <div>
             Count:{count}
             <button onClick={()=>setCount(initalCount)}>Reset</button>
             <br/>
             <button onClick={()=>setCount(count+1)}>Increment</button>
             <br/>
             <button  onClick={()=>setCount(count-1)}>Decrement</button>
             <br/>
             <button onClick={()=>setCount(prevState=>prevState+1)}>Increment Via Previous State</button>
             <br/>             
             <button  onClick={()=>setCount(prevState=>prevState-1)}>Decrement via Previous state</button>
             
         </div>
     )
 } 
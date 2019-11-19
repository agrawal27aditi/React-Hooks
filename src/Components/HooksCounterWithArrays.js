import React,{useState} from 'react';

export default function HookCounterFour()
{
    const[item,setItems]=useState([]);//Inital value of items is empty array here.
    
    /*1.This function will randomly add no.s in the list .
     2.Since we know useState does not updates the value in case of objects, so we need 
     to do it manually i.e. with the help of spread Operator
     3.Here in setItems we have two aruguments
        a.)This is having the value of item present .
        b.)second argument is for pushing the new value in the array where the value is the form
        of (key, value)
    */
    const addNumbers=()=>{
        setItems([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <div>
            <button onClick={addNumbers}>Add Numbers</button>
            <ul>
                {item.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}
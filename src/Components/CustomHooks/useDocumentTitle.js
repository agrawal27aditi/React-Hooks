import {useEffect}from 'react';

//1.When we write use with functions, then linters rely on this and determine it as hooks.
//2. Here the same logic is used without duplicating it rather reusing our stateful logic.



export default function useDocumentTitle(count){
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])
}
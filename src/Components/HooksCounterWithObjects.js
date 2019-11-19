import React, { useState,useEffect ,useRef} from 'react';

export default function HookCounterThree() {
    /* The main difference between setsate of class component VS the  setter functional of UseState
    is that setState merge the pervious state value to next state value while Use state function will not update the values in case of Objects,
    we need to do it manually..To handle manual merge we can use spread operators*/

    // const inputRef =useRef(null);//Ref is created and initally value is null

    // useEffect(()=>{
    //     inputRef.current.focus();
    // },[])

    const fnRef = useRef(null);

    const [name, setName] = useState({ firstName: '', lastName: '' });
    let defaultPersons = [
        { firstName: "Aditi", lastName: "Agrawal" },
        { firstName: "Ginni ", lastName: "Arora" },
        { firstName: "Jayne", lastName: "Goyal" }
    ];
    const [persons, setPersons] = useState(defaultPersons)

    const getNames = () => {
        setName({ firstName: fnRef.current.value, lastName: name.lastName });
        setPersons([...persons, { firstName: fnRef.current.value, lastName: name.lastName }]);
        setName({ firstName: '', lastName: '' });
        fnRef.current.value= '';
    }

    return (
        <>
            <h2>Basic Form </h2><br />
            <input
                type="text"
                placeholder="Enter First Name"
                ref={fnRef}
                required />
            <br></br>
            <input
                type="text"
                value={name.lastName}
                placeholder="Enter First Name"
                onChange={e => setName({ ...name, lastName: e.target.value })}
                required />
            <div>

            </div>
            <button onClick={getNames}>Add Names</button>
            <ul>
                {persons.map(item => (
                    <li key={item.firstName}>{item.firstName} {item.lastName}</li>
                ))}
            </ul>

        </>
    )
}

/*Meaning Of line 13 and 17 line--->
    Hey copy all the properties in the name object then just override the first Name
    field with name value. */

/*   
useEffect takes two argruments
1. arrow Function,
2.dependency array as second argument...
we leave array empty as we want arrow function to be executedd only once.
 */

 /* 
 UseRef can be created in 3 ways:
 1.import it
 2. Then make a ref variable*/
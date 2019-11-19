import React,{ useContext } from 'react';
import { UserContext, ChannelContext } from '../App'

export default function ComponentE()
{
    // Now calling useContext and passing our context as an agrument in it.
     const user = useContext(UserContext);
     const channel= useContext(ChannelContext);
    return(
        <div>
            My Name is {user}.Currently working with {channel}
         </div>
    )
}

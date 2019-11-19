import React from 'react';
import HookCounter from './Components/UseState/HooksSetState1';
import HookSetStateObjects from './Components/UseState/HooksSetState2';
import HooksEffect from './Components/UseEffects/HooksEffectPart1';

import ComponentC from './Context/ComponentC';
import HookReducer from './Components/Reducer/ReducerHooks';
import HookReducerObjects from './Components/Reducer/ReducerHooksObjects'
import HooksRef from './Components/Refs/HooksRefs'
import DocumentA from './Components/CustomHooks/DocA';
import DocumentB from './Components/CustomHooks/DocB';
import './App.css';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* Example of UseState  */}
       {/* <HookCounter /> */}
      <br></br>
      {/* <HookSetStateObjects />  */}
      {/* Example of UseEffect  */}
      {/* <HooksEffect /> */}
      {/* Example of UseContext  */}
      {/* <UserContext.Provider value="Aditi">
        <ChannelContext.Provider value="BristleCone">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* Example of UseReducer */}
      {/* <HookReducer /> */}
      {/* <HookReducerObjects /> */}
      {/* Example of UseRef  */}
      {/* <HooksRef /> */}
      <DocumentA/>
      <DocumentB/>
    </div>
  );
}

export default App;

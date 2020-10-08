import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemoCounter from './UseMemoHook/MemoCounter';
import FocusInput from './useRef/FocusInput';

// import ClassCounter from './useState/ClassCounter';
// import HookCounter from './useState/HookCounter';
// import ClassCounterTwo from './useState/ClassCounterTwo';
// import HookCounterTwo from './useState/HookcounterTwo';
// import WithObject from './useState/WithObject';
// import WithArray from './useState/WithArray';

// import DidMountCount from './useEffect/DidMountCount';
// import EffectHook_Count from './useEffect/EffectHook_Count';
// import ClassMouse from './useEffect/ClassMouse';
// import EffectHookMouse from './useEffect/EffectHookMouse';
// import WillUnmountButton from './useEffect/WillUnmount';
// import DataFetching from './useEffect/FetchDataWithuseEffect/DataFetching';

// import ComponentOne from './useContext/ComponentOne';
// export const userContext = React.createContext()
// export const channelContext = React.createContext()

// import Counter from './useReducer/Counter';
// import CounterTwo from './useReducer/CounterTwo';
// import MultipleuseReducers from './useReducer/MultipleuseReducers';

// import MainAppForuseReducerWithuseContext from './useReducerWithuseContext/MainAppForuseReducerWithuseContext';

// import DataFetch from './FetchDatauseinguseRender/DataFetch';
// import DataFetchWithuseReducer from './FetchDatauseinguseRender/DataFetchWithuseReducer';


// import ParentComponent from './UseCallBackHook/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* useState */}
      {/* <ClassCounter />
       <HookCounter /> */}
      {/* <ClassCounterTwo /> 
       <HookCounterTwo />*/}
      {/* <WithObject/> */}
      {/* <WithArray /> */}

      {/* useEffect */}

      {/* <DidMountCount /> */}
      {/* <EffectHook_Count /> */}
      {/* <ClassMouse /> */}
      {/* <EffectHookMouse /> */}
      {/* <WillUnmountButton/> */}

      {/* FetchDataWithUseEffect */}
      {/* <DataFetching /> */}


      {/* useContext */}
      {/* <channelContext.Provider value='you can'>
        <userContext.Provider value='div'>
          <ComponentOne />
        </userContext.Provider>
      </channelContext.Provider> */}

      {/* useReducer */}
      {/* <Counter /> simple state & action */}
      {/* <CounterTwo />complex state & action */}
      {/* <MultipleuseReducers /> */}

      {/* useReducer with useContext */}
      {/* <MainAppForuseReducerWithuseContext /> */}

      {/* FetchData useing useRender */}
      {/* <DataFetch /> */}
      {/* <DataFetchWithuseReducer /> */}

      {/* useCallBack Hook */}

      {/* <ParentComponent /> */}

      {/* useMemo Hook */}
      {/* <MemoCounter /> */}

      {/* useRef */}
      <FocusInput />
    </div>
  );
}

export default App;

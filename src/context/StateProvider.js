import react, { createContext,useReducer,useContext } from 'react';

//Prepares the data layer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children})=>{
    return <StateContext.Provider value={useReducer(reducer,initialState)}>
        { children }
    </StateContext.Provider>
}

//Pull information from data layer
export const useStateValue = () => useContext(StateContext);
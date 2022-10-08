import { createContext } from "react";
export const 

/*1-set initialState when app loads*/
const initialState={

}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    cost [state,dispatch]=const [state, dispatch] = useReducer(Appreducer, initialState)
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
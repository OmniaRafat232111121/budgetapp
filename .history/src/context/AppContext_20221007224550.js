import { createContext } from "react";
export const AppReducer=(state,action)=>{
   
}

/*1-set initialState when app loads*/
const initialState={

}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [state, dispatch] = useReducer(Appeducer, initialState)
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
import { createContext } from "react";
export const AppReducer=(state,a)=>{
   
}

/*1-set initialState when app loads*/
const initialState={

}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [state, dispatch] = useReducer(Appreducer, initialState)
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
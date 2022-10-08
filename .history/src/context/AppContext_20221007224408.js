import { createContext } from "react";
/*1-set initialState when app loads*/
const initialState={

}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    cost [state,dispat]
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
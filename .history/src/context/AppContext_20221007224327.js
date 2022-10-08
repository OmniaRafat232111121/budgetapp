import { createContext } from "react";
//1-set initialState when app loads
const initialSttate={
    
}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
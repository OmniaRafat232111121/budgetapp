import { createContext } from "react";

export const AppContext=createContext();
export const AppProvider=(props)=>{
    return(
        <AppContext.Provider>
        {props.childre}
        </AppContext.Provider>
    )
}
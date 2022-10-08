import { createContext } from "react";
export const AppReducer=(state,action)=>{
   switch(action.type){
    de
   }
}

/*1-set initialState when app loads*/
const initialState={
    budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
	],

}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return(
        <AppContext.Provider>
        {props.children}
        </AppContext.Provider>
    )
}
import { createContext , useState } from "react";

const Context = createContext();

export function TestPorvider ({children}){
    const [light , setLight] = useState(false);
    const handleLight = ()=>{
        setLight(!light);
    }
    return(
        <Context.Provider value={{light , handleLight}}>
            {children}
        </Context.Provider>
    )
}

export default Context ; 
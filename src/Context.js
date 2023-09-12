import { createContext , useState , useEffect } from "react";

const Context = createContext();

export function TestPorvider ({children}){
    const [light , setLight] = useState(true);
    const [login , setLogin] =useState();

    const handleLight = ()=>{
        setLight(!light);
    }

    return(
        <Context.Provider value={{light , handleLight  }}>
            {children}
        </Context.Provider>
    )
}

export default Context ; 
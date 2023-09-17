import { createContext , useState , useEffect } from "react";

const Context = createContext();

export function TestPorvider ({children}){
    const [light , setLight] = useState(true);
    useEffect(()=>{setLight(JSON.parse(localStorage.getItem("Dark")));},[light])
    const [login , setLogin] =useState();

    const handleLight = ()=>{
        setLight(!light);
        localStorage.setItem("Dark", JSON.stringify(!light))
        
    }

    return(
        <Context.Provider value={{light , handleLight  }}>
            {children}
        </Context.Provider>
    )
}

export default Context ; 
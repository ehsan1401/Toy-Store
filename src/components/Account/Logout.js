import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.clear();
        navigate("/Login");
        window.location.reload(false);
    },[])
    return (
    <></>
    );
}
 
export default Logout;
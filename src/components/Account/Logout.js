import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.clear();
        navigate(-1);
        window.location.reload(false);
    },[])
    return (
    <></>
    );
}
 
export default Logout;
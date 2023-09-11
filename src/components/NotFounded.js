import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import Context from "../Context";

const NotFounded = () => {
    const navigate = useNavigate();
    const {light} = useContext(Context);
    return (
        <div>
            {
            light &&
                <div className="bg-gray-50 text-center" >
                    <div className="md:h-2/3 h-full p-10 md:flex grid">
                        <img src="/img/Not-Founded.png" className="md:w-1/2 w-full h-full" />
                        <div className="info-details flex flex-col justify-center items-center md:w-1/2 w-full">
                            <h1 className="bg-clip-text text-transparent font-bold text-8xl py-5 bg-gradient-to-r from-orange-400 to-lime-400 ">Oppps...</h1>
                            <p className="text-2xl  font-light">We did not find the page you were looking for</p>
                            <button onClick={() => navigate(-1)} className="px-3 py-2 bg-gradient-to-t from-blue-500 to-lime-500 text-white font-semibold m-5 rounded-xl">Back</button>
                        </div>
                    </div>
                </div>
            }{
            !light &&
                <div className="bg-gray-600 text-center" >
                    <div className="md:h-2/3 h-full p-10 md:flex grid">
                        <img src="/img/Not-Founded.png" className="md:w-1/2 w-full h-full" />
                        <div className="info-details flex flex-col justify-center items-center md:w-1/2 w-full">
                            <h1 className="bg-clip-text text-transparent font-bold text-8xl py-5 bg-gradient-to-r from-orange-400 to-lime-400 ">Oppps...</h1>
                            <p className="text-2xl  font-light text-gray-200">We did not find the page you were looking for</p>
                            <button onClick={() => navigate(-1)} className="px-3 py-2 bg-gradient-to-t from-blue-800 to-gray-400 hover:hue-rotate-180 transition duration-500 text-white font-semibold m-5 rounded-xl">Back</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default NotFounded;
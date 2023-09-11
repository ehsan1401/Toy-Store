import { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import users from '../../DB/users.json';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import Context from '../../Context';


const Register = () => {

    const {light} = useContext(Context);
    const navigate = useNavigate();
    const [error , setError] = useState("");
    const [sumerror , setSumerror] = useState(false);
    const [visible , setVisible] = useState(true);
    const [visible2 , setVisible2] = useState(true);


    const handleVisiblepassword = () =>{
        const ps1 = document.getElementById("password");
        if(ps1.type === 'password'){
            setVisible(false);
            ps1.type = 'text'
        }else{
            setVisible(true);
            ps1.type = 'password'
        }
    }
    const handleVisibleRepassword = () =>{
        const ps2 = document.getElementById("repassword");
        if(ps2.type === 'password'){
            setVisible2(false);
            ps2.type = 'text'
        }else{
            setVisible2(true);
            ps2.type = 'password'
        }
    }
    
    const handleSubmit= (e)=>{  
        e.preventDefault();
        const data = new FormData(e.target);
        const data_info = Object.fromEntries(data.entries());
        let pass = true;
        if(data_info.Password === data_info.repassword){
            
            users.map((user)=>{

                if(user.email === data_info.email){
                    pass = false;
                }

            })

            if(pass == false){
                setError("This email Already used!");
                setSumerror(true);
            }else{
                setSumerror(true)
                navigate("/Login");
                console.log(data_info)
                // add information to database
            } 
        }else{
            setError("your password and repeate password must be same!");
            setSumerror(true);

        } 
    }



    return (
        <div>
            {light && 
                <div className="Register text-center h-auto bg-gray-50 py-5 px-3 ">
                    <div className="signin border-4 py-5 border-dashed border-gray-600 shadow-2xl m-auto rounded-3xl lg:w-3/5 md:w-4/5 w-full  relative bg-purple-600">
        
                        <img src="./img/minion_background_purple.png" className="background h-1/3 flex items-center  w-full rounded-3xl"/>
                        <div className="sign h-2/3 py-3 rounded-3xl mb-12">
                            {sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-red-600 text-5xl font-extrabold drop-shadow-[-2px_3px_2px_rgba(0,0,0,0.5)]">Register</h1>}
                            {!sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400 text-5xl font-extrabold drop-shadow-[-2px_3px_2px_rgba(0,0,0,0.5)]">Register</h1>}
                            <div className="error text-red-200 m-3 " id="repeate-error"><p>{error}</p></div>
                            <form className=' mt-1 w-2/3 px-5 m-auto' onSubmit={handleSubmit}>
        
                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="email" placeholder='Email' name='email' required  className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full'/><br />
                                    <p className='w-16 '></p>
                                </div>
                                
                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="password" placeholder='Password' name='Password' required className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full' id='password'/><br />
                                    <IconButton onClick={handleVisiblepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                        {visible && <VisibilityOutlinedIcon className=''/>}
                                        {!visible && <VisibilityOffOutlinedIcon className=''  />}
                                    </IconButton>
                                </div>
        
                                <div className='relative flex  ml-5 left-5 my-3'>
                                    <input type="password" placeholder='Repeate Password' id='repassword' name='repassword' required  className='mt-2 mb-3 p-2 px-5 focus:outline-none w-full shadow-md '/><br />
                                    <IconButton onClick={handleVisibleRepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                            {visible2 && <VisibilityOutlinedIcon className=''/>}
                                            {!visible2 && <VisibilityOffOutlinedIcon className=''  />}
                                    </IconButton>
                                </div>
        
                                {
                                    sumerror && <div>
                                        <input type="submit" value={"Register"} className='hover:cursor-pointer mt-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-red-700 to-red-500 hover:to-red-800 ease-in-out rounded-2xl '/> <br />
                                    </div>
                                }
                                                        {
                                    !sumerror && <div>
                                        <input type="submit" value={"Register"} className='hover:cursor-pointer p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-pink-600 to-yellow-400 hover:to-yellow-600 ease-in-out rounded-2xl '/> <br />
                                    </div>
                                }
                            </form>
                            <h1 className='text-left font-thin text-lg flex justify-center text-gray-300 my-5'>already have a Account?<Link to={"/Login"} className='font-semibold px-3 hover:text-green-500'>Login</Link></h1>
                        </div>
                    </div>
        
            </div>}
            {!light && 
                <div className="Register text-center h-auto bg-gray-700 py-5 px-3 ">
                    <div className="signin border-4 py-5 border-dashed border-gray-600 shadow-2xl m-auto rounded-3xl lg:w-3/5 md:w-4/5 w-full  relative bg-purple-800">
        
                        <img src="./img/minion_background_purple.png" className="background h-1/3 flex items-center  w-full rounded-3xl"/>
                        <div className="sign h-2/3 py-3 rounded-3xl mb-12">
                            {sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-red-600 text-5xl font-extrabold drop-shadow-[-2px_3px_2px_rgba(0,0,0,0.5)]">Register</h1>}
                            {!sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400 text-5xl font-extrabold drop-shadow-[-2px_3px_2px_rgba(0,0,0,0.5)]">Register</h1>}
                            <div className="error text-red-200 m-3 " id="repeate-error"><p>{error}</p></div>
                            <form className=' mt-1 w-2/3 px-5 m-auto' onSubmit={handleSubmit}>
        
                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="email" placeholder='Email' name='email' required  className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full'/><br />
                                    <p className='w-16 '></p>
                                </div>
                                
                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="password" placeholder='Password' name='Password' required className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full' id='password'/><br />
                                    <IconButton onClick={handleVisiblepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                        {visible && <VisibilityOutlinedIcon className=''/>}
                                        {!visible && <VisibilityOffOutlinedIcon className=''  />}
                                    </IconButton>
                                </div>
        
                                <div className='relative flex  ml-5 left-5 my-3'>
                                    <input type="password" placeholder='Repeate Password' id='repassword' name='repassword' required  className='mt-2 mb-3 p-2 px-5 focus:outline-none w-full shadow-md '/><br />
                                    <IconButton onClick={handleVisibleRepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                            {visible2 && <VisibilityOutlinedIcon className=''/>}
                                            {!visible2 && <VisibilityOffOutlinedIcon className=''  />}
                                    </IconButton>
                                </div>
        
                                {
                                    sumerror && <div>
                                        <input type="submit" value={"Register"} className='hover:cursor-pointer mt-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-red-700 to-red-500 hover:to-red-800 ease-in-out rounded-2xl '/> <br />
                                    </div>
                                }
                                                        {
                                    !sumerror && <div>
                                        <input type="submit" value={"Register"} className='hover:cursor-pointer p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-pink-600 to-yellow-400 hover:to-yellow-600 ease-in-out rounded-2xl '/> <br />
                                    </div>
                                }
                            </form>
                            <h1 className='text-left font-thin text-lg flex justify-center text-gray-300 my-5'>already have a Account?<Link to={"/Login"} className='font-semibold px-3 hover:text-green-500'>Login</Link></h1>
                        </div>
                    </div>
        
            </div>}
        </div>
    );
}
 
export default Register;
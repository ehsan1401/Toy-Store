import { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import users from '../../DB/users.json';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext } from 'react';
import Context from '../../Context';

const Register = () => {



    console.log(
        "Hi, for Login to website as Admin to can Use this email and password:"
    )
    console.log(
        "Admin@gmail.com ___ pass: Admin"
    )
    console.log(
        "for Login to website as User to can Use these emails and passwords:"
    )
    console.log(
        "1_  ehsan.good1382@gmail.com ___ pass: ehsan3333"
    )
    console.log(
        "2_  michael.14@gmail.com ___ pass: www.michael.com"
    )
    console.log(
        "3_  Ali.1455home@gmail.com ___ pass: ali1415"
    )
    const {light} = useContext(Context);

    const navigate = useNavigate();
    const [error , setError] = useState("");
    const [sumerror , setSumerror] = useState(false);
    const [visible , setVisible] = useState(true);



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


    const handleSubmit = (e)=> {

        e.preventDefault();
        let flag = false;
        const data = new FormData(e.target);
        const data_info = Object.fromEntries(data.entries());
        users.map((user)=>{
            if(data_info.username === "Admin@gmail.com" && data_info.Password === "Admin"){
                if(user.email === "Admin@gmail.com"){
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate("/Dashboard");
                    // window.location.reload(false);
                    // navigate("/Dashboard/" + user.userID);

                }
            }else{

                if(user.email === data_info.username && user.password === data_info.Password){
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate("/Dashboard");
                    window.location.reload(false);
                    
                }
                else{
                    setError("User Not Founded!");
                    setSumerror(true);
                }
            }





        });

        
    }

    const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
        color: theme.status.danger,
        '&.Mui-checked': {
          color: theme.status.danger,
        },
      }));
      
      const theme = createTheme({
        status: {
          danger: orange[700],
        },
      });
    
    



    return (
        <div>
                {light &&         
                    <div className="Register text-center h-auto bg-gray-50 py-5 px-3 ">
                        <div className="signin border-4 py-5 border-dashed border-gray-600 shadow-2xl m-auto rounded-3xl lg:w-3/5 md:w-4/5 w-full  relative bg-yellow-400">

                            <img src="./img/minion_background.png" className="background h-1/3 flex items-center  w-full rounded-3xl"/>
                            <div className="sign h-2/3 py-3 rounded-3xl mb-12">
                                {sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-red-600 text-5xl font-extrabold">Log in </h1>}
                                {!sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-600 text-5xl font-extrabold">Log in</h1>}
                                <div className="error text-red-700 m-3 " id="repeate-error"><p>{error}</p></div>
                                <form className=' mt-1 w-2/3 px-5 m-auto' onSubmit={handleSubmit}>

                                    <div className='relative flex ml-5 left-5 my-3'>
                                        <input type="email" placeholder='Email' name='username' required  className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full'/><br />
                                        <p className='w-16 '></p>
                                    </div>
                                    
                                    <div className='relative flex ml-5 left-5 my-3'>
                                        <input type="password" placeholder='Password' name='Password' required className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full' id='password'/><br />
                                        <IconButton onClick={handleVisiblepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                            {visible && <VisibilityOutlinedIcon className=''/>}
                                            {!visible && <VisibilityOffOutlinedIcon className=''  />}
                                        </IconButton>
                                    </div>

                                    <div className="remember mb-5 text-left ml-14">
                                        <ThemeProvider theme={theme}>
                                            <FormControlLabel
                                                control={
                                                    <CustomCheckbox defaultChecked label="remember" name='remember' className='font-thin' />
                                                }
                                                label = "Remember me on this website."
                                            >
                                            </FormControlLabel>
                                            
                                        </ThemeProvider>
                                    </div>
                                    {
                                        sumerror && <div>
                                            <input type="submit" value={"Log in"} className='p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-red-700 to-red-500 hover:to-red-800 ease-in-out rounded-2xl hover:cursor-pointer'/> <br />
                                        </div>
                                    }
                                                            {
                                        !sumerror && <div>
                                            <input type="submit" value={"Log in"} className=' p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-blue-500 to-teal-500 hover:to-teal-700 ease-in-out rounded-2xl hover:cursor-pointer '/> <br />
                                        </div>
                                    }
                                </form>
                                <h1 className='text-left font-thin text-lg flex justify-center text-gray-800 my-5'>Not a member yet?<Link to={"/Register"} className='font-semibold px-3 hover:text-blue-900'>Register Now</Link></h1>
                                
                            </div>
                        </div>

                </div>}
                {!light &&         
                <div className="Register text-center h-auto bg-gray-700 py-5 px-3 ">
                    <div className="signin border-4 py-5 border-dashed border-gray-600 shadow-2xl m-auto rounded-3xl lg:w-3/5 md:w-4/5 w-full  relative bg-yellow-600">

                        <img src="./img/minion_background.png" className="background h-1/3 flex items-center  w-full rounded-3xl"/>
                        <div className="sign h-2/3 py-3 rounded-3xl mb-12">
                            {sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-red-600 text-5xl font-extrabold">Log in </h1>}
                            {!sumerror && <h1 class="block py-3 px-5 bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-600 text-5xl font-extrabold">Log in</h1>}
                            <div className="error text-red-700 m-3 " id="repeate-error"><p>{error}</p></div>
                            <form className=' mt-1 w-2/3 px-5 m-auto' onSubmit={handleSubmit}>

                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="email" placeholder='Email' name='username' required  className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full'/><br />
                                    <p className='w-16 '></p>
                                </div>
                                
                                <div className='relative flex ml-5 left-5 my-3'>
                                    <input type="password" placeholder='Password' name='Password' required className='my-2 p-2 px-5 focus:outline-none  shadow-md w-full' id='password'/><br />
                                    <IconButton onClick={handleVisiblepassword} className='flex items-center absolute right-14' sx={{width:57}}>
                                        {visible && <VisibilityOutlinedIcon className=''/>}
                                        {!visible && <VisibilityOffOutlinedIcon className=''  />}
                                    </IconButton>
                                </div>

                                <div className="remember mb-5 text-left ml-14">
                                    <ThemeProvider theme={theme}>
                                        <FormControlLabel
                                            control={
                                                <CustomCheckbox defaultChecked label="remember" name='remember' className='font-thin' />
                                            }
                                            label = "Remember me on this website."
                                        >
                                        </FormControlLabel>
                                        
                                    </ThemeProvider>
                                </div>
                                {
                                    sumerror && <div>
                                        <input type="submit" value={"Log in"} className='p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-red-700 to-red-500 hover:to-red-800 ease-in-out rounded-2xl hover:cursor-pointer'/> <br />
                                    </div>
                                }
                                                        {
                                    !sumerror && <div>
                                        <input type="submit" value={"Log in"} className=' p-2 focus:outline-none shadow-md w-full text-white py-3 px-5 bg-gradient-to-r from-blue-500 to-teal-500 hover:to-teal-700 ease-in-out rounded-2xl hover:cursor-pointer '/> <br />
                                    </div>
                                }
                            </form>
                            <h1 className='text-left font-thin text-lg flex justify-center text-gray-800 my-5'>Not a member yet?<Link to={"/Register"} className='font-semibold px-3 hover:text-blue-900'>Register Now</Link></h1>
                            
                        </div>
                    </div>

                </div>}
        </div>
    );
}
 
export default Register;
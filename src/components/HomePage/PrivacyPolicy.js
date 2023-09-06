import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link} from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const PrivacyPolicy = () => {
    
    return (
        <div className="Contactus py-10 px-32 bg-gradient-to-r from-pink-600 to-yellow-400 ">
            <div className="bg-gray-100 p-10 rounded-xl">
                <h1 className="font-bold text-4xl text-gray-800">Privacy Policy</h1>
                <div className="p-5 font-thin">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                    <h5 className="font-bold text-gray-700 text-2xl py-3">Title1</h5>
                    <div className="pl-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                    </div>
                    <h5 className="font-bold text-gray-700 text-2xl py-3">Title2</h5>
                    <div className="pl-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                    </div>
                    <h5 className="font-bold text-gray-700 text-2xl py-3">Title3</h5>
                    <div className="pl-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <ul className="list-disc pl-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </div>
                <h1 className="font-bold text-4xl text-gray-800">Terms of use</h1>
                <div className="p-5 font-thin">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                    <h5 className="font-bold text-gray-700 text-2xl py-3">Title1</h5>
                    <div className="pl-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reprehenderit, quam est distinctio ipsam, ex assumenda magnam in ipsum quod fuga officiis deserunt impedit eligendi, harum consectetur consequatur. Tempora, incidunt!</p>
                    </div>
                    
                </div>
                <FormControlLabel
                className='pl-12'
                    label="I Agree with Privacy Policy and Terms of use."
                    control={
                        <Checkbox
                            defaultChecked
                            sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            }}
                        />
                    }
                />
                <Link to={"/"} className="flex justify-center bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-800 hover:to-teal-500 p-4 text-white font-bold rounded-lg mx-10 my-5" >
                    Back to Home
                </Link>
                
            </div>
        </div>
    );
}
 
export default PrivacyPolicy;
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white w-full drop-shadow-[20px_10px_20px_rgba(0,0,0,1)] ">
            <div className="quick-acess lg:flex grid text-center lg:text-left gap-14 px-10 py-5 ">
            <ul className='flex-1'>
                    <h1 className='font-semibold text-xl'>About</h1>
                    <p className='font-light my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ut nesciunt quo iste eum, et velit odio veniam nisi rem incidunt ducimus ex ipsum magnam,
                         blanditiis quae neque cum sequi impedit.
                    </p>
                    <a href="#backtop" className='my-3 font-semibold text-gray-300'>Back to Top</a>
                </ul>
                <ul className='flex-1 grid font-thin gap-2'>
                    <h1 className='font-semibold text-xl'>Quick access</h1>
                    <Link to={"/"} className='hover:text-red-600 ml-1'>
                        <li>Home</li>
                    </Link>
                    <Link to={"/Login"} className='hover:text-red-600 ml-1'>
                        <li>Account</li>
                    </Link >                    
                    <Link to={"/ContactUs"} className='hover:text-red-600 ml-1'>
                        <li>Contact us</li>
                    </Link>                    
                    <Link to={"/PrivacyPolicy"} className='hover:text-red-600 ml-1'>
                        <li>Privacy Policy</li>
                    </Link>
                </ul>
                <ul className='flex-1 grid font-thin gap-2'>
                    <h1 className='font-semibold text-xl'>Buy Now</h1>
                    <Link to={"/Store"} className='hover:text-red-600  ml-1'>
                        <li>Store</li>
                    </Link>
                    <Link to={"/AllCategory"} className='hover:text-red-600  ml-1'>
                        <li>Category</li>
                    </Link> 
                    <Link to={"/BestSellers"} className='hover:text-red-600 ml-1'>
                        <li>Best Sellers</li>
                    </Link>
                    <Link to={"/Offers"} className='hover:text-red-600  ml-1'>
                        <li>Special offers</li>
                    </Link>                                       
                </ul>
                <ul className='social-network grid my-5 '>
                    <div>
                        <IconButton aria-label="Example" className='scale-150 '>
                            <a href="https://www.facebook.com"><FacebookIcon className='m-2 hover:text-gray-500 text-gray-50' /></a>
                        </IconButton>
                        <IconButton aria-label="Example"  className='scale-150'>
                            <a href="https://www.instagram.com"><InstagramIcon className='m-2 hover:text-gray-500 text-gray-50' /></a>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="Example"  className='scale-150'>
                            <a href="https://telegram.org"><TelegramIcon className='m-2 hover:text-gray-500 text-gray-50' /></a>
                        </IconButton>
                        <IconButton aria-label="Example"  className='scale-150'>
                            <a href="https://www.linkedin.com"><LinkedInIcon className='m-2 hover:text-gray-500 text-gray-50' /></a>
                        </IconButton>
                    </div>
                </ul>
            </div>
            <div className='text-center px-10 pb-3 font-semibold text-gray-300'>
                    <p>Copyright© 2023 EH$AN</p>
            </div>
        </footer>
    );
}
 
export default Footer;
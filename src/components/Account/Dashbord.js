import { useState } from "react";
import Toys from '../../DB/Toys.json';
import Orders from '../../DB/Orders.json';
import Users from '../../DB/users.json';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import TextField from '@mui/material/TextField';
import Category from '../../DB/Category.json';
import { Autocomplete, Avatar, Button } from "@mui/material";
import { styled } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Messages from '../../DB/Messages.json';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useContext } from "react";
import Context from '../../Context';


const Dashboard = () => {
    const {light} = useContext(Context);

    let isAdmin = false;
    let InfoUser = JSON.parse(localStorage.getItem("user"));
    if(InfoUser){
        if(InfoUser.userID === 1){
            isAdmin = true;
        }
    }
    let rowCounter = 0 ;
    const Label = styled('label')({
        display: 'inline-flex',
        margin: 20,
        marginRight:10,
        fontFamily:'cursive'
      });
      
      const Input = styled('input')(({ theme }) => ({
        borderRadius:4,
        width: "100%",
        height : 35 ,
        outline:'none',
        fontFamily:'cursive',
        paddingLeft: 20 ,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
        color: theme.palette.mode === 'light' ? '#000' : '#fff',
      }));
      
      const Listbox = styled('ul')(({ theme }) => ({
        
        width: "60%",
        color:'black',
        borderRadius: 10 ,
        margin: 0,
        fontSize:16,
        fontFamily:'cursive',
        zIndex: 1,
        position: 'absolute',
        listStyle: 'none',
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#000',
        overflow: 'auto',
        maxHeight: 150,
        border: '1px solid rgba(0,0,0,.25)',
        '& li.Mui-focused': {
          backgroundColor: '#4a8df6',
          color: 'white',
          cursor: 'pointer',
          
        },
        '& li:active': {
          backgroundColor: '#2977f5',
          color: 'black',
          Padding: 10 
          
        }
      }));
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
      } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: Toys,
        getOptionLabel: (option) => option.title,
      });


    // Admin state and Functions 
    const [site , setSite] = useState(false);
    const [orders , setOrders] = useState(true);
    const [users , setUsers] = useState(false);
    const [product , setProduct] = useState(false);

    const handleSite = ()=>{
        setSite(true);
        setOrders(false);
        setUsers(false);
        setProduct(false);

    }
    const handleOrders = ()=>{
        setSite(false);
        setOrders(true);
        setUsers(false);
        setProduct(false);

    }
    const handleUsers = ()=>{
        setSite(false);
        setOrders(false);
        setUsers(true);
        setProduct(false);

    }
    const handleProduct = ()=>{
        setSite(false);
        setOrders(false);
        setUsers(false);
        setProduct(true);

    }


    //   User State and Functions
    const [profile , setProfile] = useState(false);
    const [cart , setCart] = useState(false);
    const [userorders , setUserorders] = useState(false);
    const [bookmarks , setBookmarks] = useState(false);
    const [messages , setMessages] = useState(false);
    const [editeProfile , setEditeProfile] = useState(false);
    const [showPassword , setShowPassword] = useState(false);
    let orderCounter = 0;
    let DeliveredCounter = true;
    let NotDeliveredCounter = true;




    const handleProfile = ()=>{
        setProfile(true);
        setCart(false);
        setUserorders(false);
        setBookmarks(false);
        setMessages(false);
    }
    const handleCart = ()=>{
        setProfile(false);
        setCart(true);
        setUserorders(false);
        setBookmarks(false);
        setMessages(false);
    }
    const handleUserorders = ()=>{
        setProfile(false);
        setCart(false);
        setUserorders(true);
        setBookmarks(false);
        setMessages(false);
    }
    const handleBookmarks = ()=>{
        setProfile(false);
        setCart(false);
        setUserorders(false);
        setBookmarks(true);
        setMessages(false);
    }
    const handleMessages = ()=>{
        setProfile(false);
        setCart(false);
        setUserorders(false);
        setBookmarks(false);
        setMessages(true);
    }



    return (
        <>
            {
                light && 
                <>
                {
                    !InfoUser && <div className="h-screen bg-gradient-to-tr from-pink-400 to-yellow-400 flex justify-center items-center">
                        <h1 className="font-bold text-8xl text-gray-50 ">
                            please Login Bro.
                        </h1>
                    </div> 
                }{
                    InfoUser && <div className="lg:h-screen h-auto w-full flex">
                        {
                            isAdmin && <div className="w-full h-full lg:flex grid shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                                
                                <div className="bar lg:w-1/4 w-full bg-teal-700 text-white h-full flex flex-col font-serif text-xl shadow-[inset_0px_0px_20px_rgba(0,0,0,0.4)] ">
                                    <button className="lg:h-20 h-12 shadow-[inset_-2px_0px_20px_rgba(0,0,0,0.4)] w-full bg-gray-200 border-b-2 border-black border-solid text-gray-700 cursor-default font-semibold text-xl">Admin Pannel</button>
                                    {!site && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleSite}>Website</button> }
                                    {site && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleSite}>Website</button> }
                                    {orders && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleOrders}>Orders</button>}
                                    {!orders && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleOrders}>Orders</button>}
                                    {users && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleUsers}>Users</button>}
                                    {!users && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleUsers}>Users</button>}
                                    {product && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleProduct}>Products</button>}
                                    {!product && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleProduct}>Products</button>}
                                </div>
                                <div className="panels h-full lg:w-3/4 w-full bg-gradient-to-tr from-pink-400 to-yellow-400">
                                    {site && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll bg-gradient-to-tr from-pink-400 to-yellow-400">
                                        
                                        <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Website Details</h1>
                                        <div className="h-full w-full px-10 py-5 text-gray700">
                                            <ul className="w-full h-full">
                                                <li className="text-xl bg-gray-200 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Store Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Store Name</span>:<span className="font-thin px-4">Toy Store</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Address</span>:<span className="font-thin px-4">Somogy , Bálint útja 06.</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Phone Number</span>:<span className="font-thin px-4">+36(84)532-259</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Email</span>:<span className="font-thin px-4">armin.szalai@yahoo.com</span></li>
                                                    </ul>
                                                </li>
                                                <li className="text-xl bg-gray-200 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Website Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Website Number of Products</span>:<span className="font-thin px-4">{Toys.length}<span className="pl-2">Product</span></span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Website Number of Users</span>:<span className="font-thin px-4">{Users.length}<span className="pl-2">User</span></span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Website Domain</span>:<span className="font-thin px-4"><a href="http://localhost:3000">http://localhost:3000</a></span></li>
                                                    </ul>
                                                </li>
                                                <li className="text-xl bg-gray-200 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Other Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Product Orders</span>:<span className="font-thin px-4">{Orders.length}<span className="pl-2">Orders</span></span></li>
                                                    </ul>
                                                </li>
    
    
                                            </ul>
                                        </div>
                                    
                                    
                                    
                                    </div>}
                                    {orders && <div className="h-full w-full text-center border-dashed border-2 border-gray-500 py-5 lg:px-10 px-2 overflow-y-scroll pb-32 bg-gradient-to-tr from-pink-400 to-yellow-400">
                                        <h1 className="pl-3 text-left py-5 font-bold text-gray-700 text-3xl">All Orders Details</h1>
                                        <ul className="border-black border-2 border-solid flex w-full bg-gray-200">
                                            <li className="border-r-2 border-solid border-black py-3 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Order</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{rowCounter = rowCounter+1}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Order Code</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.OrderID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Product Code</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.ProductID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">User</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.UserID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="py-3 flex-1 border-r-2 border-solid border-black">
                                                <h1 className="px-3 py-1 font-bold">Price</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.Price}{order.Symbol}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Status</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <>
                                                            {order.DeliveryStatus && <li className="border-t-2 border-black border-solid py-3 font-bold text-lime-500">{order.DeliveryStatus}</li>}
                                                            {!order.DeliveryStatus && <li className="border-t-2 border-black border-solid py-3 font-bold text-red-500">Not Delivered</li>}
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-l-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Details</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3 hover:text-blue-500 hover:underline"><Link to={"/Dashboard/OrderDetails/" + order.OrderID}>Details</Link></li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </div>}
                                    {users && <div className="h-full w-full text-center border-dashed border-2 border-gray-500 py-5  px-10 overflow-y-scroll pb-32 bg-gradient-to-tr from-pink-400 to-yellow-400">
                                        <h1 className="pl-3 text-left py-5 font-bold text-gray-700 text-3xl">Users Details</h1>
                                        <ul className="border-black border-2 border-solid flex w-full bg-gray-200">
                                        
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">User ID</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.userID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">User Email</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.email}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">User Password</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.password}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>  
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Role</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.Role}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li> 
                                            <li className="py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Remove</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3"><button className="hover:scale-105 hover:text-red-600 text-red-700">Remove</button></li>
                                                        )
                                                    })}
                                                </ul>
                                            </li> 
                                        </ul>
                                        <div className="AddUser">
                                        <h1 className="font-bold text-gray-700 text-2xl py-5 text-left">Add User</h1>
                                            <form className="py-5 text-left bg-gray-200 px-10 rounded-2xl">
                                                <label htmlFor="email" className="font-mono pr-4">Email</label>
                                                <input type="email" name="eamil" id="email" className="mb-3 py-2 px-2 border-yellow-400 border-2 border-solid rounded-xl" /><br />
                                                <label htmlFor="password" className="font-mono pr-4">Password</label>
                                                <input type="password" name="password" id="password" className="py-2 px-2 border-yellow-400 border-2 border-solid rounded-xl" /><br />
                                                <input type="submit" value="Submit" className="rounded-2xl hover:bg-lime-600 cursor-pointer bg-lime-400 py-2 px-3 my-2" />
                                            </form>
                                        </div>
                                    </div>}
                                    {product && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll bg-gradient-to-tr from-pink-400 to-yellow-400">
                                        <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Products Details</h1>
                                        <div className="grid gap-2 py-5">
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>ADD Product</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div
                                                        className="block w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-500">
                                                        <form className="relative pb-32">
                                                            <h1 className="font-bold text-gray-200 text-2xl my-2">Add Product</h1>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="Name" className="font-light my-3 text-white px-5">Name</label>
                                                                    <input type="text" name="Name" id="Name" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="title" className="font-light my-3 text-white px-5">Title</label>
                                                                    <input type="text" name="title" id="title" className="my-1 text-white bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="Brand" className="font-light my-3 text-white px-5">Brand</label>
                                                                    <input type="text" name="Brand" id="Brand" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="Price" className="font-light my-3 text-white px-5">Price</label>
                                                                    <input type="text" name="Price" id="Price" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                    <select name="Symbol" id="Symbol" className="w-20 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                                        <option value="$">$</option>
                                                                        <option value="¥">¥</option>
                                                                        <option value="€">€</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="PriceBeforeOff" className="font-light my-3 text-white px-5">Price Before Off</label>
                                                                    <input type="text" name="PriceBeforeOff" id="PriceBeforeOff" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="supply" className="font-light my-3 text-white px-5">supply</label>
                                                                    <input type="number" name="supply" id="supply" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                    
                                                                    <label htmlFor="Ages" className="font-light my-3 text-white pl-10 ">Ages</label>
                                                                    <select name="Ages" id="Ages" className="w-40 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                                        <option value="Babies">Babies</option>
                                                                        <option value="Child">Child</option>
                                                                        <option value="Teenager">Teenager</option>
                                                                        <option value="Young">Young</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="ShortDescription" className="font-light my-3 text-white px-5">Short Description</label>
                                                                    <textarea type="text" name="ShortDescription" id="ShortDescription" className="my-1 p-3 text-white font-mono bg-transparent rounded-xl border-b-2 border-l-2 border-solid  focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="Description" className="font-light my-3 text-white px-5">Description</label>
                                                                    <textarea type="text" name="Description" id="Description" className="my-1 p-3 text-white bg-transparent border-b-2 border-l-2 border-solid rounded-xl focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <div className="pl-6 py-4">
                                                                <label htmlFor="image" className="font-light my-3 text-white px-5">Image</label>
                                                                <input type="file" name="image" id="image" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                <Autocomplete
                                                                    className="my-5 bg-gradient-to-t from-neutral-300 to-white p-5 rounded-2xl"
                                                                    
                                                                    multiple
                                                                    id="Category"
                                                                    options={Category}
                                                                    getOptionLabel={(option) => option.name}
                                                                    renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        variant="standard"
                                                                        color="warning"
                                                                        label="Category"
                                                                        placeholder="Category"
                                                                    />
                                                                    )}
                                                                />
                                                            </div>
                                                            
                                                            <input type="submit" value="Add Product" className="p-5 rounded-2xl absolute right-0 bottom-0 transition duration-300 font-semibold bg-gray-300 hover:bg-neutral-800 hover:text-white"/>
                                                            
                                                        </form>
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                                >
                                                <Typography>Edite Product</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className='bg-gray-400 rounded-xl px-12 py-5 w-full'>
                                                        <div {...getRootProps()}>
                                                            <Label {...getInputLabelProps()}>Search for Toys:</Label>
                                                            <Input {...getInputProps()} />
                                                        </div>
                                                        {groupedOptions.length > 0 ? (
                                                            <Listbox {...getListboxProps()} className="w-full">
                                                            {groupedOptions.map((option, index) => (
                                                                <Link to={'/Dashboard/EditeProduct/' + option.Code}><li className='px-5 py-1 w-full' {...getOptionProps({ option, index })}>{option.toyName}</li></Link>
                                                            ))}
                                                            </Listbox>
                                                        ) : null}
                                                        </div>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                                >
                                                <Typography>All Products</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className="rounded-2xl px-5 grid">
                                                        <h1 className="font-bold text-gray-600 text-3xl pl-3 pb-5"> All Products</h1>
                                                        {Toys.map((toy)=>{
                                                            return(
                                                                <Link to={"/toy/" + toy.Code} className="border-solid border-2 border-gray-600 rounded-xl bg-gray-200 h-40 overflow-hidden my-3 flex ">
                                                                    <img src={toy.toyImages[0]} className="h-full w-1/6" />
                                                                    <div className="h-full w-4/6 py-3 px-2">
                                                                        <h1 className="font-bold text-lg ">{toy.toyName}</h1>
                                                                        <div className="flex pl-5">
                                                                            <ul className="pl-3 font-thin flex-1">
                                                                                <li className=""><span>Code</span>:<span className="pl-3">{toy.Code}</span></li>
                                                                                <li className=""><span>Brand</span>:<span className="pl-3">{toy.Brand}</span></li>
                                                                                <li className=""><span>Ages</span>:<span className="pl-3">{toy.Ages}</span></li>
                                                                                <li className=""><span>Suplly</span>:{toy.supply && <span className="pl-3 font-bold text-lime-700">{toy.supply}</span>}{!toy.supply && <span className="pl-3 text-red-600 font-bold">Nonexistence</span>}</li>
                                                                            </ul>
                                                                            <ul className="pl-3 font-thin flex-1">
                                                                                <li className=""><span>Total Sell</span>:<span className="pl-3">{toy.TotalSell}</span></li>
                                                                                <li className=""><span>This Week Sell</span>:<span className="pl-3">{toy.SellinthisWeek}</span></li>
                                                                                <li className=""><span>This Month Sell</span>:<span className="pl-3">{toy.SellinthisMonth}</span></li>
                                                                                <li className=""><span>Category</span>:<span className="pl-3">{toy.Category.map((cate)=>{return(<>{cate} ,</>)})}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/6 h-full text-center">
                                                                        <h1 className="price font-bold text-3xl pt-10 text-lime-600">{toy.Price}{toy.Symbol}</h1>
                                                                        {toy.PriceBeforeOff && <p className="font-semibold text-lg line-through py-3">{toy.PriceBeforeOff}{toy.Symbol}</p>}
                                                                    </div>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
    
                                        </div>
                                    </div>}
    
    
                                </div>
    
                            </div>
                        }{
                            !isAdmin && <div className="w-full h-full">
                                {Users.map((user)=>{
                                    if(user.email === InfoUser.email){
                                        return(
                                            <div className="userPannel w-full lg:flex grid h-full">
                                                <div className="pannel lg:w-3/12 w-full h-full border-r-4 border-solid border-gray-500  bg-teal-400 ">
                                                    <div className="border-b-2 border-neutral-700 border-dashed  w-full hidden lg:flex ">
                                                        {user.UserImageAddress && <Avatar src={user.UserImageAddress} sx={{scale:"1.7"}} className="m-8 mr-0 ml-10 hover:scale-125 transition duration-200"/>}
                                                        {!user.UserImageAddress && <Avatar sx={{scale:"1.7"}} className="m-8"/>}
                                                        <div className="w-full h-full flex flex-col justify-center items-center pt-6 text-gray-700 ">
                                                            <h1 className="font-bold text-4xl">{user.UserName}</h1>
                                                            <span className="text-sm text-left font-thin">{user.email}</span>
                                                        </div>
                                                    </div>
                                                    <ul className="lg:grid flex items-center">
                                                        {
                                                            !profile && 
                                                            <li onClick={handleProfile} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold lg:px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><AccountCircleOutlinedIcon className=""/><span className="lg:pl-3 hidden lg:inline">Profile</span></li>
                                                        }
                                                        {
                                                            profile &&
                                                            <li onClick={handleProfile} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><AccountCircleOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Profile</span></li>
                                                        }
                                                        {
                                                            !cart && 
                                                            <li onClick={handleCart} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingBasketOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Cart</span></li>
                                                        }{
                                                            cart && 
                                                            <li onClick={handleCart} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingBasketOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Cart</span></li>
                                                        }
                                                        {
                                                            !userorders && 
                                                            <li onClick={handleUserorders} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingCartOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Orders</span></li>
                                                        }{
                                                            userorders && 
                                                            <li onClick={handleUserorders} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingCartOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Orders</span></li>
                                                        }
                                                        {
                                                            !bookmarks && 
                                                            <li onClick={handleBookmarks} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><BookmarksOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Bookmarks</span></li>
                                                        }{
                                                            bookmarks && 
                                                            <li onClick={handleBookmarks} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><BookmarksOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Bookmarks</span></li>
                                                        }
                                                        {
                                                            !messages && 
                                                            <li onClick={handleMessages} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><EmailOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Messages</span></li>
                                                        }{
                                                            messages && 
                                                            <li onClick={handleMessages} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><EmailOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Messages</span></li>
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="lg:w-9/12 w-full bg-gray-400 h-auto p-10 overflow-scroll">
                                                    {
                                                        profile && <div className="bg-neutral-200 w-full h-auto rounded-2xl">
                                                            <div className="avata flex justify-center items-center h-80">
                                                                {
                                                                    user.UserImageAddress && <Avatar src={user.UserImageAddress} sx={{scale:"7"}} className="hover:scale-110 transition duration-300"  />
                                                                }{
                                                                    !user.UserImageAddress && <Avatar />
                                                                }
                                                            </div>
                                                            <div className="px-5 pb-10">
                                                                <div className="pb-20 pt-3 px-10 border-gray-600 border-2 relative border-dashed rounded-2xl p-3">
                                                                    <h1 className="py-5 text-3xl text-gray-700 font-bold"><AccountCircleOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>User Information</h1>
                                                                    <ul className=" lg:flex grid pl-5">
                                                                        <div className="flex-1">
                                                                            <li className="py-3 font-bold"><span>User Name</span>:<span className="pl-3 font-normal">{user.UserName}</span></li>
                                                                            <li className="py-3 font-bold"><span>Email</span>:<span className="pl-3 font-normal">{user.email}</span></li>
                                                                            <li className="py-3  font-bold"><span>Password</span>:<span className="px-5 cursor-pointer font-normal" onMouseEnter={()=>{setShowPassword(true)}} onMouseLeave={()=>{setShowPassword(false)}}>{showPassword && <span>{user.password}</span>}{!showPassword && <span>*************</span>}</span></li>
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <li className="py-3 font-bold"><span>Cart</span>:<span onClick={handleCart} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{user.CartProductID.length}<span className="pl-1">Product</span></span></li>
                                                                            <p className="hidden">{Orders.map((or)=>{if(or.UserID == user.userID){orderCounter = orderCounter + 1 }})}</p>
                                                                            <li className="py-3 font-bold"><span>Orders</span>:<span onClick={handleUserorders} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{orderCounter} <span className="pl-1">order</span></span></li>
                                                                            <li className="py-3 font-bold"><span>Bookmarks</span>:<span onClick={handleBookmarks} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{user.BookmarksProductCode.length}<span className="pl-1">Bookmark</span></span></li>
    
                                                                        </div>
                                                                    </ul>
    
                                                                    <div className="absolute right-10 bottom-10">
                                                                        <IconButton onClick={()=>{setEditeProfile(true)}} color="primary" aria-label="Edit" >
                                                                            <ModeEditOutlinedIcon  />
                                                                        </IconButton>
                                                                    </div>
    
                                                                </div>
                                                                {
                                                                    editeProfile &&                                                      
                                                                    <div className="pb-20 pt-3 my-5 px-10 border-gray-600 border-2 relative border-dashed rounded-2xl p-3">
                                                                        <h1 className="py-5 text-3xl text-gray-700 font-bold">Edit User Information</h1>
                                                                        <form className=" flex pl-5">
                                                                            <div className="flex-1">
                                                                                <p className="py-3 font-bold"><span>User Name</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" defaultValue={user.UserName} type="text" name="userName"/></p>
                                                                                <p className="py-3 font-bold"><span>Email</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" defaultValue={user.email} type="email" name="userName"/></p>
                                                                                <p className="py-3  font-bold"><span>Password</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" type="password" name="userName"/></p>
                                                                                <p className="py-3  font-bold"><span>Image</span>: <input type="file" name="userName"/></p>
                                                                                <input type="submit" value="Confirm" className=" bg-lime-500 text-white hover:bg-lime-700 transition duration-300 shadow-lg m-3 ml-5 p-2 rounded-2xl w-40 " />
                                                                            </div>
    
    
                                                                            <div className="absolute right-10 bottom-10">
                                                                                <IconButton onClick={()=>{setEditeProfile(false)}} color="error" className="scale-150" aria-label="Edit"  >
                                                                                    <CancelOutlinedIcon  />
                                                                                </IconButton>                                                                                                                
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    }{
                                                        cart && <div className="bg-neutral-200 w-full h-auto min-h-full rounded-2xl">
                                                            <h1 className="font-bold text-gray-700 text-4xl px-8 py-5"><ShoppingBasketOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Cart</h1>
                                                            <div className="flex flex-col gap-5 px-10 h-auto w-full">
                                                                <div className="Cart w-full">
                                                                    {
    
                                                                        Toys.map((toy)=>
                                                                            user.CartProductID.map((car)=>{
                                                                                if(car == toy.Code){
                                                                                    return(
                                                                                        <div className="bg-neutral-300 relative lg:pb-0 pb-12 my-5 h-full Cart w-full rounded-2xl border-2 border-dashed border-gray-600 p-5 flex">
                                                                                            <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4">
                                                                                                <div className="w-64 mr-5 h-64">
                                                                                                    <Link to={"/toy/" + toy.Code}>
                                                                                                        <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <ul className="font-bold">
                                                                                                    <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{toy.toyName}</span></li>
                                                                                                    <li className="py-2"><span className="">Product Code</span>:<span className="pl-3 font-light">{toy.Code}</span></li>
                                                                                                    <li className="py-2"><span className="">Brand</span>:<span className="pl-3 font-light">{toy.Brand}</span></li>
                                                                                                    <li className="my-2 lg:w-96 w-auto lg:h-48 overflow-hidden"><span className="">Description</span>: <span className="p-2 font-thin text-sm">{toy.Description}</span></li>
                                                                                                </ul>
                                                                                                <ul className="font-bold">
                                                                                                    <li className="py-2"><span className="">Ages</span>:<span className="pl-3 font-light">{toy.Ages}</span></li>
                                                                                                    <li className="py-2"><span className="">Category</span>:<span className="pl-3 font-light">{toy.Category.map((cate)=>{return(<p>{cate}</p>)})}</span></li>
                                                                                                    <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{toy.Price}{toy.Symbol}</span></li>
                                                                                                    {toy.PriceBeforeOff && <li className="py-2"><span className="">Price Before Off</span>:<span className="pl-3 font-light line-through">{toy.PriceBeforeOff}</span></li>}                                                                                                                    </ul>
                                                                                            </div>
                                                                                            <div className="absolute flex lg:bottom-10 bottom-5 lg:right-10 right-5 gap-2">
                                                                                                <Button variant="contained" color="error">Remove</Button> 
                                                                                                {/* remove from DB */}
                                                                                                <Button variant="contained" color="success"><Link to={"/toy/" + toy.Code}>BUY</Link></Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            })
                                                                        )
    
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }{
                                                        userorders && <div className="bg-neutral-200 w-full h-auto min-h-full overflow-y-scroll rounded-2xl lg:px-8 lg:py-8 px-3">
                                                            <h1 className="text-4xl text-gray-700 font-bold pt-5 lg:pt-0"><ShoppingCartOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Orders History</h1>
                                                            <div className="flex flex-col gap-5 p-10 h-full w-full">
                                                                <div className="Delivered">
                                                                    <h1  className="text-2xl font-bold text-gray-700 pb-5">Delivered</h1>
                                                                        {
                                                                            Orders.map((order)=>{
                                                                                if(user.userID == order.UserID){
                                                                                    if(order.DeliveryStatus){
                                                                                        DeliveredCounter = false; 
                                                                                        return(
                                                                                            <>
                                                                                                <div className="bg-neutral-300 my-5 h-full Delivered w-full rounded-2xl border-2 border-dashed border-gray-600 p-5">
                                                                                                    {
                                                                                                        Toys.map((toy)=>{
                                                                                                            if(toy.Code == order.ProductID){
                                                                                                                return(
                                                                                                                    <div className="lg:flex grid w-full">
                                                                                                                        <div className="lg:w-2/6 w-full h-auto mr-5">
                                                                                                                            <Link to={"/toy/" + toy.Code}>
                                                                                                                                <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                                            </Link>
                                                                                                                        </div>
                                                                                                                        <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4 ">
                                                                                                                            <ul className="font-bold">
                                                                                                                                <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{order.ProductName}</span></li>
                                                                                                                                <li className="py-2"><span className="">Order Code</span>:<span className="pl-3 font-light">{order.OrderID}</span></li>
                                                                                                                                <li className="py-2"><span className="">Order Date</span>:<span className="pl-3 font-light">{order.OrderDate} , {order.OrderTime}</span></li>
                                                                                                                                <li className="py-2"><span className="">Delivery</span>:{order.DeliveryStatus && <span className="pl-3 font-bold text-lime-600">Delivered</span>}{!order.DeliveryStatus && <span className="pl-3 font-light text-red-600">{order.Delivery}</span>}</li>
                                                                                                                            </ul>
                                                                                                                            <ul className="font-bold">
                                                                                                                                <li className="py-2"><span className="">Buyer Name</span>:<span className="pl-3 font-light">{order.BuyerName}</span></li>
                                                                                                                                <li className="py-2"><span className="">Buyer Addres</span>:<span className="pl-3 font-light">{order.BuyerAddress}</span></li>
                                                                                                                                <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{order.Price}{order.Symbol}</span></li>
                                                                                                                                <li className="py-2"><span className="">Seller Name</span>:<span className="pl-3 font-light">{order.SellerName}</span></li>
                                                                                                                                
                                                                                                                            </ul>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                )
                                                                                                            }
                                                                                                        })
                                                                                                    }
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                        
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        {
                                                                            DeliveredCounter &&
                                                                                    <div className="text-center font-thin text-xl text-gray-700">
                                                                                        <p>No item.</p>
                                                                                    </div>
    
                                                                        }
                                                                </div>
                                                                <div className="NotDelivered">
                                                                    <h1 className="text-2xl font-bold text-gray-700 pb-5">NotDelivered</h1>
                                                                    {
                                                                            Orders.map((order)=>{
                                                                                if(user.userID == order.UserID){
                                                                                    if(!order.DeliveryStatus){
                                                                                        NotDeliveredCounter = false; 
                                                                                            return(
                                                                                                <>
                                                                                                    <div className="bg-neutral-300 my-5 h-full Delivered w-full rounded-2xl border-2 border-dashed border-gray-600 p-5">
                                                                                                        {
                                                                                                            Toys.map((toy)=>{
                                                                                                                if(toy.Code == order.ProductID){
                                                                                                                    return(
                                                                                                                        <div className="lg:flex grid w-full">
                                                                                                                            <div className="lg:w-2/6 w-full h-auto mr-5">
                                                                                                                                <Link to={"/toy/" + toy.Code}>
                                                                                                                                    <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                                                </Link>
                                                                                                                            </div>
                                                                                                                            <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4 ">
                                                                                                                                <ul className="font-bold">
                                                                                                                                    <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{order.ProductName}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Order Code</span>:<span className="pl-3 font-light">{order.OrderID}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Order Date</span>:<span className="pl-3 font-light">{order.OrderDate} , {order.OrderTime}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Delivery</span>:{order.DeliveryStatus && <span className="pl-3 font-light text-lime-600">{order.Delivery}</span>}{!order.DeliveryStatus && <span className="pl-3 font-light text-red-600">In Way...</span>}</li>
                                                                                                                                </ul>
                                                                                                                                <ul className="font-bold">
                                                                                                                                    <li className="py-2"><span className="">Buyer Name</span>:<span className="pl-3 font-light">{order.BuyerName}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Buyer Addres</span>:<span className="pl-3 font-light">{order.BuyerAddress}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{order.Price}{order.Symbol}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Seller Name</span>:<span className="pl-3 font-light">{order.SellerName}</span></li>
                                                                                                                                    
                                                                                                                                </ul>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        {
                                                                            NotDeliveredCounter &&
                                                                                    <div className="text-center font-thin text-xl text-gray-700">
                                                                                        <p>No item.</p>
                                                                                    </div>
    
                                                                        }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }{
                                                        bookmarks && <div className="bg-neutral-200 w-full min-h-full h-auto overflow-y-scroll pb-10 rounded-2xl p-5">
                                                            <h1 className="text-4xl font-bold text-gray-700"><BookmarksOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Bookmarks</h1>
                                                            <div className="grid grid-flow-row xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 md:p-10 p-16 h-auto">
                                                                {
                                                                    Toys.map((toy)=>
                                                                        user.BookmarksProductCode.map((book)=>{
                                                                            if(toy.Code == book){
                                                                                return(
                                                                                <Link to={"/toy/" + toy.Code} className="h-auto  w-60 ">
                                                                                    <div className="border-2 border-solid w-full border-black h-auto rounded-2xl overflow-hidden relative">
                                                                                        <img src={toy.toyImages[0]} className="h-56 w-full"/>
                                                                                        <div className="absolute w-full top-48 bg-neutral-800 text-white bg-opacity-60 min-h-full px-5 py-3 hover:-translate-y-48 transition duration-700 rounded-t-2xl">
                                                                                            <div className="flex justify-center">
                                                                                                <KeyboardArrowUpIcon />
                                                                                            </div>
                                                                                            <div>
                                                                                                <h1 className="text-gray-100 font-bold text-xl">{toy.title}</h1>
                                                                                                <div className="px-3">
                                                                                                    <h2 className="py-1">{toy.Brand}</h2>
                                                                                                    <h2 className="pt-1">{toy.Category.map((cate)=>{return(<p>{cate}</p>)})}</h2>
                                                                                                    <div className="float-right">
                                                                                                        <h1 className="font-bold text-3xl text-lime-400 ">{toy.Price} <span>{toy.Symbol}</span></h1>
                                                                                                        {
                                                                                                            toy.PriceBeforeOff && <p className="text-center line-through text-gray-200">{toy.PriceBeforeOff}{toy.Symbol}</p>
                                                                                                        }{
    
                                                                                                        }
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                                )
                                                                            }
                                                                        })
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    }{
                                                        messages && <div className="bg-neutral-200 w-full h-auto rounded-2xl overflow-y-scroll pb-10">
                                                            <h1 className="font-bold text-gray-700 text-4xl px-8 py-5"><EmailOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Messages</h1>
                                                            <div className="px-10">
                                                                {
                                                                    Messages.map((mes)=>{
                                                                        if(mes.UserID == user.userID){
                                                                                if(mes.Status === "Important"){
                                                                                    return(
                                                                                        <Accordion className="my-2">
                                                                                            <AccordionSummary
                                                                                            expandIcon={<ExpandMoreIcon />}
                                                                                            aria-controls="panel2a-content"
                                                                                            id="panel2a-header"
                                                                                            >
                                                                                            <Typography><ErrorOutlineIcon color="warning" sx={{scale:"1.2"}}/> <span className="pl-3">{mes.Title}</span></Typography>
                                                                                            </AccordionSummary>
                                                                                            <AccordionDetails>
                                                                                                <div className="flex gap-10">
                                                                                                    <h1 className="text-3xl font-bold px-5">{mes.Title}</h1>
                                                                                                    <h1 className="pt-3">Status: <span className="text-red-500 font-bold pl-2">{mes.Status}</span></h1>
                                                                                                    <h1 className="pt-3">From: <span className="text-gray-600 font-bold pl-2">{mes.From}</span></h1>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5">Remove</button>
                                                                                                </div>
                                                                                                <div className="info px-8 py-8">
                                                                                                    <p className="text">
                                                                                                        <p className="px-5 font-thin text-lg">
                                                                                                            {mes.text}
                                                                                                        </p>
                                                                                                    </p>
        
                                                                                                </div>
                
                                                                                            </AccordionDetails>
                                                                                        </Accordion>
                                                                                    )
                                                                                }else{
                                                                                    return(
                                                                                        <Accordion className="my-2">
                                                                                            <AccordionSummary
                                                                                            expandIcon={<ExpandMoreIcon />}
                                                                                            aria-controls="panel2a-content"
                                                                                            id="panel2a-header"
                                                                                            >
                                                                                            <Typography><EmailOutlinedIcon color="info" /> <span className="pl-3">{mes.Title}</span></Typography>
                                                                                            </AccordionSummary>
                                                                                            <AccordionDetails>
                                                                                                <div className="lg:flex grid lg:gap-10 gap-1">
                                                                                                    <h1 className="text-3xl font-bold px-5">{mes.Title}</h1>
                                                                                                    <h1 className="pt-3 pl-8 lg:pl-0">Status: <span className="text-gray-700 font-bold pl-2">{mes.Status}</span></h1>
                                                                                                    <h1 className="pt-3 pl-8 lg:pl-0">From: <span className="text-gray-600 font-bold pl-2">{mes.From}</span></h1>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5 hidden md:inline">Remove</button>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5 bottom-5 md:hidden">Remove</button>
                                                                                                </div>
                                                                                                <div className="info px-8 py-8">
                                                                                                    <p className="text">
                                                                                                        <p className="lg:px-5 p-0 pb-8 font-thin text-lg">
                                                                                                            {mes.text}
                                                                                                        </p>
                                                                                                    </p>
        
                                                                                                </div>
                
                                                                                            </AccordionDetails>
                                                                                        </Accordion>
                                                                                    )
                                                                                }
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        }
                    </div>
                }
                </>
            }{
                !light && 
                <>
                {
                    !InfoUser && <div className="h-screen bg-gradient-to-tr from-slate-500 to-slate-800 flex justify-center items-center">
                        <h1 className="font-bold text-8xl text-gray-50 ">
                            please Login Bro.
                        </h1>
                    </div> 
                }{
                    InfoUser && <div className="lg:h-screen h-auto w-full flex">
                        {
                            isAdmin && <div className="w-full h-full lg:flex grid shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                                
                                <div className="bar lg:w-1/4 w-full bg-teal-700 text-white h-full flex flex-col font-serif text-xl shadow-[inset_0px_0px_20px_rgba(0,0,0,0.4)] ">
                                    <button className="lg:h-20 h-12 shadow-[inset_-2px_0px_20px_rgba(0,0,0,0.4)] w-full bg-gray-200 border-b-2 border-black border-solid text-gray-700 cursor-default font-semibold text-xl">Admin Pannel</button>
                                    {!site && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleSite}>Website</button> }
                                    {site && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleSite}>Website</button> }
                                    {orders && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleOrders}>Orders</button>}
                                    {!orders && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleOrders}>Orders</button>}
                                    {users && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleUsers}>Users</button>}
                                    {!users && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleUsers}>Users</button>}
                                    {product && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid text-gray-700 bg-gray-300" onClick={handleProduct}>Products</button>}
                                    {!product && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 hover:text-gray-700 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleProduct}>Products</button>}
                                </div>
                                <div className="panels h-full lg:w-3/4 w-full">
                                    {site && <div className="h-full w-full border-dashed border-2 border-gray-200 p-5 overflow-y-scroll bg-gradient-to-tr from-slate-500 to-slate-800">
                                        
                                        <h1 className="pl-10 pt-5 font-bold text-gray-200 text-3xl">Website Details</h1>
                                        <div className="h-full w-full px-10 py-5 text-gray700">
                                            <ul className="w-full h-full">
                                                <li className="text-xl bg-gray-700 text-gray-100 border-2 border-solid border-gray-200 rounded-2xl p-5 my-3"><h1 className="font-semibold">Store Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Store Name</span>:<span className="font-thin px-4">Toy Store</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Address</span>:<span className="font-thin px-4">Somogy , Bálint útja 06.</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Phone Number</span>:<span className="font-thin px-4">+36(84)532-259</span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Store Email</span>:<span className="font-thin px-4">armin.szalai@yahoo.com</span></li>
                                                    </ul>
                                                </li>
                                                <li className="text-xl bg-gray-700 text-gray-100 border-2 border-solid border-gray-200 rounded-2xl p-5 my-3"><h1 className="font-semibold">Website Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Website Number of Products</span>:<span className="font-thin px-4">{Toys.length}<span className="pl-2">Product</span></span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Website Number of Users</span>:<span className="font-thin px-4">{Users.length}<span className="pl-2">User</span></span></li>
                                                        <li className="text-lg py-1"><span className="font-mono">Website Domain</span>:<span className="font-thin px-4"><a href="http://localhost:3000">http://localhost:3000</a></span></li>
                                                    </ul>
                                                </li>
                                                <li className="text-xl bg-gray-700 text-gray-100 border-2 border-solid border-gray-200 rounded-2xl p-5 my-3"><h1 className="font-semibold">Other Information</h1>
                                                    <ul className="pl-3 pt-2">
                                                        <li className="text-lg py-1"><span className="font-mono">Product Orders</span>:<span className="font-thin px-4">{Orders.length}<span className="pl-2">Orders</span></span></li>
                                                    </ul>
                                                </li>
    
    
                                            </ul>
                                        </div>
                                    
                                    
                                    
                                    </div>}
                                    {orders && <div className="h-full w-full text-center border-dashed border-2 border-gray-200 py-5 lg:px-10 px-2 overflow-y-scroll pb-32 bg-gradient-to-tr from-slate-500 to-slate-800">
                                        <h1 className="pl-3 text-left py-5 font-bold text-gray-200 text-3xl">All Orders Details</h1>
                                        <ul className="border-black border-2 border-solid flex w-full bg-gray-700 text-gray-50">
                                            <li className="border-r-2 border-solid border-black py-3 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Order</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{rowCounter = rowCounter+1}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Order Code</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.OrderID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Product Code</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.ProductID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">User</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.UserID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="py-3 flex-1 border-r-2 border-solid border-black">
                                                <h1 className="px-3 py-1 font-bold">Price</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{order.Price}{order.Symbol}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Status</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <>
                                                            {order.DeliveryStatus && <li className="border-t-2 border-black border-solid py-3 font-bold text-lime-500">{order.DeliveryStatus}</li>}
                                                            {!order.DeliveryStatus && <li className="border-t-2 border-black border-solid py-3 font-bold text-red-500">Not Delivered</li>}
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-l-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">Details</h1>
                                                <ul>
                                                    {Orders.map((order)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3 hover:text-blue-500 hover:underline"><Link to={"/Dashboard/OrderDetails/" + order.OrderID}>Details</Link></li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </div>}
                                    {users && <div className="h-full w-full text-center border-dashed border-2 border-gray-200 py-5  px-10 overflow-y-scroll pb-32 bg-gradient-to-tr from-slate-500 to-slate-800">
                                        <h1 className="pl-3 text-left py-5 font-bold text-gray-200 text-3xl">Users Details</h1>
                                        <ul className="border-black border-2 border-solid flex w-full bg-gray-600 text-gray-100">
                                        
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">User ID</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.userID}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1">
                                                <h1 className="px-3 py-1 font-bold">User Email</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.email}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">User Password</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.password}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>  
                                            <li className="border-r-2 border-solid border-black py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Role</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3">{user.Role}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li> 
                                            <li className="py-3 flex-1 hidden lg:inline">
                                                <h1 className="px-3 py-1 font-bold">Remove</h1>
                                                <ul>
                                                    {Users.map((user)=>{
                                                        return(
                                                            <li className="border-t-2 border-black border-solid py-3"><button className="hover:scale-105 hover:text-red-400 text-red-500">Remove</button></li>
                                                        )
                                                    })}
                                                </ul>
                                            </li> 
                                        </ul>
                                        <div className="AddUser">
                                        <h1 className="font-bold text-gray-200 text-2xl py-5 text-left">Add User</h1>
                                            <form className="py-5 text-left bg-gray-700 text-gray-50 px-10 rounded-2xl">
                                                <label htmlFor="email" className="font-mono pr-4">Email</label>
                                                <input type="email" name="eamil" id="email" className="mb-3 py-2 px-2 border-yellow-400 border-2 border-solid rounded-xl" /><br />
                                                <label htmlFor="password" className="font-mono pr-4">Password</label>
                                                <input type="password" name="password" id="password" className="py-2 px-2 border-yellow-400 border-2 border-solid rounded-xl" /><br />
                                                <input type="submit" value="Submit" className="rounded-2xl hover:bg-lime-400 cursor-pointer bg-lime-600 py-2 px-3 my-2" />
                                            </form>
                                        </div>
                                    </div>}
                                    {product && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll bg-gradient-to-tr from-slate-500 to-slate-800">
                                        <h1 className="pl-10 pt-5 font-bold text-gray-200 text-3xl">Products Details</h1>
                                        <div className="grid gap-2 py-5">
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                <Typography>ADD Product</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div
                                                        className="block w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-500">
                                                        <form className="relative pb-32">
                                                            <h1 className="font-bold text-gray-200 text-2xl my-2">Add Product</h1>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="Name" className="font-light my-3 text-white px-5">Name</label>
                                                                    <input type="text" name="Name" id="Name" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="title" className="font-light my-3 text-white px-5">Title</label>
                                                                    <input type="text" name="title" id="title" className="my-1 text-white bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="Brand" className="font-light my-3 text-white px-5">Brand</label>
                                                                    <input type="text" name="Brand" id="Brand" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="Price" className="font-light my-3 text-white px-5">Price</label>
                                                                    <input type="text" name="Price" id="Price" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                    <select name="Symbol" id="Symbol" className="w-20 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                                        <option value="$">$</option>
                                                                        <option value="¥">¥</option>
                                                                        <option value="€">€</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="PriceBeforeOff" className="font-light my-3 text-white px-5">Price Before Off</label>
                                                                    <input type="text" name="PriceBeforeOff" id="PriceBeforeOff" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="supply" className="font-light my-3 text-white px-5">supply</label>
                                                                    <input type="number" name="supply" id="supply" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                    
                                                                    <label htmlFor="Ages" className="font-light my-3 text-white pl-10 ">Ages</label>
                                                                    <select name="Ages" id="Ages" className="w-40 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                                        <option value="Babies">Babies</option>
                                                                        <option value="Child">Child</option>
                                                                        <option value="Teenager">Teenager</option>
                                                                        <option value="Young">Young</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="flex p-5 gap-8">
                                                                <div>
                                                                    <label htmlFor="ShortDescription" className="font-light my-3 text-white px-5">Short Description</label>
                                                                    <textarea type="text" name="ShortDescription" id="ShortDescription" className="my-1 p-3 text-white font-mono bg-transparent rounded-xl border-b-2 border-l-2 border-solid  focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="Description" className="font-light my-3 text-white px-5">Description</label>
                                                                    <textarea type="text" name="Description" id="Description" className="my-1 p-3 text-white bg-transparent border-b-2 border-l-2 border-solid rounded-xl focus:outline-none pl-3 focus:border-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <div className="pl-6 py-4">
                                                                <label htmlFor="image" className="font-light my-3 text-white px-5">Image</label>
                                                                <input type="file" name="image" id="image" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                <Autocomplete
                                                                    className="my-5 bg-gradient-to-t from-neutral-300 to-white p-5 rounded-2xl"
                                                                    
                                                                    multiple
                                                                    id="Category"
                                                                    options={Category}
                                                                    getOptionLabel={(option) => option.name}
                                                                    renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        variant="standard"
                                                                        color="warning"
                                                                        label="Category"
                                                                        placeholder="Category"
                                                                    />
                                                                    )}
                                                                />
                                                            </div>
                                                            
                                                            <input type="submit" value="Add Product" className="p-5 rounded-2xl absolute right-0 bottom-0 transition duration-300 font-semibold bg-gray-300 hover:bg-neutral-800 hover:text-white"/>
                                                            
                                                        </form>
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                                >
                                                <Typography>Edite Product</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className='bg-gray-700 text-gray-50 rounded-xl px-12 py-5 w-full'>
                                                        <div {...getRootProps()}>
                                                            <Label {...getInputLabelProps()}>Search for Toys:</Label>
                                                            <Input {...getInputProps()} />
                                                        </div>
                                                        {groupedOptions.length > 0 ? (
                                                            <Listbox {...getListboxProps()} className="w-full">
                                                            {groupedOptions.map((option, index) => (
                                                                <Link to={'/Dashboard/EditeProduct/' + option.Code}><li className='px-5 py-1 w-full' {...getOptionProps({ option, index })}>{option.toyName}</li></Link>
                                                            ))}
                                                            </Listbox>
                                                        ) : null}
                                                        </div>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                                >
                                                <Typography>All Products</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className="rounded-2xl px-5 grid bg-gray-700 pt-8">
                                                        <h1 className="font-bold text-gray-200 text-3xl pl-3 pb-5"> All Products</h1>
                                                        {Toys.map((toy)=>{
                                                            return(
                                                                <Link to={"/toy/" + toy.Code} className="border-solid border-2 border-gray-200 rounded-xl bg-gray-200 h-40 overflow-hidden my-3 flex ">
                                                                    <img src={toy.toyImages[0]} className="h-full w-1/6" />
                                                                    <div className="h-full w-4/6 py-3 px-2">
                                                                        <h1 className="font-bold text-lg ">{toy.toyName}</h1>
                                                                        <div className="flex pl-5">
                                                                            <ul className="pl-3 font-thin flex-1">
                                                                                <li className=""><span>Code</span>:<span className="pl-3">{toy.Code}</span></li>
                                                                                <li className=""><span>Brand</span>:<span className="pl-3">{toy.Brand}</span></li>
                                                                                <li className=""><span>Ages</span>:<span className="pl-3">{toy.Ages}</span></li>
                                                                                <li className=""><span>Suplly</span>:{toy.supply && <span className="pl-3 font-bold text-lime-700">{toy.supply}</span>}{!toy.supply && <span className="pl-3 text-red-600 font-bold">Nonexistence</span>}</li>
                                                                            </ul>
                                                                            <ul className="pl-3 font-thin flex-1">
                                                                                <li className=""><span>Total Sell</span>:<span className="pl-3">{toy.TotalSell}</span></li>
                                                                                <li className=""><span>This Week Sell</span>:<span className="pl-3">{toy.SellinthisWeek}</span></li>
                                                                                <li className=""><span>This Month Sell</span>:<span className="pl-3">{toy.SellinthisMonth}</span></li>
                                                                                <li className=""><span>Category</span>:<span className="pl-3">{toy.Category.map((cate)=>{return(<>{cate} ,</>)})}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/6 h-full text-center">
                                                                        <h1 className="price font-bold text-3xl pt-10 text-lime-600">{toy.Price}{toy.Symbol}</h1>
                                                                        {toy.PriceBeforeOff && <p className="font-semibold text-lg line-through py-3">{toy.PriceBeforeOff}{toy.Symbol}</p>}
                                                                    </div>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
    
                                        </div>
                                    </div>}
    
    
                                </div>
    
                            </div>
                        }{
                            !isAdmin && <div className="w-full h-full">
                                {Users.map((user)=>{
                                    if(user.email === InfoUser.email){
                                        return(
                                            <div className="userPannel w-full lg:flex grid h-full">
                                                <div className="pannel lg:w-3/12 w-full h-full border-r-4 border-solid border-gray-500  bg-teal-400 ">
                                                    <div className="border-b-2 border-neutral-700 border-dashed  w-full hidden lg:flex ">
                                                        {user.UserImageAddress && <Avatar src={user.UserImageAddress} sx={{scale:"1.7"}} className="m-8 mr-0 ml-10 hover:scale-125 transition duration-200"/>}
                                                        {!user.UserImageAddress && <Avatar sx={{scale:"1.7"}} className="m-8"/>}
                                                        <div className="w-full h-full flex flex-col justify-center items-center pt-6 text-gray-700 ">
                                                            <h1 className="font-bold text-4xl">{user.UserName}</h1>
                                                            <span className="text-sm text-left font-thin">{user.email}</span>
                                                        </div>
                                                    </div>
                                                    <ul className="lg:grid flex items-center">
                                                        {
                                                            !profile && 
                                                            <li onClick={handleProfile} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold lg:px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><AccountCircleOutlinedIcon className=""/><span className="lg:pl-3 hidden lg:inline">Profile</span></li>
                                                        }
                                                        {
                                                            profile &&
                                                            <li onClick={handleProfile} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><AccountCircleOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Profile</span></li>
                                                        }
                                                        {
                                                            !cart && 
                                                            <li onClick={handleCart} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingBasketOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Cart</span></li>
                                                        }{
                                                            cart && 
                                                            <li onClick={handleCart} className="py-5 text-center lg:text-left lg:pl-10 flex-1 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingBasketOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Cart</span></li>
                                                        }
                                                        {
                                                            !userorders && 
                                                            <li onClick={handleUserorders} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingCartOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Orders</span></li>
                                                        }{
                                                            userorders && 
                                                            <li onClick={handleUserorders} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><ShoppingCartOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Orders</span></li>
                                                        }
                                                        {
                                                            !bookmarks && 
                                                            <li onClick={handleBookmarks} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><BookmarksOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Bookmarks</span></li>
                                                        }{
                                                            bookmarks && 
                                                            <li onClick={handleBookmarks} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><BookmarksOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Bookmarks</span></li>
                                                        }
                                                        {
                                                            !messages && 
                                                            <li onClick={handleMessages} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-700 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><EmailOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Messages</span></li>
                                                        }{
                                                            messages && 
                                                            <li onClick={handleMessages} className="py-5 text-center lg:text-left flex-1 lg:pl-10 text-lg bg-teal-900 text-gray-100 border-b-2 border-solid border-black font-bold px-3 lg:hover:translate-x-5 lg:hover:rounded-s-2xl lg:hover:rounded-e-2xl hover:bg-teal-100 hover:text-gray-700 cursor-pointer"><EmailOutlinedIcon/><span className="lg:pl-3 hidden lg:inline">Messages</span></li>
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="lg:w-9/12 w-full bg-gray-400 h-auto p-10 overflow-scroll">
                                                    {
                                                        profile && <div className="bg-neutral-200 w-full h-auto rounded-2xl">
                                                            <div className="avata flex justify-center items-center h-80">
                                                                {
                                                                    user.UserImageAddress && <Avatar src={user.UserImageAddress} sx={{scale:"7"}} className="hover:scale-110 transition duration-300"  />
                                                                }{
                                                                    !user.UserImageAddress && <Avatar />
                                                                }
                                                            </div>
                                                            <div className="px-5 pb-10">
                                                                <div className="pb-20 pt-3 px-10 border-gray-600 border-2 relative border-dashed rounded-2xl p-3">
                                                                    <h1 className="py-5 text-3xl text-gray-700 font-bold"><AccountCircleOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>User Information</h1>
                                                                    <ul className=" lg:flex grid pl-5">
                                                                        <div className="flex-1">
                                                                            <li className="py-3 font-bold"><span>User Name</span>:<span className="pl-3 font-normal">{user.UserName}</span></li>
                                                                            <li className="py-3 font-bold"><span>Email</span>:<span className="pl-3 font-normal">{user.email}</span></li>
                                                                            <li className="py-3  font-bold"><span>Password</span>:<span className="px-5 cursor-pointer font-normal" onMouseEnter={()=>{setShowPassword(true)}} onMouseLeave={()=>{setShowPassword(false)}}>{showPassword && <span>{user.password}</span>}{!showPassword && <span>*************</span>}</span></li>
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <li className="py-3 font-bold"><span>Cart</span>:<span onClick={handleCart} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{user.CartProductID.length}<span className="pl-1">Product</span></span></li>
                                                                            <p className="hidden">{Orders.map((or)=>{if(or.UserID == user.userID){orderCounter = orderCounter + 1 }})}</p>
                                                                            <li className="py-3 font-bold"><span>Orders</span>:<span onClick={handleUserorders} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{orderCounter} <span className="pl-1">order</span></span></li>
                                                                            <li className="py-3 font-bold"><span>Bookmarks</span>:<span onClick={handleBookmarks} className="pl-3 font-normal cursor-pointer hover:text-blue-800 transition duration-300">{user.BookmarksProductCode.length}<span className="pl-1">Bookmark</span></span></li>
    
                                                                        </div>
                                                                    </ul>
    
                                                                    <div className="absolute right-10 bottom-10">
                                                                        <IconButton onClick={()=>{setEditeProfile(true)}} color="primary" aria-label="Edit" >
                                                                            <ModeEditOutlinedIcon  />
                                                                        </IconButton>
                                                                    </div>
    
                                                                </div>
                                                                {
                                                                    editeProfile &&                                                      
                                                                    <div className="pb-20 pt-3 my-5 px-10 border-gray-600 border-2 relative border-dashed rounded-2xl p-3">
                                                                        <h1 className="py-5 text-3xl text-gray-700 font-bold">Edit User Information</h1>
                                                                        <form className=" flex pl-5">
                                                                            <div className="flex-1">
                                                                                <p className="py-3 font-bold"><span>User Name</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" defaultValue={user.UserName} type="text" name="userName"/></p>
                                                                                <p className="py-3 font-bold"><span>Email</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" defaultValue={user.email} type="email" name="userName"/></p>
                                                                                <p className="py-3  font-bold"><span>Password</span>: <input className="px-3 py-2 rounded-2xl bg-transparent border-b-2 border-solid border-black font-thin" type="password" name="userName"/></p>
                                                                                <p className="py-3  font-bold"><span>Image</span>: <input type="file" name="userName"/></p>
                                                                                <input type="submit" value="Confirm" className=" bg-lime-500 text-white hover:bg-lime-700 transition duration-300 shadow-lg m-3 ml-5 p-2 rounded-2xl w-40 " />
                                                                            </div>
    
    
                                                                            <div className="absolute right-10 bottom-10">
                                                                                <IconButton onClick={()=>{setEditeProfile(false)}} color="error" className="scale-150" aria-label="Edit"  >
                                                                                    <CancelOutlinedIcon  />
                                                                                </IconButton>                                                                                                                
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    }{
                                                        cart && <div className="bg-neutral-200 w-full h-auto min-h-full rounded-2xl">
                                                            <h1 className="font-bold text-gray-700 text-4xl px-8 py-5"><ShoppingBasketOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Cart</h1>
                                                            <div className="flex flex-col gap-5 px-10 h-auto w-full">
                                                                <div className="Cart w-full">
                                                                    {
    
                                                                        Toys.map((toy)=>
                                                                            user.CartProductID.map((car)=>{
                                                                                if(car == toy.Code){
                                                                                    return(
                                                                                        <div className="bg-neutral-300 relative lg:pb-0 pb-12 my-5 h-full Cart w-full rounded-2xl border-2 border-dashed border-gray-600 p-5 flex">
                                                                                            <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4">
                                                                                                <div className="w-64 mr-5 h-64">
                                                                                                    <Link to={"/toy/" + toy.Code}>
                                                                                                        <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <ul className="font-bold">
                                                                                                    <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{toy.toyName}</span></li>
                                                                                                    <li className="py-2"><span className="">Product Code</span>:<span className="pl-3 font-light">{toy.Code}</span></li>
                                                                                                    <li className="py-2"><span className="">Brand</span>:<span className="pl-3 font-light">{toy.Brand}</span></li>
                                                                                                    <li className="my-2 lg:w-96 w-auto lg:h-48 overflow-hidden"><span className="">Description</span>: <span className="p-2 font-thin text-sm">{toy.Description}</span></li>
                                                                                                </ul>
                                                                                                <ul className="font-bold">
                                                                                                    <li className="py-2"><span className="">Ages</span>:<span className="pl-3 font-light">{toy.Ages}</span></li>
                                                                                                    <li className="py-2"><span className="">Category</span>:<span className="pl-3 font-light">{toy.Category.map((cate)=>{return(<p>{cate}</p>)})}</span></li>
                                                                                                    <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{toy.Price}{toy.Symbol}</span></li>
                                                                                                    {toy.PriceBeforeOff && <li className="py-2"><span className="">Price Before Off</span>:<span className="pl-3 font-light line-through">{toy.PriceBeforeOff}</span></li>}                                                                                                                    </ul>
                                                                                            </div>
                                                                                            <div className="absolute flex lg:bottom-10 bottom-5 lg:right-10 right-5 gap-2">
                                                                                                <Button variant="contained" color="error">Remove</Button> 
                                                                                                {/* remove from DB */}
                                                                                                <Button variant="contained" color="success"><Link to={"/toy/" + toy.Code}>BUY</Link></Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            })
                                                                        )
    
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }{
                                                        userorders && <div className="bg-neutral-200 w-full h-auto min-h-full overflow-y-scroll rounded-2xl lg:px-8 lg:py-8 px-3">
                                                            <h1 className="text-4xl text-gray-700 font-bold pt-5 lg:pt-0"><ShoppingCartOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Orders History</h1>
                                                            <div className="flex flex-col gap-5 p-10 h-full w-full">
                                                                <div className="Delivered">
                                                                    <h1  className="text-2xl font-bold text-gray-700 pb-5">Delivered</h1>
                                                                        {
                                                                            Orders.map((order)=>{
                                                                                if(user.userID == order.UserID){
                                                                                    if(order.DeliveryStatus){
                                                                                        DeliveredCounter = false; 
                                                                                        return(
                                                                                            <>
                                                                                                <div className="bg-neutral-300 my-5 h-full Delivered w-full rounded-2xl border-2 border-dashed border-gray-600 p-5">
                                                                                                    {
                                                                                                        Toys.map((toy)=>{
                                                                                                            if(toy.Code == order.ProductID){
                                                                                                                return(
                                                                                                                    <div className="lg:flex grid w-full">
                                                                                                                        <div className="lg:w-2/6 w-full h-auto mr-5">
                                                                                                                            <Link to={"/toy/" + toy.Code}>
                                                                                                                                <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                                            </Link>
                                                                                                                        </div>
                                                                                                                        <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4 ">
                                                                                                                            <ul className="font-bold">
                                                                                                                                <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{order.ProductName}</span></li>
                                                                                                                                <li className="py-2"><span className="">Order Code</span>:<span className="pl-3 font-light">{order.OrderID}</span></li>
                                                                                                                                <li className="py-2"><span className="">Order Date</span>:<span className="pl-3 font-light">{order.OrderDate} , {order.OrderTime}</span></li>
                                                                                                                                <li className="py-2"><span className="">Delivery</span>:{order.DeliveryStatus && <span className="pl-3 font-bold text-lime-600">Delivered</span>}{!order.DeliveryStatus && <span className="pl-3 font-light text-red-600">{order.Delivery}</span>}</li>
                                                                                                                            </ul>
                                                                                                                            <ul className="font-bold">
                                                                                                                                <li className="py-2"><span className="">Buyer Name</span>:<span className="pl-3 font-light">{order.BuyerName}</span></li>
                                                                                                                                <li className="py-2"><span className="">Buyer Addres</span>:<span className="pl-3 font-light">{order.BuyerAddress}</span></li>
                                                                                                                                <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{order.Price}{order.Symbol}</span></li>
                                                                                                                                <li className="py-2"><span className="">Seller Name</span>:<span className="pl-3 font-light">{order.SellerName}</span></li>
                                                                                                                                
                                                                                                                            </ul>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                )
                                                                                                            }
                                                                                                        })
                                                                                                    }
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                        
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        {
                                                                            DeliveredCounter &&
                                                                                    <div className="text-center font-thin text-xl text-gray-700">
                                                                                        <p>No item.</p>
                                                                                    </div>
    
                                                                        }
                                                                </div>
                                                                <div className="NotDelivered">
                                                                    <h1 className="text-2xl font-bold text-gray-700 pb-5">NotDelivered</h1>
                                                                    {
                                                                            Orders.map((order)=>{
                                                                                if(user.userID == order.UserID){
                                                                                    if(!order.DeliveryStatus){
                                                                                        NotDeliveredCounter = false; 
                                                                                            return(
                                                                                                <>
                                                                                                    <div className="bg-neutral-300 my-5 h-full Delivered w-full rounded-2xl border-2 border-dashed border-gray-600 p-5">
                                                                                                        {
                                                                                                            Toys.map((toy)=>{
                                                                                                                if(toy.Code == order.ProductID){
                                                                                                                    return(
                                                                                                                        <div className="lg:flex grid w-full">
                                                                                                                            <div className="lg:w-2/6 w-full h-auto mr-5">
                                                                                                                                <Link to={"/toy/" + toy.Code}>
                                                                                                                                    <img src={toy.toyImages[0]} className="rounded-2xl w-full h-full hover:scale-110 transition duration-500"/>
                                                                                                                                </Link>
                                                                                                                            </div>
                                                                                                                            <div className="w-auto h-auto max-h-full p-5 lg:flex grid gap-4 ">
                                                                                                                                <ul className="font-bold">
                                                                                                                                    <li className="py-2"><span className="">Product Name</span>:<span className="pl-3 font-light">{order.ProductName}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Order Code</span>:<span className="pl-3 font-light">{order.OrderID}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Order Date</span>:<span className="pl-3 font-light">{order.OrderDate} , {order.OrderTime}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Delivery</span>:{order.DeliveryStatus && <span className="pl-3 font-light text-lime-600">{order.Delivery}</span>}{!order.DeliveryStatus && <span className="pl-3 font-light text-red-600">In Way...</span>}</li>
                                                                                                                                </ul>
                                                                                                                                <ul className="font-bold">
                                                                                                                                    <li className="py-2"><span className="">Buyer Name</span>:<span className="pl-3 font-light">{order.BuyerName}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Buyer Addres</span>:<span className="pl-3 font-light">{order.BuyerAddress}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Price</span>:<span className="pl-3 font-bold text-lime-700">{order.Price}{order.Symbol}</span></li>
                                                                                                                                    <li className="py-2"><span className="">Seller Name</span>:<span className="pl-3 font-light">{order.SellerName}</span></li>
                                                                                                                                    
                                                                                                                                </ul>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    )
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        
                                                                                    }
                                                                                }
                                                                            })
                                                                        }
                                                                        {
                                                                            NotDeliveredCounter &&
                                                                                    <div className="text-center font-thin text-xl text-gray-700">
                                                                                        <p>No item.</p>
                                                                                    </div>
    
                                                                        }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }{
                                                        bookmarks && <div className="bg-neutral-200 w-full min-h-full h-auto overflow-y-scroll pb-10 rounded-2xl p-5">
                                                            <h1 className="text-4xl font-bold text-gray-700"><BookmarksOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Bookmarks</h1>
                                                            <div className="grid grid-flow-row xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 md:p-10 p-16 h-auto">
                                                                {
                                                                    Toys.map((toy)=>
                                                                        user.BookmarksProductCode.map((book)=>{
                                                                            if(toy.Code == book){
                                                                                return(
                                                                                <Link to={"/toy/" + toy.Code} className="h-auto  w-60 ">
                                                                                    <div className="border-2 border-solid w-full border-black h-auto rounded-2xl overflow-hidden relative">
                                                                                        <img src={toy.toyImages[0]} className="h-56 w-full"/>
                                                                                        <div className="absolute w-full top-48 bg-neutral-800 text-white bg-opacity-60 min-h-full px-5 py-3 hover:-translate-y-48 transition duration-700 rounded-t-2xl">
                                                                                            <div className="flex justify-center">
                                                                                                <KeyboardArrowUpIcon />
                                                                                            </div>
                                                                                            <div>
                                                                                                <h1 className="text-gray-100 font-bold text-xl">{toy.title}</h1>
                                                                                                <div className="px-3">
                                                                                                    <h2 className="py-1">{toy.Brand}</h2>
                                                                                                    <h2 className="pt-1">{toy.Category.map((cate)=>{return(<p>{cate}</p>)})}</h2>
                                                                                                    <div className="float-right">
                                                                                                        <h1 className="font-bold text-3xl text-lime-400 ">{toy.Price} <span>{toy.Symbol}</span></h1>
                                                                                                        {
                                                                                                            toy.PriceBeforeOff && <p className="text-center line-through text-gray-200">{toy.PriceBeforeOff}{toy.Symbol}</p>
                                                                                                        }{
    
                                                                                                        }
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                                )
                                                                            }
                                                                        })
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    }{
                                                        messages && <div className="bg-neutral-200 w-full h-auto rounded-2xl overflow-y-scroll pb-10">
                                                            <h1 className="font-bold text-gray-700 text-4xl px-8 py-5"><EmailOutlinedIcon className="mb-2 mx-3" sx={{scale:"1.5"}}/>Messages</h1>
                                                            <div className="px-10">
                                                                {
                                                                    Messages.map((mes)=>{
                                                                        if(mes.UserID == user.userID){
                                                                                if(mes.Status === "Important"){
                                                                                    return(
                                                                                        <Accordion className="my-2">
                                                                                            <AccordionSummary
                                                                                            expandIcon={<ExpandMoreIcon />}
                                                                                            aria-controls="panel2a-content"
                                                                                            id="panel2a-header"
                                                                                            >
                                                                                            <Typography><ErrorOutlineIcon color="warning" sx={{scale:"1.2"}}/> <span className="pl-3">{mes.Title}</span></Typography>
                                                                                            </AccordionSummary>
                                                                                            <AccordionDetails>
                                                                                                <div className="flex gap-10">
                                                                                                    <h1 className="text-3xl font-bold px-5">{mes.Title}</h1>
                                                                                                    <h1 className="pt-3">Status: <span className="text-red-500 font-bold pl-2">{mes.Status}</span></h1>
                                                                                                    <h1 className="pt-3">From: <span className="text-gray-600 font-bold pl-2">{mes.From}</span></h1>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5">Remove</button>
                                                                                                </div>
                                                                                                <div className="info px-8 py-8">
                                                                                                    <p className="text">
                                                                                                        <p className="px-5 font-thin text-lg">
                                                                                                            {mes.text}
                                                                                                        </p>
                                                                                                    </p>
        
                                                                                                </div>
                
                                                                                            </AccordionDetails>
                                                                                        </Accordion>
                                                                                    )
                                                                                }else{
                                                                                    return(
                                                                                        <Accordion className="my-2">
                                                                                            <AccordionSummary
                                                                                            expandIcon={<ExpandMoreIcon />}
                                                                                            aria-controls="panel2a-content"
                                                                                            id="panel2a-header"
                                                                                            >
                                                                                            <Typography><EmailOutlinedIcon color="info" /> <span className="pl-3">{mes.Title}</span></Typography>
                                                                                            </AccordionSummary>
                                                                                            <AccordionDetails>
                                                                                                <div className="lg:flex grid lg:gap-10 gap-1">
                                                                                                    <h1 className="text-3xl font-bold px-5">{mes.Title}</h1>
                                                                                                    <h1 className="pt-3 pl-8 lg:pl-0">Status: <span className="text-gray-700 font-bold pl-2">{mes.Status}</span></h1>
                                                                                                    <h1 className="pt-3 pl-8 lg:pl-0">From: <span className="text-gray-600 font-bold pl-2">{mes.From}</span></h1>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5 hidden md:inline">Remove</button>
                                                                                                    <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-2xl font-bold absolute right-5 bottom-5 md:hidden">Remove</button>
                                                                                                </div>
                                                                                                <div className="info px-8 py-8">
                                                                                                    <p className="text">
                                                                                                        <p className="lg:px-5 p-0 pb-8 font-thin text-lg">
                                                                                                            {mes.text}
                                                                                                        </p>
                                                                                                    </p>
        
                                                                                                </div>
                
                                                                                            </AccordionDetails>
                                                                                        </Accordion>
                                                                                    )
                                                                                }
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        }
                    </div>
                }
                </>
            }
        
        </>
    );
}
 
export default Dashboard;
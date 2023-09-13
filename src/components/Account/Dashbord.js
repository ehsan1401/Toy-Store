import { useState } from "react";
import Toys from '../../DB/Toys.json';
import Orders from '../../DB/Orders.json';
import Users from '../../DB/users.json';

import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import TextField from '@mui/material/TextField';
import Category from '../../DB/Category.json';
import { Autocomplete, Avatar } from "@mui/material";
import { styled } from '@mui/system';


const Dashboard = () => {
    let isAdmin = false;
    let InfoUser = JSON.parse(localStorage.getItem("user"));
    if(InfoUser){
        if(InfoUser.userID === 1){
            isAdmin = true;
        }
    }
    const [site , setSite] = useState(false);
    const [orders , setOrders] = useState(true);
    const [users , setUsers] = useState(false);
    const [product , setProduct] = useState(false);
    let rowCounter = 0 ;
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

    return (
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
                            
                            <div className="bar lg:w-1/4 w-full bg-gradient-to-tr from-orange-200 to-yellow-400 h-full flex flex-col font-serif text-xl shadow-[inset_0px_0px_20px_rgba(0,0,0,0.4)] ">
                                <button className="lg:h-20 h-12 shadow-[inset_-2px_0px_20px_rgba(0,0,0,0.4)] w-full bg-gray-200 border-b-2 border-black border-solid cursor-default font-semibold text-xl">Admin Pannel</button>
                                {!site && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleSite}>Website</button> }
                                {site && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleSite}>Website</button> }
                                {orders && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleOrders}>Orders</button>}
                                {!orders && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleOrders}>Orders</button>}
                                {users && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleUsers}>Users</button>}
                                {!users && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleUsers}>Users</button>}
                                {product && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] lg:h-20 h-12 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleProduct}>Products</button>}
                                {!product && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 lg:h-20 h-12 w-full border-b-2 border-gray-500 border-solid" onClick={handleProduct}>Products</button>}

                                
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
                        !isAdmin && <div className="w-full bg-yellow-400 h-full">
                            {Users.map((user)=>{
                                if(user.email === InfoUser.email){
                                    return(
                                        <div className="userPannel w-full flex h-full">
                                            <div className="pannel w-3/12 h-full border-r-4 border-solid border-gray-500  bg-neutral-300 ">
                                                <div className="border-b-2 border-neutral-700 border-dashed">
                                                    {user.UserImageAddress && <Avatar src={user.UserImageAddress} sx={{scale:"1.7"}} className="m-8 hover:scale-125 transition duration-200"/>}
                                                    {!user.UserImageAddress && <Avatar sx={{scale:"1.7"}} className="m-8"/>}

                                                </div>
                                                <ul className="">
                                                    <li><button>Click me</button></li>
                                                    <li><button>Click me</button></li>
                                                    <li><button>Click me</button></li>
                                                    <li><button>Click me</button></li>
                                                </ul>
                                            </div>
                                            <div className="w-9/12 bg-blue-400 h-full"></div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    }
                </div>
            }
        
        </>
    );
}
 
export default Dashboard;
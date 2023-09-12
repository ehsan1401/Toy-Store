import { useState } from "react";
import Toys from '../../DB/Toys.json';
import Orders from '../../DB/Orders.json';
import Users from '../../DB/users.json';
import { Link } from "react-router-dom";

const Dashboard = () => {
    let isAdmin = false;
    let InfoUser = JSON.parse(localStorage.getItem("user"));
    if(InfoUser){
        if(InfoUser.userID === 1){
            isAdmin = true;
        }
    }

    const [site , setSite] = useState(false);
    const [orders , setOrders] = useState(false);
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

    return (
        <>
            {
                !InfoUser && <div className="h-screen bg-gradient-to-tr from-pink-400 to-yellow-400 flex justify-center items-center">
                    <h1 className="font-bold text-8xl text-gray-50 ">
                        please Login Bro.
                    </h1>
                </div> 
            }{
                InfoUser && <div className="h-screen w-full flex">
                    {
                        isAdmin && <div className="w-full h-full flex shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                            
                            <div className="bar w-1/4 bg-gray-50 h-full flex flex-col font-light text-xl shadow-[inset_0px_0px_20px_rgba(0,0,0,0.4)] ">
                                <button className="h-20 shadow-[inset_-2px_0px_20px_rgba(0,0,0,0.4)] w-full bg-gray-200 border-b-2 border-black border-solid cursor-default font-semibold text-xl">Admin Pannel</button>
                                {!site && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 h-20 w-full border-b-2 border-gray-500 border-solid" onClick={handleSite}>Website</button> }
                                {site && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] h-20 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleSite}>Website</button> }
                                {orders && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] h-20 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleOrders}>Orders</button>}
                                {!orders && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 h-20 w-full border-b-2 border-gray-500 border-solid" onClick={handleOrders}>Orders</button>}
                                {users && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] h-20 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleUsers}>Users</button>}
                                {!users && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 h-20 w-full border-b-2 border-gray-500 border-solid" onClick={handleUsers}>Users</button>}
                                {product && <button className="shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] h-20 w-full border-b-2 border-gray-300 border-solid bg-gray-300" onClick={handleProduct}>Products</button>}
                                {!product && <button className="hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] hover:bg-gray-100 h-20 w-full border-b-2 border-gray-500 border-solid" onClick={handleProduct}>Products</button>}

                                
                            </div>
                            <div className="panels h-full w-3/4">
                                {site && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll">
                                    
                                    <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Website Details</h1>
                                    <div className="h-full w-full p-10 text-gray700">
                                        <ul className="w-full h-full">
                                            <li className="text-xl border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Store Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Store Name</span>:<span className="font-thin px-4">Toy Store</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Address</span>:<span className="font-thin px-4">Somogy , Bálint útja 06.</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Phone Number</span>:<span className="font-thin px-4">+36(84)532-259</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Email</span>:<span className="font-thin px-4">armin.szalai@yahoo.com</span></li>
                                                </ul>
                                            </li>
                                            <li className="text-xl border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Website Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Website Number of Products</span>:<span className="font-thin px-4">{Toys.length}<span className="pl-2">Product</span></span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Website Number of Users</span>:<span className="font-thin px-4">{Users.length}<span className="pl-2">User</span></span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Website Domain</span>:<span className="font-thin px-4"><a href="http://localhost:3000">http://localhost:3000</a></span></li>
                                                </ul>
                                            </li>
                                            <li className="text-xl border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Other Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Product Orders</span>:<span className="font-thin px-4">{Orders.length}<span className="pl-2">Orders</span></span></li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </div>
                                
                                
                                
                                </div>}
                                {orders && <div className="h-full w-full text-center border-dashed border-2 border-gray-500 p-5 overflow-y-scroll pb-32">
                                    <h1 className="pl-3 text-left py-5 font-bold text-gray-700 text-3xl">All Orders Details</h1>
                                    <ul className="border-black border-2 border-solid flex w-full bg-gray-200">
                                        <li className="border-r-2 border-solid border-black py-3">
                                            <h1 className="p-3 font-bold">Order</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{rowCounter = rowCounter+1}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="p-3 font-bold">Order Code</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{order.OrderID}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="p-3 font-bold">Product Code</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{order.ProductID}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="p-3 font-bold">User</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{order.UserID}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="py-3 flex-1">
                                            <h1 className="p-3 font-bold">Price</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{order.Price}{order.Symbol}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="border-l-2 border-solid border-black py-3 flex-1">
                                            <h1 className="p-3 font-bold">Details</h1>
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
                                {users && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll">
                                    <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Users Details</h1>
                                </div>}
                                {product && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll">
                                    <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Products Details</h1>
                                </div>}


                            </div>

                        </div>
                    }{
                        !isAdmin && <div>
                            <p>Is User</p>
                        </div>
                    }
                </div>
            }
        
        </>
    );
}
 
export default Dashboard;
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
                            
                            <div className="bar w-1/4 bg-gradient-to-tr from-orange-200 to-yellow-400 h-full flex flex-col font-serif text-xl shadow-[inset_0px_0px_20px_rgba(0,0,0,0.4)] ">
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
                            <div className="panels h-full w-3/4 bg-gradient-to-tr from-pink-400 to-yellow-400">
                                {site && <div className="h-full w-full border-dashed border-2 border-gray-500 p-5 overflow-y-scroll bg-gradient-to-tr from-pink-400 to-yellow-400">
                                    
                                    <h1 className="pl-10 pt-5 font-bold text-gray-700 text-3xl">Website Details</h1>
                                    <div className="h-full w-full px-10 py-5 text-gray700">
                                        <ul className="w-full h-full">
                                            <li className="text-xl bg-gray-300 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Store Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Store Name</span>:<span className="font-thin px-4">Toy Store</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Address</span>:<span className="font-thin px-4">Somogy , Bálint útja 06.</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Phone Number</span>:<span className="font-thin px-4">+36(84)532-259</span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Store Email</span>:<span className="font-thin px-4">armin.szalai@yahoo.com</span></li>
                                                </ul>
                                            </li>
                                            <li className="text-xl bg-gray-300 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Website Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Website Number of Products</span>:<span className="font-thin px-4">{Toys.length}<span className="pl-2">Product</span></span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Website Number of Users</span>:<span className="font-thin px-4">{Users.length}<span className="pl-2">User</span></span></li>
                                                    <li className="text-lg py-1"><span className="font-mono">Website Domain</span>:<span className="font-thin px-4"><a href="http://localhost:3000">http://localhost:3000</a></span></li>
                                                </ul>
                                            </li>
                                            <li className="text-xl bg-gray-300 border-2 border-solid border-gray-600 rounded-2xl p-5 my-3"><h1 className="font-semibold">Other Information</h1>
                                                <ul className="pl-3 pt-2">
                                                    <li className="text-lg py-1"><span className="font-mono">Product Orders</span>:<span className="font-thin px-4">{Orders.length}<span className="pl-2">Orders</span></span></li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </div>
                                
                                
                                
                                </div>}
                                {orders && <div className="h-full w-full text-center border-dashed border-2 border-gray-500 py-5 px-10 overflow-y-scroll pb-32 bg-gradient-to-tr from-pink-400 to-yellow-400">
                                    <h1 className="pl-3 text-left py-5 font-bold text-gray-700 text-3xl">All Orders Details</h1>
                                    <ul className="border-black border-2 border-solid flex w-full bg-gray-200">
                                        <li className="border-r-2 border-solid border-black py-3">
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
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="px-3 py-1 font-bold">Product Code</h1>
                                            <ul>
                                                {Orders.map((order)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{order.ProductID}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
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
                                {users && <div className="h-full w-full text-center border-dashed border-2 border-gray-500 py-5 px-10 overflow-y-scroll pb-32 bg-gradient-to-tr from-pink-400 to-yellow-400">
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
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="px-3 py-1 font-bold">User Password</h1>
                                            <ul>
                                                {Users.map((user)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{user.password}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li>  
                                        <li className="border-r-2 border-solid border-black py-3 flex-1">
                                            <h1 className="px-3 py-1 font-bold">Role</h1>
                                            <ul>
                                                {Users.map((user)=>{
                                                    return(
                                                        <li className="border-t-2 border-black border-solid py-3">{user.Role}</li>
                                                    )
                                                })}
                                            </ul>
                                        </li> 
                                        <li className="py-3 flex-1">
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
                                    <div className="">

                                    </div>
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
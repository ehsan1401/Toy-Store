import { useNavigate, useParams } from "react-router-dom";
import Orders from '../../DB/Orders.json';
import { Navigate } from "react-router-dom";


const OrderDetails = () => {
    const {Code} = useParams();
    const Navigate = useNavigate()
    return (
        <div className="h-auto px-16 py-6 bg-slate-200 " >
            <h1 className="font-extrabold text-5xl text-gray-600">Order Details</h1>
            {Orders.map((order)=>{
                if(Code == order.OrderID){
                    return(
                        <div className="h-full w-full grid grid-flow-row grid-cols-3 py-5 px-10 relative">
                            <div>
                                <h1 className="font-bold text-2xl pb-4 text-gray-600">Buyer Info</h1>
                                <ul className="pl-4">
                                    <li className="py-1"><span className="font-bold">User ID</span>:<span className="pl-2">{order.UserID}</span></li>
                                    <li className="py-1"><span className="font-bold">Buyer Name</span>:<span className="pl-2">{order.BuyerName}</span></li>
                                    <li className="py-1"><span className="font-bold">Buyer Phone</span>:<span className="pl-2">{order.BuyerPhone}</span></li>
                                    <li className="py-1"><span className="font-bold">Buyer Address</span>:<span className="pl-2">{order.BuyerAddress}</span></li>
                                    <li className="py-1"><span className="font-bold">Buyer Email</span>:<span className="pl-2">{order.BuyerEmail}</span></li>
                                    <li className="py-1"><span className="font-bold">Buyer Name</span>:<span className="pl-2">{order.BuyerName}</span></li>
                                </ul>
                                <button onClick={()=>{Navigate(-1)}} className="px-3 py-2 bg-red-500 mb-5 absolute right-20 bottom-20 rounded-2xl hover:bg-red-700 text-white font-bold ">Back</button>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pb-4 text-gray-600">Order Info</h1>
                                <ul className="pl-4">
                                    <li className="py-1"><span className="font-bold">Order Code</span>:<span className="pl-2">{order.OrderID}</span></li>
                                    <li className="py-1"><span className="font-bold">Order Date</span>:<span className="pl-2">{order.OrderDate} , {order.OrderTime}</span></li>
                                    <li className="py-1"><span className="font-bold">Delivery</span>:<span className="pl-2">{order.Delivery}</span></li>
                                    <li className="py-1"><span className="font-bold">Price</span>:<span className="pl-2">{order.Price}{order.Symbol}</span></li>
                                    <li className="py-1"><span className="font-bold">Status</span>:{order.DeliveryStatus && <span className="pl-2 text-lime-600 font-bold">{order.DeliveryStatus}</span>}{!order.DeliveryStatus && <span className="pl-2 text-red-600 font-bold"> Not Delivered </span>}</li>


                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl pb-4 text-gray-600">Product Info</h1>
                                <ul className="pl-4">
                                    <li className="py-1"><span className="font-bold">Product Code</span>:<span className="pl-2">{order.ProductID}</span></li>
                                    <li className="py-1"><span className="font-bold">Product Name</span>:<span className="pl-2">{order.ProductName}</span></li>
                                    <li className="py-1"><span className="font-bold">Product Number</span>:<span className="pl-2">{order.ProductNumber}</span></li>
                                    <li className="py-1"><span className="font-bold">Seller Name</span>:<span className="pl-2">{order.SellerName}</span></li>

                                </ul>
                            </div>
                            <div className="h-36">

                            </div>


                        </div>
                    )
                }
            })}
        </div>
    );
}
 
export default OrderDetails;
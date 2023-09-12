import { useParams } from "react-router-dom";
import Orders from '../../DB/Orders.json';


const OrderDetails = () => {
    const {Code} = useParams();
    return (
        <div>
            {Orders.map((order)=>{
                if(Code == order.OrderID){
                    return(
                        <p>
                            {order.ProductName}
                        </p>
                    )
                }
            })}
        </div>
    );
}
 
export default OrderDetails;
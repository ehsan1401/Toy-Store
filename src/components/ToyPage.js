import { useParams } from "react-router-dom";
import Toys from '../DB/Toys.json';
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import QrCodeIcon from '@mui/icons-material/QrCodeOutlined';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
const ToyPage = () => {
    const {Code} = useParams();
    const [add, setAdd] = useState(0);
    let con =0 ;
    let imageNum = 0;
    const adder = (minOrMax) =>{
        if(minOrMax === "+"){
            if(add<imageNum - 1){
                setAdd(add+1)
            }
        }
        if(minOrMax === "-"){
            if(add>0){
                setAdd(add-1)
            }
        }
    }
    return (
        <div className="bg-red-400">
            {
                Toys.map((toy)=>{
                    if(toy.Code == Code){
                        return( 
                            <div className="bg-gradient-to-tr from-blue-200 to-cyan-200 h-screen px-14 py-5">
                                <div className=" bg-gradient-to-tr from-amber-200 to-yellow-400 h-full lg:flex grid flex-row  border-4 border-black border-dashed rounded-2xl">
                                    <div className="info lg:w-1/2 w-full h-full pb-5 overflow-y-scroll">
                                        <h1 className="font-bold text-gray-800 text-3xl pt-12 pb-10 pl-12 ">{toy.title}</h1>
                                        <div className="infoitem px-14 py-3">
                                            <h2>Product Information</h2>
                                            <ul className="grid grid-cols-1 grid-flow-row pb-10 pt-8 px-5 gap-5">
                                                <li className="text-gray-700"><span className="pb-2"><CreateIcon/></span><span className="pl-3">{toy.toyName}</span></li>
                                                <li className="text-gray-700"><span className="pb-2"><BrandingWatermarkIcon/></span><span className="pl-3">brand:</span><span className="font-thin pl-3">{toy.Brand}</span></li>
                                                <li className="text-gray-700"><span className="pb-2"><QrCodeIcon/></span><span className="pl-3">Product Code:</span><span className="font-thin pl-3">{toy.Code}</span></li>
                                                <li className="text-gray-700"><span className="pb-2"><InventoryIcon/></span><span className="pl-3">Supply:</span><span className="font-thin pl-3">{toy.supply && <span>{toy.supply}</span>}{!toy.supply && <span className="text-red-600 font-extrabold">Nonexistence</span>}</span></li>


                                            </ul>
                                        </div>
                                        <div className="buy-box w-full h-1/3 flex gap-3 px-10">
                                            <div className="w-1/2 font-thin text-sm">{toy.Description}</div>
                                            <div className="  h-auto w-1/2 px-5 pt-4 pb-8 box-border">
                                                {toy.supply && <div className="w-full h-full grid text-center pt-5 px-3 border-dashed border-2 border-gray-600">
                                                    <h1 className="text-lime-600 font-bold text-3xl">{toy.Price} <span>{toy.Symbol}</span></h1>
                                                    {toy.PriceBeforeOff && <p className="line-through text-sm">{toy.PriceBeforeOff} <span>{toy.Symbol}</span></p>}
                                                    <button className="bg-gradient-to-tr from-green-600 to-blue-600 transition-all duration-700 hover:hue-rotate-180 p-5 my-3 rounded-lg font-bold text-white text-xl">Add to Cart</button>
                                                </div>}
                                                {!toy.supply && <div>
                                                    {toy.supply}
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                   <div className="imageGallery relative lg:w-1/2 w-full h-full lg:p-20 p-5">
                                        <div className="w-full h-full relative bg-gradient-to-r from-teal-200 to-teal-500 pb-20 rounded-2xl drop-shadow-2xl">
                                            <div className="mainImage bg-white w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
                                                <p className="hidden">{imageNum = toy.toyImages.length}</p>
                                                <img src={toy.toyImages[add]} className="max-h-full w-auto" />
                                                <button onClick={()=>{adder("+")}} className="bg-transparent hover:bg-gray-500 hover:bg-opacity-25 transition-all duration-500 py-5 px-3 mx-3 pl-5 absolute lg:right-5 right-0 rotate-180 rounded-2xl"><ArrowBackIosIcon/></button>
                                                <button onClick={()=>{adder("-")}} className="bg-transparent hover:bg-gray-500 hover:bg-opacity-25 transition-all duration-500 py-5 px-3 pl-5 mx-5 absolute lg:left-5 left-0 rounded-2xl"><ArrowBackIosIcon/></button>
                                            </div>
                                            <div className="flex justify-center gap-4 mx-3 mt-5">
                                                <p className="px-5 py-2 font-semibold">{add + 1} /{imageNum}</p>
                                                {toy.toyImages.map((imge)=>{
                                                    con++;
                                                    if(con-1 === add){
                                                        return(
                                                            <button value={con} className="">
                                                                <img src={imge} className="w-10 h-10 border-2 border-solid border-yellow-400" id={con-1} onClick={(e)=>{setAdd(Number(e.target.id))}}/>
                                                            </button>
                                                        )
                                                    }else{
                                                        return(
                                                            <button value={con}>
                                                                <img src={imge} className="w-10 h-10" id={con-1} onClick={(e)=>{setAdd(Number(e.target.id))}}/>
                                                            </button>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>

                                   </div>
                                </div>

                                

                            </div>
                        )
                    }
                })
            }
        </div>
    );
}
 
export default ToyPage;
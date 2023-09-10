import { useParams , Link } from "react-router-dom";
import Toys from '../DB/Toys.json';
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import QrCodeIcon from '@mui/icons-material/QrCodeOutlined';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import EscalatorWarningIcon from '@mui/icons-material/ChildCareOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const ToyPage = () => {
    const {Code} = useParams();
    const [add, setAdd] = useState(0);
    const [logedIn , setLogedIn] = useState(false);
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
    const [buy , setBuy] = useState(false);
    const [cart , setCart] = useState(false);
    const [bookmark , setBookmark] = useState(false);

    return (
        <div>
                    {
                        !buy && <div className="bg-gradient-to-tr from-blue-200 to-cyan-200">
                        <Stack sx={{ width: '50%', zIndex:10 , fontSize:'50px' }} spacing={2} className="m-auto sticky top-10 ">
                            {
                                cart && <div>
                                    {logedIn && <Alert
                                        severity="success"
                                        className=" flex justify-center items-center "
                                        sx={{ height:'70px' }}
                                        iconMapping={{
                                            success: <CheckCircleOutlineIcon fontSize="inherit" />,
                                        }}
                                    >
                                            This is a success alert — check it out!
                        
                                            <p className="hidden">{setTimeout( ()=>{setCart(false)} , 5000)}</p>
                                        </Alert>
                                    }{
                                        !logedIn && <Alert
                                        severity="error"
                                        className=" flex justify-center items-center"
                                        sx={{ height:'70px'}}
                                        iconMapping={{
                                            error: <ErrorOutlineRoundedIcon fontSize="inherit" />,
                                        }}
                                    >
                                            Please Login to your account <Link className="font-bold" to={"/Login"}>Login</Link>
                        
                                            <p className="hidden">{setTimeout( ()=>{setCart(false)} , 5000)}</p>
                                        </Alert>
                                    }
                                </div>
                            }

                        </Stack>
                        {
                            Toys.map((toy)=>{
                                if(toy.Code == Code){
                                    return( 
                                        <div className=" lg:h-screen h-auto w-full px-14 py-5" sx={{zIndex:0}}>
                                            <div className=" w-full bg-gradient-to-r from-violet-200 to-pink-200 h-full lg:flex grid flex-row  border-4 border-black border-dashed rounded-2xl">
                                                <div className="info lg:w-1/2 w-full h-full pb-5 ">
                                                    <h1 className="font-bold text-gray-700 text-3xl pt-12 pb-10 pl-12 ">{toy.title}</h1>
                                                    <div className="infoitem px-14 py-3">
                                                        <h2>Product Information</h2>
                                                        <ul className="grid grid-cols-1 grid-flow-row pb-10 pt-8 px-5 gap-3">
                                                            <li className=""><span className="pb-2"><CreateIcon/></span><span className="pl-3">{toy.toyName}</span></li>
                                                            <li className=""><span className="pb-2"><BrandingWatermarkIcon/></span><span className="pl-3">brand:</span><span className="font-thin pl-3">{toy.Brand}</span></li>
                                                            <li className=""><span className="pb-2"><QrCodeIcon/></span><span className="pl-3">Product Code:</span><span className="font-thin pl-3">{toy.Code}</span></li>
                                                            <li className=""><span className="pb-2"><EscalatorWarningIcon/></span><span className="pl-3">Ages:</span><span className="font-thin pl-3">{toy.Ages}</span></li>
                                                            <li className=""><span className="pb-2"><CategoryOutlinedIcon/></span><span className="pl-3">Category:</span><span className="font-thin pl-3">{toy.Category.map((cate) =>cate + ",")}</span></li>
                                                            <li className=""><span className="pb-2"><InventoryIcon/></span><span className="pl-3">Supply:</span><span className="font-thin pl-3">{toy.supply && <span>{toy.supply}</span>}{!toy.supply && <span className="text-red-600 font-extrabold">Nonexistence</span>}</span></li>
                                                            <li className=""><button onClick={()=>{setBookmark(!bookmark)}}>{!bookmark && <span className="pb-2"><BookmarkAddOutlinedIcon/></span>}{bookmark && <span className="pb-2 text-red-500"><BookmarkOutlinedIcon/></span>}<span className="pl-3"></span>Bookmark</button></li>

                                                        </ul>
                                                    </div>
                                                    <div className="buy-box w-full h-1/3 flex flex-col gap-3 px-10 bg-gray-400 bg-opacity-20 lg:ml-8 rounded-xl">
                                                        <div className="  h-auto w-full px-5 pt-4 pb-8 box-border">
                                                            {toy.supply && <div className="w-full">
                                                                <div className="gap-2 flex justify-center flex-col w-full" > 
                                                                <h1 className="text-lime-800 font-bold text-3xl w-full text-center"><span>{toy.Price}</span><span>{toy.Symbol}</span></h1>
                                                                {toy.PriceBeforeOff && <p className=" line-through w-full text-center"><span>{toy.PriceBeforeOff}</span><span>{toy.Symbol}</span></p>}
                                                                    
                                                                    <Button variant="contained" color="warning" onClick={()=>{setCart(true)}} startIcon={<AddShoppingCartOutlinedIcon />}>
                                                                        Add to Cart
                                                                    </Button>
                                                                    <Button variant="contained" startIcon={<LocalMallOutlinedIcon />}>
                                                                        Buy Now
                                                                    </Button>
                                                                </div>
                                                            </div>}
                                                            {!toy.supply && <div className="">
                                                                <div className="gap-2 flex justify-center flex-col"> 
                                                                <h1 className="text-lime-800 font-bold text-3xl w-full text-center p-5"><span className="font-bold text-red-500 text-2xl">Nonexistence</span></h1>
                                                                    
                                                                    <Button variant="contained" color="warning" onClick={()=>{setCart(true)}} startIcon={<AddShoppingCartOutlinedIcon />} disabled>
                                                                        Add to Cart
                                                                    </Button>
                                                                    <Button variant="contained" startIcon={<LocalMallOutlinedIcon />} disabled>
                                                                        Buy Now
                                                                    </Button>

                                                                </div>
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
                    }{
                        buy && <div className="">
                            {
                            Toys.map((toy)=>{
                                if(toy.Code == Code){
                                    return(
                                        <div className="h-screen bg-black bg-opacity-20 px-32 py-32">
                                            <div className="buy-side bg-lime-500 h-full w-full  rounded-2xl ">
                                                
                                            </div>
                                        </div>
                                    )
                                }})}
                        </div>
                    }
        </div>
    );
}
 
export default ToyPage;
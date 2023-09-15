import { useParams , Link } from "react-router-dom";
import Toys from '../DB/Toys.json';
import { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreateIcon from '@mui/icons-material/CreateOutlined';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import QrCodeIcon from '@mui/icons-material/QrCodeOutlined';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import EscalatorWarningIcon from '@mui/icons-material/ChildCareOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import TextField from '@mui/material/TextField';
import { red , grey } from "@mui/material/colors";
import { useContext } from "react";
import Context from "../Context";

const ToyPage = () => {
    const {light} = useContext(Context);
    const {Code} = useParams();
    const [add, setAdd] = useState(0);
    // const [logedIn , setLogedIn] = useState(false);
    const [buy , setBuy] = useState(false);
    const [cart , setCart] = useState(false);
    const [bookmark , setBookmark] = useState(false);
    const [price , setPrice] = useState(1);
    let con =0 ;
    let imageNum = 0;
    let Storage = JSON.parse(localStorage.getItem("user"));

    const handleBookmark = () =>{
        if(Storage){
            for(let i =0 ; i<Storage.BookmarksProductCode.length ; i++){
                if(Storage.BookmarksProductCode[i] == Code){
                    setBookmark(true);
                }
            }
        }
    }
    useEffect(handleBookmark,[])


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
    const handleSumite = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        const data_info = Object.fromEntries(data.entries());
        //data_info add to Orders list id DB
        // suplly -1 replaced to DB
        setBuy(false);
    }

    let productWidth = 240 ;
    let AllproductWidth = 0 ;
    const [trans , setTrans] =useState(0);
    for(let i=0 ; i<Toys.length ; i++){
        AllproductWidth = AllproductWidth + productWidth ;
    }
    const handleScroller = ()=>{
        if(trans < AllproductWidth){
            setTrans(trans + 240);
        }
    }
    setTimeout(handleScroller , 15000);

    return (
        <div>
            {
            light && 
                <div className=" bg-gradient-to-l from-fuchsia-500 to-cyan-200">
                    {
                        !buy && <div className="bg-gradient-to-r from-emerald-400 to-cyan-400">
                        <Stack sx={{ width: '50%', zIndex:10 , fontSize:'50px' }} spacing={2} className="m-auto sticky top-10 ">
                            {
                                cart && <div>
                                    {
                                        !Storage && <Alert
                                        severity="error"
                                        className=" flex justify-center items-center rounded-3xl"
                                        sx={{ height:'70px', backgroundColor:red[600]}}
                                        iconMapping={{
                                            error: <ErrorOutlineRoundedIcon className="text-white" fontSize="inherit" />,
                                        }}
                                    >
                                            <p className="text-white text-lg font-thin"><Link className="font-bold" to={"/Login"}>Please Login</Link> to your account</p> 
                        
                                            <p className="hidden">{setTimeout( ()=>{setCart(false)} , 5000)}</p>
                                        </Alert>
                                    }
                                    {
                                        Storage && <Alert
                                        severity="success"
                                        className=" flex justify-center items-center rounded-3xl"
                                        sx={{ height:'70px'}}
                                        iconMapping={{
                                            error: <ErrorOutlineRoundedIcon className="text-white" fontSize="inherit" />,
                                        }}
                                    >
                                            <p className="text-lime-700 text-lg font-thin">Added to Cart</p> 
                                            {/* Add this item to cart */}
                                            {console.log(Code)}
                        
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
                                        <div>
                                            <div className=" lg:h-screen h-auto w-full px-14 pt-5 pb-3" sx={{zIndex:0}}>
                                                <div className=" w-full bg-gradient-to-r from-violet-200 to-pink-200 h-full lg:flex grid flex-row pb-10 rounded-2xl">
                                                    <div className="info lg:w-1/2 w-full h-full pb-5 ">
                                                        <h1 className="font-bold text-gray-700 text-3xl pt-12 pb-10 pl-12 ">{toy.title}</h1>
                                                        <div className="infoitem px-14 py-3">
                                                            <h2>Product Information</h2>
                                                            <ul className="grid grid-cols-1 grid-flow-row pb-3 pt-8 px-5 gap-3">
                                                                <li className=""><span className="pb-2"><CreateIcon/></span><span className="pl-3">{toy.toyName}</span></li>
                                                                <li className=""><span className="pb-2"><BrandingWatermarkIcon/></span><span className="pl-3">brand:</span><span className="font-thin pl-3">{toy.Brand}</span></li>
                                                                <li className=""><span className="pb-2"><QrCodeIcon/></span><span className="pl-3">Product Code:</span><span className="font-thin pl-3">{toy.Code}</span></li>
                                                                <li className=""><span className="pb-2"><EscalatorWarningIcon/></span><span className="pl-3">Ages:</span><span className="font-thin pl-3">{toy.Ages}</span></li>
                                                                <li className=""><span className="pb-2"><CategoryOutlinedIcon/></span><span className="pl-3">Category:</span><span className="font-thin pl-3">{toy.Category.map((cate) =>cate + ",")}</span></li>
                                                                <li className=""><span className="pb-2"><InventoryIcon/></span><span className="pl-3">Supply:</span><span className="font-thin pl-3">{toy.supply && <span>{toy.supply}</span>}{!toy.supply && <span className="text-red-600 font-extrabold">Nonexistence</span>}</span></li>
                                                                <li className=""><button onClick={()=>{setBookmark(!bookmark)}}>{!bookmark && <span className="pb-2"><BookmarkAddOutlinedIcon/></span>}{bookmark && <span className="pb-2 text-red-500"><BookmarkOutlinedIcon/></span>}<span className="pl-3"></span>Bookmark</button></li>

                                                            </ul>
                                                        </div>
                                                        <div className="buy-box w-full h-auto flex flex-col gap-3 px-10 bg-gray-50 bg-opacity-20 lg:ml-8 rounded-xl">
                                                            <div className="  h-auto w-full px-5 pt-4 pb-8 box-border">
                                                                {toy.supply && <div className="w-full">
                                                                    <div className="gap-2 flex justify-center flex-col w-full" > 
                                                                    <h1 className="text-lime-800 font-bold text-3xl w-full text-center"><span>{toy.Price}</span><span>{toy.Symbol}</span></h1>
                                                                    {toy.PriceBeforeOff && <p className=" line-through w-full text-center"><span>{toy.PriceBeforeOff}</span><span>{toy.Symbol}</span></p>}
                                                                        
                                                                        <Button variant="contained" color="warning" onClick={()=>{setCart(true)}} startIcon={<AddShoppingCartOutlinedIcon />}>
                                                                            Add to Cart
                                                                        </Button>
                                                                        <Button variant="contained" startIcon={<LocalMallOutlinedIcon />} onClick={()=>{setBuy(true)}}  >
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
                                                        <div className="w-full h-full relative bg-gradient-to-r from-blue-200 to-cyan-200 pb-20 rounded-2xl drop-shadow-2xl">
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
                                                                                <img src={imge} className="w-10 h-10 border-2 border-dashed border-black" id={con-1} onClick={(e)=>{setAdd(Number(e.target.id))}}/>
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
                                            <div className="h-auto px-14 pb-3">
                                                <div className="  bg-gradient-to-r from-violet-200 to-pink-200 rounded-2xl p-5">
                                                    <h1 className="text-2xl font-bold">Description:</h1>
                                                    <p className="pl-3 p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, sequi. Ea voluptates corrupti, temporibus ratione excepturi magni at deserunt veritatis, obcaecati iusto assumenda dicta nobis magnam odio, et beatae delectus!
                                                    Necessitatibus incidunt possimus laudantium tenetur accusamus! Repellendus totam facere magni eveniet consectetur. Corrupti enim, laudantium illo ipsum, qui hic tenetur eius consectetur totam odit, nisi obcaecati commodi atque et! Quis!</p>
                                                </div>
                                            </div>
                                            <div className=" px-14 pb-3">
                                                <div className="bg-gradient-to-r from-violet-200 to-pink-200 h-auto w-full pb-8 px-8 rounded-2xl ">
                                                    <h1 className="text-gray-700 text-3xl font-bold p-5">other products</h1>
                                                    <div className="w-full overflow-x-scroll rounded-lg" style={{minWidth:"100%"}}>
                                                        <div className="w-full rounded-2xl flex gap-5 transition duration-500" style={{minWidth:`${AllproductWidth}px` , transform:`translate(${-trans}px, 0px)`}}>
                                                            {
                                                                Toys.map((toy)=>{
                                                                    return(
                                                                        <Link to={"/toy/" + toy.Code}>
                                                                            <div className="bg-gradient-to-tr from-slate-100 to-slate-300 border-dashed rounded-xl overflow-hidden border-2 border-gray-700 w-60 h-80">
                                                                                <img src={toy.toyImages[0]} className="w-full h-2/3" />
                                                                                <div className="h-1/3 px-3 relative">
                                                                                    <h1 className="font-bold text-gray-700">{toy.title}</h1>
                                                                                    <div className="absolute bottom-6 right-6 text-center">
                                                                                        <h2 className="font-bold text-lime-600 text-2xl"> {toy.PriceBeforeOff && <span className="font-thin line-through text-base text-red-500 px-3 justify-center relative bottom-1">{toy.PriceBeforeOff}{toy.Symbol}</span>}{toy.Price}{toy.Symbol}</h2>
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
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
                        buy && <div className="h-auto">
                            {
                            Toys.map((toy)=>{
                                if(toy.Code == Code){
                                    return(
                                        <div className="h-auto px-10 py-10 pb-40">
                                            <div className="buy-side bg-gradient-to-l from-fuchsia-500 to-cyan-400 h-full w-full  rounded-2xl p-8 relative text-gray-800 pr-48 pl-24 ">
                                                <img src={toy.toyImages[0]} className="w-72 lg:float-right rounded-2xl shadow-2xl m-auto mb-5 mt-10" />
                                                <h1 className="font-bold text-3xl">Product purchase</h1>
                                                
                                                <form onSubmit={handleSumite}>
                                                    <div className="productInfo lg:px-10 px-0 py-5 flex flex-col gap-3">
                                                        <div>
                                                            <h1 className="text-lg font-semibold text-gray-50">Product Information</h1>
                                                            <p className="name pl-3 py-5 " name="toyName"><span>{"Name:   " + toy.toyName}</span></p>
                                                            <input type="hidden"  value={toy.toyName} name="toyName" />
                                                            <p className="name pl-3 " name="toyCode"><span>{"Code:   " + toy.Code}</span></p>
                                                            <input type="hidden"  value={toy.Code} name="toyCode" />
                                                                <div className="flex flex-row pt-5">
                                                                    <p className="pl-3 pr-4">Number:</p>
                                                                    <input className="w-32 h-6 text-center text-white bg-opacity-40 bg-gray-400 rounded-2xl px-5" defaultValue="1" label="Name" min="0" max={toy.supply} type="number" onChange={(e)=>{setPrice(e.target.value)}}  name="toyNumber" />
                                                                </div>
                                                        </div>
                                                        <div className="buyerInfo py-5 flex flex-col gap-3">
                                                            <h1 className="text-lg font-semibold text-gray-50">Buyer Information</h1>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Name:</p>
                                                                {Storage && <TextField className="" defaultValue={Storage.UserName} id="standard-basic" label="Name" variant="standard" required  name="buyerName" />}
                                                                {!Storage && <TextField className="" id="standard-basic" label="Name" variant="standard" required  name="buyerName" />}
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2" >Buyer Phone:</p>
                                                                <TextField className="" id="standard-basic" label="Phone Number" variant="standard" required name="buyerPhone" />
                                                            </div>

                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Address:</p>
                                                                <TextField className="" id="standard-basic" label="Address" variant="standard" required  name="buyerAddress" />
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Email:</p>
                                                                {!Storage && <TextField className="" id="standard-basic" label="Email" variant="standard" type="email" name="buyerEmail" />}
                                                                {Storage && <TextField className="" defaultValue={Storage.email} id="standard-basic" label="Email" variant="standard" type="email" name="buyerEmail" />}
                                                            </div>
                                                        </div>
                                                        <div className="buyerInfo py-5 flex flex-col gap-3">
                                                            <h1 className="text-lg font-semibold text-gray-50">Seller Information</h1>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2 ">Seller Name:</p>
                                                                <TextField className="" id="standard-basic" label="Name" variant="standard" disabled defaultValue="Toy Store" name="sellerName" />
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-4 ">Delivery in:</p>
                                                                <TextField className="" id="standard-basic" label="Delivery" variant="standard" disabled defaultValue="3 - 5 Days" name="Delivery" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="buttons bg-gradient-to-b from-amber-200 to-yellow-400 my-5 py-5 px-3 text-center lg:w-72 w-full sticky bottom-0 lg:bottom-10 right-10 lg:float-right rounded-2xl">
                                                        <div className="flex py-3 flex-col justify-center text-right">
                                                            <p className="font-bold text-center text-lime-700 text-4xl">{toy.Price * price}{toy.Symbol}</p>
                                                            <input type="hidden"  value={toy.Price * price} name="Price" />
                                                            {toy.PriceBeforeOff && <p className="text-center line-through text-xl">{toy.PriceBeforeOff * price}{toy.Symbol}</p> }
                                                        </div>
                                                        <Button variant="contained" color="error" sx={{marginX:"5px"}} onClick={()=>{setBuy(false)}} >Cancele</Button>
                                                        <Button type="submit" value="pay" variant="contained" color="success" className="mx-5" sx={{marginX:"5px"}}>pay</Button>

                                                    </div>
                                                    <div className="sticky top-0">

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }})}
                        </div>
                    }
                </div>
            }{
            !light && 
                <div className="bg-gradient-to-r from-purple-500 to-purple-900">
                    {
                        !buy && <div className="bg-gradient-to-r from-slate-900 to-slate-700">
                        <Stack sx={{ width: '50%', zIndex:10 , fontSize:'50px' }} spacing={2} className="m-auto sticky top-10 ">
                            {
                                cart && <div>
                                    {
                                        !Storage && <Alert
                                        severity="error"
                                        className=" flex justify-center items-center rounded-3xl"
                                        sx={{ height:'70px', backgroundColor:red[600]}}
                                        iconMapping={{
                                            error: <ErrorOutlineRoundedIcon className="text-white" fontSize="inherit" />,
                                        }}
                                    >
                                            <p className="text-white text-lg font-thin"><Link className="font-bold" to={"/Login"}>Please Login</Link> to your account</p> 
                        
                                            <p className="hidden">{setTimeout( ()=>{setCart(false)} , 5000)}</p>
                                        </Alert>
                                    }
                                    {
                                        Storage && <Alert
                                        severity="success"
                                        className=" flex justify-center items-center rounded-3xl"
                                        sx={{ height:'70px'}}
                                        iconMapping={{
                                            error: <ErrorOutlineRoundedIcon className="text-white" fontSize="inherit" />,
                                        }}
                                    >
                                            <p className="text-lime-700 text-lg font-thin">Added to Cart</p> 
                                            {/* Add this item to cart */}
                                            {console.log(Code)}
                        
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
                                        <div>
                                            <div className=" lg:h-screen h-auto w-full px-14 pt-5 pb-3" sx={{zIndex:0}}>
                                                <div className=" w-full bg-gradient-to-l from-stone-500 to-stone-700 h-full lg:flex grid flex-row pb-10 rounded-2xl">
                                                    <div className="info lg:w-1/2 w-full h-full pb-5 ">
                                                        <h1 className="font-bold text-gray-100 text-3xl pt-12 pb-10 pl-12 ">{toy.title}</h1>
                                                        <div className="infoitem px-14 py-3">
                                                            <h2 className="text-gray-100">Product Information</h2>
                                                            <ul className="grid grid-cols-1 text-gray-100 grid-flow-row pb-3 pt-8 px-5 gap-3">
                                                                <li className=""><span className="pb-2"><CreateIcon/></span><span className="pl-3">{toy.toyName}</span></li>
                                                                <li className=""><span className="pb-2"><BrandingWatermarkIcon/></span><span className="pl-3">brand:</span><span className="font-thin pl-3">{toy.Brand}</span></li>
                                                                <li className=""><span className="pb-2"><QrCodeIcon/></span><span className="pl-3">Product Code:</span><span className="font-thin pl-3">{toy.Code}</span></li>
                                                                <li className=""><span className="pb-2"><EscalatorWarningIcon/></span><span className="pl-3">Ages:</span><span className="font-thin pl-3">{toy.Ages}</span></li>
                                                                <li className=""><span className="pb-2"><CategoryOutlinedIcon/></span><span className="pl-3">Category:</span><span className="font-thin pl-3">{toy.Category.map((cate) =>cate + ",")}</span></li>
                                                                <li className=""><span className="pb-2"><InventoryIcon/></span><span className="pl-3">Supply:</span><span className="font-thin pl-3">{toy.supply && <span>{toy.supply}</span>}{!toy.supply && <span className="text-red-600 font-extrabold">Nonexistence</span>}</span></li>
                                                                <li className=""><button onClick={()=>{setBookmark(!bookmark)}}>{!bookmark && <span className="pb-2"><BookmarkAddOutlinedIcon/></span>}{bookmark && <span className="pb-2 text-red-500"><BookmarkOutlinedIcon/></span>}<span className="pl-3"></span>Bookmark</button></li>

                                                            </ul>
                                                        </div>
                                                        <div className="buy-box w-full h-auto flex flex-col gap-3 px-10 bg-gray-50 bg-opacity-20 lg:ml-8 rounded-xl">
                                                            <div className="  h-auto w-full px-5 pt-4 pb-8 box-border">
                                                                {toy.supply && <div className="w-full">
                                                                    <div className="gap-2 flex justify-center flex-col w-full" > 
                                                                    <h1 className="text-lime-400 font-bold text-3xl w-full text-center"><span>{toy.Price}</span><span>{toy.Symbol}</span></h1>
                                                                    {toy.PriceBeforeOff && <p className=" line-through w-full text-center"><span>{toy.PriceBeforeOff}</span><span>{toy.Symbol}</span></p>}
                                                                        
                                                                        <Button variant="contained" color="warning" onClick={()=>{setCart(true)}} startIcon={<AddShoppingCartOutlinedIcon />}>
                                                                            Add to Cart
                                                                        </Button>
                                                                        <Button variant="contained" startIcon={<LocalMallOutlinedIcon />} onClick={()=>{setBuy(true)}}  >
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
                                                        <div className="w-full h-full relative bg-gradient-to-r from-slate-300 to-slate-500 pb-20 rounded-2xl drop-shadow-2xl">
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
                                                                                <img src={imge} className="w-10 h-10 border-2 border-dashed border-black" id={con-1} onClick={(e)=>{setAdd(Number(e.target.id))}}/>
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
                                            <div className="h-auto px-14 pb-5">
                                                <div className="  bg-gradient-to-l from-stone-500 to-stone-700 rounded-2xl p-5 text-gray-200">
                                                    <h1 className="text-2xl font-bold">Description:</h1>
                                                    <p className="pl-3 p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, sequi. Ea voluptates corrupti, temporibus ratione excepturi magni at deserunt veritatis, obcaecati iusto assumenda dicta nobis magnam odio, et beatae delectus!
                                                    Necessitatibus incidunt possimus laudantium tenetur accusamus! Repellendus totam facere magni eveniet consectetur. Corrupti enim, laudantium illo ipsum, qui hic tenetur eius consectetur totam odit, nisi obcaecati commodi atque et! Quis!</p>
                                                </div>
                                            </div>
                                            <div className=" px-14 pb-3">
                                                <div className="bg-gradient-to-l from-stone-500 to-stone-700 h-auto w-full pb-8 px-8 rounded-2xl ">
                                                    <h1 className="text-gray-200 text-3xl font-bold p-5">other products</h1>
                                                    <div className="w-full overflow-x-scroll rounded-lg" style={{minWidth:"100%"}}>
                                                        <div className="w-full rounded-2xl flex gap-5 transition duration-500" style={{minWidth:`${AllproductWidth}px` , transform:`translate(${-trans}px, 0px)`}}>
                                                            {
                                                                Toys.map((toy)=>{
                                                                    return(
                                                                        <Link to={"/toy/" + toy.Code}>
                                                                            <div className="bg-gradient-to-tr from-slate-400 to-slate-700 border-dashed rounded-xl overflow-hidden border-2 border-gray-300 w-60 h-80">
                                                                                <img src={toy.toyImages[0]} className="w-full h-2/3" />
                                                                                <div className="h-1/3 px-3 relative">
                                                                                    <h1 className="font-bold text-gray-200">{toy.title}</h1>
                                                                                    <div className="absolute bottom-6 right-6 text-center">
                                                                                        <h2 className="font-bold text-lime-400 text-2xl"> {toy.PriceBeforeOff && <span className="font-thin line-through text-base text-red-400 px-3 justify-center relative bottom-1">{toy.PriceBeforeOff}{toy.Symbol}</span>}{toy.Price}{toy.Symbol}</h2>
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
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
                        buy && <div className="h-auto">
                            {
                            Toys.map((toy)=>{
                                if(toy.Code == Code){
                                    return(
                                        <div className="h-auto px-10 py-10 pb-40 ">
                                            <div className="buy-side bg-gradient-to-r from-slate-500 to-slate-800 h-full w-full  rounded-2xl p-8 relative text-gray-800 pr-48 pl-24 ">
                                                <img src={toy.toyImages[0]} className="w-72 lg:float-right rounded-2xl shadow-2xl m-auto mb-5 mt-20" />
                                                <h1 className="font-bold text-3xl ">Product purchase</h1>
                                                
                                                <form onSubmit={handleSumite}>
                                                    <div className="productInfo lg:px-10 px-0 py-5 flex flex-col gap-3 text-gray-50">
                                                        <div>
                                                            <h1 className="text-lg font-semibold text-gray-50">Product Information</h1>
                                                            <p className="name pl-3 py-5 " name="toyName"><span>{"Name:   " + toy.toyName}</span></p>
                                                            <input type="hidden"  value={toy.toyName} name="toyName" />
                                                            <p className="name pl-3 " name="toyCode"><span>{"Code:   " + toy.Code}</span></p>
                                                            <input type="hidden"  value={toy.Code} name="toyCode" />
                                                                <div className="flex flex-row pt-5">
                                                                    <p className="pl-3 pr-4">Number:</p>
                                                                    <input className="w-32 h-6 text-center text-white bg-opacity-40 bg-gray-400 rounded-2xl px-5" defaultValue="1" label="Name" min="0" max={toy.supply} type="number" onChange={(e)=>{setPrice(e.target.value)}}  name="toyNumber" />
                                                                </div>
                                                        </div>
                                                        <div className="buyerInfo py-5 flex flex-col gap-3">
                                                            <h1 className="text-lg font-semibold text-gray-50">Buyer Information</h1>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Name:</p>
                                                                {!Storage && <TextField className="" id="standard-basic" label="Name" variant="standard" required  name="buyerName" color="warning" />}
                                                                {Storage && <TextField className="" defaultValue={Storage.UserName} id="standard-basic" label="Name" variant="standard" required  name="buyerName" color="warning" />}
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2" >Buyer Phone:</p>
                                                                <TextField className="" id="standard-basic" label="Phone Number" variant="standard" required name="buyerPhone" color="warning"  />
                                                            </div>

                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Address:</p>
                                                                <TextField className="" id="standard-basic" label="Address" variant="standard" required  name="buyerAddress" color="warning"  />
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2">Buyer Email:</p>
                                                                {!Storage && <TextField className="" id="standard-basic" label="Email" variant="standard" type="email" name="buyerEmail" color="warning"  />}
                                                                {Storage && <TextField className="" defaultValue={Storage.email} id="standard-basic" label="Email" variant="standard" type="email" name="buyerEmail" color="warning"  />}
                                                            </div>
                                                        </div>
                                                        <div className="buyerInfo py-5 flex flex-col gap-3">
                                                            <h1 className="text-lg font-semibold text-gray-50">Seller Information</h1>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-2 ">Seller Name:</p>
                                                                <TextField className="" id="standard-basic" label="Name" variant="standard" disabled defaultValue="Toy Store" name="sellerName" color="warning"  />
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <p className="pl-3 pt-5 pr-4 ">Delivery in:</p>
                                                                <TextField className="" id="standard-basic" label="Delivery" variant="standard" disabled defaultValue="3 - 5 Days" name="Delivery" color="warning"  />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="buttons bg-gradient-to-r from-slate-500 to-slate-800 my-5 py-5 px-3 text-center lg:w-72 w-full sticky bottom-0 lg:bottom-10 right-10 lg:float-right rounded-2xl">
                                                        <div className="flex py-3 flex-col justify-center text-right">
                                                            <p className="font-bold text-center text-lime-400 text-4xl">{toy.Price * price}{toy.Symbol}</p>
                                                            <input type="hidden"  value={toy.Price * price} name="Price" />
                                                            {toy.PriceBeforeOff && <p className="text-center line-through text-xl text-gray-300">{toy.PriceBeforeOff * price}{toy.Symbol}</p> }
                                                        </div>
                                                        <Button variant="contained" color="error" sx={{marginX:"5px"}} onClick={()=>{setBuy(false)}} >Cancele</Button>
                                                        <Button type="submit" value="pay" variant="contained" color="success" className="mx-5" sx={{marginX:"5px"}}>pay</Button>

                                                    </div>
                                                    <div className="sticky top-0">

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }})}
                        </div>
                    }
                </div>
            }
        </div>
    );
}
 
export default ToyPage;
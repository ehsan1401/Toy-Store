import {Link} from 'react-router-dom'
import Ages from './Ages';
import Toys from '../../../DB/Toys.json';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import Categorys from '../../../DB/Category.json';


const Store = () => {
    const Age = ["Babies","Child","Teenager","Young"]


    const [all, setAll] = useState(true);
    const [low, setLow] = useState(false);
    const [high, setHigh] = useState(false);
    const [offer, setOffer] = useState(false);

    const [items , setItems] = useState("All");
    let counter = 0 ;



    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
    //   setSort(event.target.value);
    if(event.target.value === "All"){
        setAll(true);
        setLow(false);
        setHigh(false);
        setOffer(false);
        setItems(event.target.value)
    }
    if(event.target.value === "Low"){
        setAll(false);
        setLow(true);
        setHigh(false);
        setOffer(false);
        setItems(event.target.value)

    }
    if(event.target.value === "High"){
        setAll(false);
        setLow(false);
        setHigh(true);
        setOffer(false);
        setItems(event.target.value)

    }
    if(event.target.value === "Off"){
        setAll(false);
        setLow(false);
        setHigh(false);
        setOffer(true);
        setItems(event.target.value)

    }

    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };



    return (
        <div className="px-10 py-5 bg-gradient-to-r from-pink-700 to-yellow-400 h-auto ">
            <h1 className='mb-5 flex justify-center font-bold text-8xl bg-gradient-to-tr from-gray-300 to-gray-50 bg-clip-text text-transparent drop-shadow-[-4px_6px_3px_rgba(0,0,0,0.5)] '>Store</h1>
            <div className=' rounded-2xl bg-opacity-25 bg-gray-50 relative overflow-hidden'>
                <img src="/img/Store2.png" className='absolute right-10 w-48 hidden lg:inline'  />
                <div className=" px-2 py-5 md:gap-6 gap-3 text-center h-auto flex justify-center">
                    <Link to={"/Store/Ages/" + Age[0]} className='px-5 py-8 bg-blue-300 border-2 border-gray-50 border-dashed rounded-full font-semibold text-white font-lg hover:hue-rotate-180 transition-all duration-700 bg-gradient-to-tr from-green-600 to-blue-600' >
                        <p>Babies <br /> (1-12 Month)</p>
                    </Link>
                    <Link to={"/Store/Ages/" + Age[1]} className='px-5 py-8 bg-blue-300 border-2 border-gray-50 border-dashed rounded-full font-semibold text-white font-lg hover:hue-rotate-180 transition-all duration-700 bg-gradient-to-tr from-blue-500 to-violet-500' >
                        <p>Child <br /> (1-8 Years)</p>
                    </Link>                
                    <Link to={"/Store/Ages/" + Age[2]} className='px-5 py-8 bg-blue-300 border-2 border-gray-50 border-dashed rounded-full font-semibold text-white font-lg hover:hue-rotate-180 transition-all duration-700 bg-gradient-to-tr from-yellow-400 to-red-400' >
                        <p>Teenager <br /> (8-15 years)</p>
                    </Link>
                    <Link to={"/Store/Ages/" + Age[3]} className='px-5 py-8 bg-blue-300 border-2 border-gray-50 border-dashed rounded-full font-semibold text-white font-lg hover:hue-rotate-180 transition-all duration-700 bg-gradient-to-tr from-lime-500 to-orange-500' >
                        <p>Young  <br /> (15+ years)</p>
                    </Link>
                </div>
            </div>
            <div className='h-auto p-3 bg-white bg-opacity-40 w-full my-5 pb-8 rounded-2xl'>
                <h1 className='text-white pl-10 px-5 pt-3 text-2xl font-bold'>Special offers</h1>
                <Link to={"*"} className='text-gray-600 hover:underline pr-10 float-right font-bold'>More offers</Link>
                <div className=' h-full w-full md:flex grid gap-5 py-3 px-10 justify-center'>
                    
                    {
                        Toys.map((toy)=>{
                            if(toy.PriceBeforeOff){
                                return(
                                    <Link to={"/toy/" + toy.Code}>
                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                            <img src={toy.toyImages[0]}/>
                                            <div className='discribe px-3 py-1 mb-5 '>
                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span></strong>
                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>





            <div className='lg:flex grid w-full md:h-screen h-auto gap-5'>
                    <div className='pb-5 pt-2 px-3  lg:w-3/4 w-full bg-white bg-opacity-25  rounded-2xl '>
                        <div className=' lg:h-full p-5  overflow-y-scroll h-screen'>
                            {all && <div className='md:flex flex-wrap grid gap-5 py-3 px-10 justify-center'>
                                    {
                                        Toys.map((toy)=>{
                                            counter += 1 ;
                                                return(
                                                    <Link to={"/toy/" + toy.Code}>
                                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                            <img src={toy.toyImages[0]}/>
                                                            <div className='discribe px-3 py-1 mb-5 '>
                                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> {toy.PriceBeforeOff && <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span>}</strong>
                                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            
                                        })
                                    }
                            </div>}
                             {low && <div className=' md:flex flex-wrap grid gap-5 py-3 px-10 justify-center gap-3'>
                                    {
                                        Toys.sort((a, b) => (Number(a.Price) > Number(b.Price)) ? 1 : -1).map((toy)=>{
                                            counter += 1 ;
                                                return(
                                                    <Link to={"/toy/" + toy.Code}>
                                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                            <img src={toy.toyImages[0]}/>
                                                            <div className='discribe px-3 py-1 mb-5 '>
                                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> {toy.PriceBeforeOff && <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span>}</strong>
                                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            
                                        })
                                    }
                            </div>} {high && <div className='md:flex flex-wrap grid py-3 px-10 justify-center gap-3'>
                                    {
                                        Toys.sort((a, b) => (Number(a.Price) < Number(b.Price)) ? 1 : -1).map((toy)=>{
                                            counter += 1 ;
                                                return(
                                                    <Link to={"/toy/" + toy.Code}>
                                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                            <img src={toy.toyImages[0]}/>
                                                            <div className='discribe px-3 py-1 mb-5 '>
                                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> {toy.PriceBeforeOff && <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span>}</strong>
                                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            
                                        })
                                    }
                            </div>}{offer && <div className='md:flex flex-wrap grid py-3 px-10 justify-center gap-3'>
                                    {
                                        Toys.map((toy)=>{
                                            if(toy.PriceBeforeOff){
                                                counter += 1 ;
                                                return(
                                                    <Link to={"/toy/" + toy.Code}>
                                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                            <img src={toy.toyImages[0]}/>
                                                            <div className='discribe px-3 py-1 mb-5 '>
                                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span></strong>
                                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        })
                                    }
                                    
                            </div>}
                        </div>
                    </div>
                <div className=' lg:w-1/4 w-full h-full box-border py-2'>
                    <div className='lg:h-1/4 pb-5 h-auto bg-gray-400 bg-opacity-25 rounded-2xl mb-2 text-center'>
                        <h1 className='font-semibold text-xl text-gray-100 pt-5 pb-3 text-left pl-5 '>Sort items By :</h1>
                        <FormControl sx={{ m: 1, minWidth: 150 , maxWidth: 300}} color='secondary' variant='standard'>
                            <InputLabel id="demo-controlled-open-select-label" sx={{color:'white'}}>Sort Product</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            defaultValue={items}
                            label="Sort Product"
                            onChange={handleChange}
                            sx={{color:'white'}}
                            >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Low"}>Low Price</MenuItem>
                            <MenuItem value={"High"}>High Price</MenuItem>
                            <MenuItem value={"Off"}>Off Products</MenuItem>

                            </Select>
                        </FormControl>
                        <div className='inf font-light text-gray-100'>
                            {all && <p>{counter} product available</p>}{low && <p>{counter} product available</p>}{high && <p>{counter} product available</p>}{offer && <p>{counter} product available</p>}
                        </div>
                    </div>
                    <div className='lg:h-3/4 h-auto bg-white bg-opacity-25 rounded-2xl mt-2 overflow-hidden p-5 pb-0 relative'>
                        <h1 className='font-bold text-2xl mb-3 text-gray-600'>Categories</h1>
                        <div className="quick-acess pl-3  ">
                            <p className='font-thin mb-2'>
                                You can find the toy you want from among the categories.
                            </p>
                            <Link to={"/AllCategory"} className='my-1 font-mono text-gray-50 hover:underline hover:text-gray-800'>- All Categorys</Link>
                            <ul className=' pb-5'>
                                {Categorys.slice(0 , 5).map((cate)=>{
                                    return(
                                        <li className='my-1 font-mono text-gray-50 hover:underline hover:text-gray-800'>
                                            <Link to={"/Category/" + cate.name.replace(/\s/g , "-")}>- {cate.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <img src="/img/DM_minions.png" alt="DM_minions" className='w-56 absolute right-0' />
                        </div>
                    </div>

                </div>
            </div>














            <div className='h-auto p-3 bg-white bg-opacity-40 w-full my-5 pb-8 rounded-2xl'>
                <h1 className='text-white pl-10 px-5 pt-3 text-2xl font-bold'>Best Seller</h1>
                <Link to={"/BestSellers"} className='text-gray-600 hover:underline pr-10 float-right font-bold'>All Best Sellers</Link>
                <div className=' h-full w-full md:flex grid gap-5 py-3 px-10 justify-center'>
                    
                    {
                        Toys.sort((a, b) => (a.TotalSell < b.TotalSell) ? 1 : -1).slice(0 , 5).map((toy)=>{
                                return(
                                    <Link to={"/toy/" + toy.Code}>
                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                            <img src={toy.toyImages[0]}/>
                                            <div className='discribe px-3 py-1 mb-5 '>
                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> {toy.PriceBeforeOff && <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span>}</strong>
                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate + ",")})}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            
                        })
                    }
                </div>
            </div>
            <div className='h-auto p-3 bg-white bg-opacity-40 w-auto my-5 pb-8 rounded-2xl'>
                <h1 className='text-white pl-10 px-5 pt-3 text-2xl font-bold'>You might like it...</h1>
                <div className=' h-full w-auto md:flex grid gap-5 py-3 px-10 overflow-scroll'>
                    {

                            Toys.slice(Math.floor(Math.random() * (Toys.length))%Toys.length/2 , Math.floor(Math.random() * (Toys.length))%Toys.length/2 + 3).map((toy)=>{
                            
                               
                                return(
                                    <Link to={"/toy/" + toy.Code}>
                                        <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                            <img src={toy.toyImages[0]}/>
                                            <div className='discribe px-3 py-1 mb-5 '>
                                                <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> {toy.PriceBeforeOff && <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span>}</strong>
                                                <p className='font-thin my-1'>{toy.Category.map((cate)=>{return(cate)})+","}</p>
                                            </div>
                                        </div>
                                    </Link>

                                )
                            })

                        
                    }

                </div>
            </div>


        </div>
    );
}
 
export default Store;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Toys from '../../../DB/Toys.json';
import {Link} from 'react-router-dom'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Ages = () => {



    const {rate} = useParams();

    return (
        <div className="h-auto bg-gradient-to-r from-gray-200 to-blue-200 px-10 py-5">
            <h1 className="font-bold text-4xl text-gray-700 py-5">Suitable products for age category {rate}</h1>
            <div className='md:flex flex-wrap grid py-3 px-10 justify-center gap-3'>
                {
                    Toys.sort((a, b) => (Number(a.Price) < Number(b.Price)) ? 1 : -1).map((toy)=>{
                        if(toy.Ages === rate){
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
                        }
                                            
                    })
                }
            </div>
        </div>
    );
}
 
export default Ages
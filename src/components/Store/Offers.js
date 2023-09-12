import {Link} from 'react-router-dom'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Toys from '../../DB/Toys.json';
import Context from '../../Context'
import { useContext } from 'react';

const Offers = () => {

    const {light} = useContext(Context);
    return (
        <>
            {
                light && <div className='bg-gradient-to-l from-pink-500 to-yellow-400 px-20 py-10'>
                <div className='h-auto p-3 bg-white bg-opacity-40 w-full my-5 pb-8 rounded-2xl '>
                    <h1 className='text-white pl-10 px-5 pt-3 text-2xl font-bold'>All Special offers</h1>
                    <div className=' h-full w-full flex flex-wrap gap-5 py-3 px-10 justify-center'>
                        
                        {
                            Toys.map((toy)=>{
                                if(toy.PriceBeforeOff){
                                    return(
                                        <Link to={"/toy/" + toy.Code}>
                                            <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                <img src={toy.toyImages[0]}/>
                                                <div className='discribe px-3 py-1 mb-5 '>
                                                    <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                    {
                                                        toy.supply && <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span></strong>
                                                    }{
                                                        !toy.supply && <strong className='text-xl my-1 text-red-500'>Nonexistence</strong>
                                                    }
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
            </div>
            }{
                !light &&  <div className='bg-gradient-to-r from-stone-500 to-stone-700 px-20 py-10'>
                <div className='h-auto p-3 bg-white bg-opacity-10 w-full my-5 pb-8 rounded-2xl '>
                    <h1 className='text-white pl-10 px-5 pt-3 text-2xl font-bold'>All Special offers</h1>
                    <div className=' h-full w-full flex flex-wrap gap-5 py-3 px-10 justify-center'>
                        
                        {
                            Toys.map((toy)=>{
                                if(toy.PriceBeforeOff){
                                    return(
                                        <Link to={"/toy/" + toy.Code}>
                                            <div className="card min-h-full w-60 bg-gray-800 text-white bg-opacity-30  overflow-hidden rounded-xl border-2 border-gray-50 border-dashed">
                                                <img src={toy.toyImages[0]}/>
                                                <div className='discribe px-3 py-1 mb-5 '>
                                                    <h1 className=' font-semibold my-1'>{toy.toyName}</h1>
                                                    {
                                                        toy.supply && <strong className='text-xl my-1'><RequestQuoteIcon className='text-sm pb-1 text-lime-500' /><span className='underline'>{toy.Price} {toy.Symbol}</span> <span className='ml-3 text-gray-100 line-through font-thin text-base'>{toy.PriceBeforeOff}{toy.Symbol}</span></strong>
                                                    }{
                                                        !toy.supply && <strong className='text-xl my-1 text-red-500'>Nonexistence</strong>
                                                    }
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
            </div>
            }
        </>
    )
}
 
export default Offers;
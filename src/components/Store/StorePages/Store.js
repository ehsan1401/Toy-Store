import {Link} from 'react-router-dom'
import Ages from './Ages';
import Toys from '../../../DB/Toys.json';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
const Store = () => {
    const Age = ["Babies","Child","Teenager","Young"]
    


    return (
        <div className="px-10 py-5 bg-gradient-to-r from-pink-700 to-yellow-400 h-auto ">
            <h1 className='mb-5 flex justify-center font-bold text-8xl bg-gradient-to-tr from-gray-300 to-gray-50 bg-clip-text text-transparent drop-shadow-[-4px_6px_3px_rgba(0,0,0,0.5)] '>Store</h1>
            <div className="bg-gray-50 px-2 py-5 md:gap-6 gap-3 text-center h-auto flex justify-center rounded-2xl bg-opacity-25">
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
            <div className='flex w-full h-screen gap-5 py-3'>
                <div className='bg-white opacity-25 w-3/4 rounded-2xl'></div>
                <div className='bg-white opacity-25 w-1/4 rounded-2xl'></div>
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
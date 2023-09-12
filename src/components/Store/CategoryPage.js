import { useParams } from "react-router-dom";
// import Data from '../../DB/Category.json';
import Toys from '../../DB/Toys.json';
import Card from '../Cards/FourCard';
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Context from "../../Context";
import { useContext } from "react";
const CategoryPage = () => {
    const [firstall , setFirstall] = useState(0);
    const [secondall , setSecondall] = useState(4);
    const [firstall2 , setFirstall2] = useState(0);
    const [secondall2 , setSecondall2] = useState(4);
    let toys = [];
    const {light} = useContext(Context);
    const { Code } = useParams();
    Toys.sort((a, b) => (a.TotalSell < b.TotalSell) ? 1 : -1);
    Toys.map((toy)=>
        toy.Category.map((cat)=>{
            if(cat.replace(/\s/g , "-") === Code){
                toys.push(toy)

            }
        })
    )

    const handleincreaseAll2 = ()=>{
        if(toys.length > secondall2 ){
            setFirstall2(firstall2 + 2);
            setSecondall2(secondall2 + 2); 
        }
    
    }
    const handledecreaseAll2 = ()=>{
        if( firstall2 > 0){
            setFirstall2(firstall2 - 2);
            setSecondall2(secondall2 - 2);
        }
    }
    const handleincreaseAll = ()=>{
        if(toys.length > secondall ){
            setFirstall(firstall + 2);
            setSecondall(secondall + 2); 
        }
    
    }
    const handledecreaseAll = ()=>{
        if( firstall > 0){
            setFirstall(firstall - 2);
            setSecondall(secondall - 2);
        }
    }



    

    return (
        <>
            {
                light && <div className=" w-auto h-auto p-5 bg-gradient-to-r from-pink-600 to-yellow-400 relative">
                <div className="itemCategory bg-gray-100 py-3 pb-12 mb-8 mt-5 rounded-xl">
                    <h1 className='font-extrabold text-gray-700 text-4xl pl-10 pb-5 pt-3'>Best Seller <span>{Code.replace(/-/g ," ")}</span></h1>
                    <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                        <button onClick={()=>{handledecreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                        {
                            toys.slice(firstall,secondall).map((item)=>{
                                return(
                                    <Card class="flex-1  " ops={item.title} text={item.ShortDescription} imageURL={item.toyImages} beforePrice ={item.PriceBeforeOff} price={item.Price} symbol={item.Symbol} Code={item.Code} suplly={item.supply} />   
                                )
                            })
                        }
                        
                        <button onClick={()=>{handleincreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                    </section>
                </div>
                <div className="itemCategory bg-gray-100 py-3 pb-12 mb-8 mt-5 rounded-xl">
                    <h1 className='font-extrabold text-gray-700 text-4xl pl-10 pb-5 pt-3'>All <span>{Code.replace(/-/g ," ")}s</span></h1>
                    <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                        <button onClick={()=>{handledecreaseAll2()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                        {
                            toys.sort((a, b) => (a.Code < b.Code) ? 1 : -1).slice(firstall2,secondall2).map((item)=>{
                                return(
                                    <Card class="flex-1  " ops={item.title} text={item.ShortDescription} imageURL={item.toyImages} beforePrice ={item.PriceBeforeOff} price={item.Price} symbol={item.Symbol} Code={item.Code} suplly={item.supply} />   
                                )
                            })
                        }
                        
                        <button onClick={()=>{handleincreaseAll2()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                    </section>
                </div>
            </div>
            }{
                !light && <div className=" w-auto h-auto p-5 bg-gradient-to-r from-stone-500 to-stone-700 relative">
                <div className="itemCategory bg-gradient-to-r from-slate-500 to-slate-800 py-3 pb-12 mb-8 mt-5 rounded-xl">
                    <h1 className='font-extrabold text-gray-200 text-4xl pl-10 pb-5 pt-3'>Best Seller <span>{Code.replace(/-/g ," ")}</span></h1>
                    <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                        <button onClick={()=>{handledecreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                        {
                            toys.slice(firstall,secondall).map((item)=>{
                                return(
                                    <Card class="flex-1  " ops={item.title} text={item.ShortDescription} imageURL={item.toyImages} beforePrice ={item.PriceBeforeOff} price={item.Price} symbol={item.Symbol} Code={item.Code} suplly={item.supply} />   
                                )
                            })
                        }
                        
                        <button onClick={()=>{handleincreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                    </section>
                </div>
                <div className="itemCategory bg-gradient-to-r from-slate-500 to-slate-800 py-3 pb-12 mb-8 mt-5 rounded-xl">
                    <h1 className='font-extrabold text-gray-200 text-4xl pl-10 pb-5 pt-3'>All <span>{Code.replace(/-/g ," ")}s</span></h1>
                    <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                        <button onClick={()=>{handledecreaseAll2()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                        {
                            toys.sort((a, b) => (a.Code < b.Code) ? 1 : -1).slice(firstall2,secondall2).map((item)=>{
                                return(
                                    <Card class="flex-1  " ops={item.title} text={item.ShortDescription} imageURL={item.toyImages} beforePrice ={item.PriceBeforeOff} price={item.Price} symbol={item.Symbol} Code={item.Code} suplly={item.supply} />   
                                )
                            })
                        }
                        
                        <button onClick={()=>{handleincreaseAll2()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                    </section>
                </div>
            </div>
            }
        </>
        )
}
 
export default CategoryPage;

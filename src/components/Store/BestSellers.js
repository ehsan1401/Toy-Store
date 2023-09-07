import { useState } from 'react';
import Toys from '../../DB/Toys.json';
import Card from '../Cards/ThirdCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const BestSellers = () => {
    var Counter = 0;
    const [firstw , setFirstw] = useState(0);
    const [secondw , setSecondw] = useState(4);
    const [firstm , setFirstm] = useState(0);
    const [secondm , setSecondm] = useState(4);
    const [firstall , setFirstall] = useState(0);
    const [secondall , setSecondall] = useState(4);

    const handleincreaseAll = ()=>{
        if(Counter > secondall ){
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
    const handleincreaseWeek = ()=>{
        if(Counter > secondw ){
            setFirstw(firstw + 2);
            setSecondw(secondw + 2); 
        }
    
    }
    const handledecreaseWeek = ()=>{
        if( firstw > 0){
            setFirstw(firstw - 2);
            setSecondw(secondw - 2);
        }
    }
    const handleincreaseMonth = ()=>{
        if(Counter > secondm ){
            setFirstm(firstm + 2);
            setSecondm(secondm + 2); 
        }
    
    }
    const handledecreaseMonth = ()=>{
        if( firstm > 0){
            setFirstm(firstm - 2);
            setSecondm(secondm - 2);
        }
    }


    return (
        <div className="BestSellers w-auto h-auto p-5 bg-gradient-to-r from-pink-600 to-yellow-400 relative">
            <img src="./img/BS.png" className=' absolute right-4 top-4 w-64' />
            <h1 className='bg-gradient-to-r from-gray-50 via-gray-400 to-gray-50 text-transparent bg-clip-text font-extrabold text-8xl text-center drop-shadow-[-3px_3px_2px_rgba(0,0,0,0.3)]  '>BEST SELLERS</h1>
            {Toys.map((item1454) => { return(
                <div className='hidden'>
                    {Counter+=1}
                </div>
            ) })}
            <div className='BestSellerInWeek bg-gray-100 py-3 pb-12 mb-8 mt-12 rounded-xl relative'>
                <h1 className='font-extrabold text-gray-700 text-4xl pl-10 pb-5 pt-3'>Best Seller in this Week</h1>
                <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                    <button onClick={()=>{handledecreaseWeek()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                {
                    
                    Toys.sort((a, b) => (a.SellinthisWeek < b.SellinthisWeek) ? 1 : -1).slice(firstw , secondw).map((toy)=>{
                        return(
                            <Card class="flex-1  " ops={toy.title} text={toy.ShortDescription} imageURL={toy.toyImages} beforePrice ={toy.PriceBeforeOff} price={toy.Price} symbol={toy.Symbol} Code={toy.Code} />
                        )
                    }
                    )
                }
                    <button onClick={()=>{handleincreaseWeek()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                </section>
            </div>
            <div className='BestSellerInMonth bg-gray-100 py-3 pb-12 mb-8 mt-5 rounded-xl'>
                <h1 className='font-extrabold text-gray-700 text-4xl pl-10 pb-5 pt-3'>Best Seller in this Month</h1>
                <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                    <button onClick={()=>{handledecreaseMonth()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                {
                    Toys.sort((a, b) => (a.SellinthisMonth < b.SellinthisMonth) ? 1 : -1).slice(firstm , secondm).map((toy)=>{
                        return(
                            <Card class="flex-1  " ops={toy.title} text={toy.ShortDescription} imageURL={toy.toyImages} beforePrice ={toy.PriceBeforeOff} price={toy.Price} symbol={toy.Symbol} Code={toy.Code} />
                        )
                    }
                    )
                }
                    <button onClick={()=>{handleincreaseMonth()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                </section>
            </div>
            <div className='BestSellerAll bg-gray-100 py-3 pb-12 mb-8 mt-5 rounded-xl'>
                <h1 className='font-extrabold text-gray-700 text-4xl pl-10 pb-5 pt-3'>Best Seller Products</h1>
                <section className='lg:flex grid h-auto items-center justify-center relative gap-5 ' >
                    <button onClick={()=>{handledecreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pl-2 rounded-e-2xl absolute left-0 font-bold text-lg '><ArrowBackIosIcon/></button>
                {
                    Toys.sort((a, b) => (a.TotalSell < b.TotalSell) ? 1 : -1).slice(firstall , secondall).map((toy)=>{
                        return(
                            <Card class="flex-1  " ops={toy.title} text={toy.ShortDescription} imageURL={toy.toyImages} beforePrice ={toy.PriceBeforeOff} price={toy.Price} symbol={toy.Symbol} Code={toy.Code} />
                        )
                    }
                    )
                }
                    <button onClick={()=>{handleincreaseAll()}} className='lg:h-32 h-screen bg-gray-300 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 hover:-translate-x-3 hover:text-white hover:w-20 hover:rounded-2xl transition-all duration-300 w-14 pr-2 rounded-s-2xl absolute right-0 font-bold text-lg '><ArrowBackIosIcon className='rotate-180' /></button>
                </section>
            </div>
        </div>  
    );
    
}

export default BestSellers;





{/* <div className="BestSellers w-auto">
<section className='overflow-x-scroll bg-red-600 whitespace-nowrap relative pr-96 ' id='scrol1' sx={divStyle}>
{
    Toys.map((toy)=>{
        return(
            <Card class=""  sx={{Width: 300 , Height: 700}} ops={toy.title} text={toy.ShortDescription} imageURL={toy.toyImages} beforePrice ={toy.PriceBeforeOff} price={toy.Price} symbol={toy.Symbol} />
        )
    }
    )
}
</section>
<div className='h-screen bg-black'>
    <button className='p-32 text-white bg-lime-500' >adakslkd;ak;ldka;sldk;l</button>
</div>
</div>   */}

import { useState } from "react";
import { Link } from "react-router-dom";
import Card from '../Cards/firstCard';
import Toys from '../../DB/Toys.json';

const Home = () => {
    
    let title = "Lorem ipsum"
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem harum? Dignissimos vitae, reiciendis voluptatum accusantium dolore excepturi, asperiores dicta quia et sunt dolorum. Beatae fugit aperiam dolor ex ipsum!"
    let image = "./img/Not-Founded.webp"
    return (
        <div className="home-page bg-gray-50 ">
            <header className="w-full h-auto pr-10 py-5 flex bg-gradient-to-r from-orange-500 to-yellow-400">
                <div className=" relative w-1/2 flex">
                <div className="w-1/3"></div>
                    <img src="./img/main-page.webp" className="w-2/3"/>
                </div>
                <div className="info w-1/2 justify-center items-center flex flex-col">
                    <h1 className="text-8xl font-extrabold bg-gradient-to-tr from-blue-700 to-blue-300 text-transparent bg-clip-text py-5 drop-shadow-[0_5px_2px_rgba(51,51,153,0.8)]">Toy Store</h1>
                    <p className="text-center font-light text-lg my-2 text-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.8)]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="my-5">
                        <Link className="px-5 py-3 bg-blue-600 text-white font-bold outline-dashed outline-amber-800 mx-2 rounded-xl hover:bg-blue-900 ">Toys</Link>
                        <Link className="px-5 py-3 bg-blue-400 text-white font-bold outline-dashed outline-amber-800 mx-2 rounded-xl hover:bg-blue-900 ">Games</Link>
                    </div>
                </div>
            </header>
            <div className="pop-products h-2/3 flex pb-12">
                    <div className="grid">
                        <h1 className="font-bold text-4xl pl-14 pt-4 text-gray-600"><span className="drop-shadow-[-3px_3px_2px_rgba(0,0,0,0.3)]">Best Sellers</span> <span className=" text-orange-700 font-bold text-lg float-right mt-5 pr-10 hover:underline"><Link to={"*"}>See More...</Link></span></h1>
                        <div className="max-w-4/5 flex p-10 gap-4">
                            {Toys.slice(0 , 4).map(toy=>{
                                return(
                                    <div className="" key={toy.Code}>
                                        <Card ops={toy.title} text={toy.ShortDescription} imageURL={toy.toyImages} />
                                    </div>
                                )
                            })}
                        
                        </div>
                    </div>
                    <div className="pop-image w-1/5 pb-32 relative right-0  ">
                        <img src="./img/pop-image.webp" className="h-96 float-right pr-10"/>
                    </div>
            </div>
            <div className="special-offers">
                <div className="offers">

                </div>
                <div className="image-offer">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;
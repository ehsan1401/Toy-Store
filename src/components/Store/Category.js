
import Data from '../../DB/Category.json';
import {Link} from 'react-router-dom';
import Context from '../../Context';
import { useContext } from 'react';
const Category = () => {
    const {light} = useContext(Context);
    return (
        <>
            {
                light && 
                <div>
                    <div className="Category h-full bg-gray-300 grid gap-10 px-10 pt-5 pb-20">
                        <h1 className='font-bold text-4xl text-gray-700 pl-10 py-3 '>Categories</h1>
                            {Data.map(item=>{
                            return(
                                <div className="item-container relative h-full my-8" key={item.Code}>
                                    <Link to={'/Category/' + item.name.replace(/\s/g , "-")}>
                                        <div className="item w-auto flex md:flex-row items-center flex-col h-full md:py-10 py-3 px-3 ">
                                            <img src={item.MainImageCategoryURL} className="w-auto h-64 float-left md:absolute bottom-12" />
                                            <div className="w-full bg-gray-50 hover:bg-yellow-100 border-2 border-gray-400 border-dashed h-full rounded-2xl  flex justify-center flex-col">
                                                <div className="md:ml-80 ml-0 py-2 px-3 ">
                                                    <h3 className="font-bold text-2xl pt-3">{ item.name }</h3><br />
                                                    <p className="font-thin pl-2">{item.ShortInfo}</p><br />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </Link>
                                </div>
                            )
                            })}
                    </div>
                </div>
            }{
                !light && 
                <div>
                    <div className="Category h-full bg-gray-700 grid gap-10 px-10 pt-5 pb-20">
                        <h1 className='font-bold text-4xl text-gray-200 pl-10 py-3 '>Categories</h1>
                            {Data.map(item=>{
                            return(
                                <div className="item-container relative h-full my-8" key={item.Code}>
                                    <Link to={'/Category/' + item.name.replace(/\s/g , "-")}>
                                        <div className="item w-auto flex md:flex-row items-center flex-col h-full md:py-10 py-3 px-3 ">
                                            <img src={item.MainImageCategoryURL} className="w-auto h-64 float-left md:absolute bottom-12" />
                                            <div className="w-full bg-gray-600 hover:bg-gray-500 border-2 border-gray-400 border-dashed h-full rounded-2xl  flex justify-center flex-col">
                                                <div className="md:ml-80 ml-0 py-2 px-3 text-gray-100 ">
                                                    <h3 className="font-bold text-2xl pt-3">{ item.name }</h3><br />
                                                    <p className="font-thin pl-2">{item.ShortInfo}</p><br />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </Link>
                                </div>
                            )
                            })}
                    </div>
                </div>
            }
        </>
    );
}
 
export default Category;
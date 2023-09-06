
import Data from '../../DB/Category.json';
import {Link} from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className="Category h-full bg-gray-50 grid gap-10 px-10 pt-5 pb-20">
                    {Data.map(item=>{
                       return(
                        <div className="item-container relative h-full my-8" key={item.Code}>
                            <Link to={'/Category/' + item.Code}>
                                <div className="item w-auto flex md:flex-row items-center flex-col h-full md:py-10 py-3 px-3 ">
                                    <img src={item.MainImageCategoryURL} className="w-auto h-64 float-left md:absolute bottom-12" />
                                    <div className="w-full bg-gray-100 hover:bg-gray-300 border-2 border-gray-400 border-dashed h-full rounded-2xl  flex justify-center flex-col">
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
    );
}
 
export default Category;
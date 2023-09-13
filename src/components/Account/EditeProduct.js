import { useParams } from "react-router-dom";
import Toys from '../../DB/Toys.json';
import TextField from '@mui/material/TextField';
import Category from '../../DB/Category.json';
import { Autocomplete } from "@mui/material";
import { useContext } from "react";
import Context from "../../Context";
const EditeProduct = () => {
    const {Code} = useParams();
    const {light} = useContext(Context);
    return (
        <>
            {
                light &&         <div className="h-auto bg-gray-200 p-10">
                <h1 className="font-bold text-gray-7300 text-4xl my-2">Edite Product</h1>
                {
                    Toys.map((toy)=>{
                        if(Code == toy.Code ){
                            return(
                                <div className="w-full h-full bg-neutral-300 rounded-2xl my-5">
                                    <h1 className="font-bold text-3xl text-gray-600 p-5"><span className="">Code:</span><span>{toy.Code}</span></h1>
                                    <form className="relative pb-32 px-10">
                                        <div className="flex p-5 gap-8">
                                            <div>
                                               <label htmlFor="Name" className="font-light my-3 text-gray-600 px-5">Name</label>
                                                <input type="text" defaultValue={toy.toyName} name="Name" id="Name" className="my-1 text-gray-600 font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="title" className="font-light my-3 text-gray-600 px-5">Title</label>
                                                <input type="text" defaultValue={toy.title} name="title" id="title" className="my-1 text-gray-600 bg-transparent border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="Brand" className="font-light my-3 text-gray-600 px-5">Brand</label>
                                                <input type="text" name="Brand" defaultValue={toy.Brand} id="Brand" className="my-1 text-gray-600 font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="Price" className="font-light my-3 text-gray-600 px-5">Price</label>
                                                <input type="text" defaultValue={toy.Price} name="Price" id="Price" className="my-1 bg-transparent text-gray-600 border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                                <select name="Symbol" id="Symbol" className="w-20 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                    <option value="$">$</option>
                                                    <option value="¥">¥</option>
                                                    <option value="€">€</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="PriceBeforeOff" className="font-light my-3 text-gray-600 px-5">Price Before Off</label>
                                                <input type="text" defaultValue={toy.PriceBeforeOff} name="PriceBeforeOff" id="PriceBeforeOff" className="my-1 text-gray-600 font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="supply" className="font-light my-3 text-gray-600 px-5">supply</label>
                                                <input type="number" defaultValue={toy.supply} name="supply" id="supply" className="my-1 bg-transparent text-gray-600 border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3  focus:border-yellow-400" />
                                                                    
                                                <label htmlFor="Ages" className="font-light my-3 text-gray-600 pl-10 ">Ages</label>
                                                <select name="Ages" id="Ages" className="w-40 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                    <option value="Babies">Babies</option>
                                                    <option value="Child">Child</option>
                                                    <option value="Teenager">Teenager</option>
                                                    <option value="Young">Young</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="ShortDescription" className="font-light my-3 text-gray-600 px-5">Short Description</label>
                                                <textarea type="text" defaultValue={toy.ShortDescription} name="ShortDescription" id="ShortDescription" className="my-1 p-3 text-gray-600 font-mono bg-transparent rounded-xl border-b-2 border-l-2 border-solid border-gray-700  focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="Description" className="font-light my-3 text-gray-600 px-5">Description</label>
                                                <textarea type="text" defaultValue={toy.Description} name="Description" id="Description" className="my-1 p-3 text-gray-600 bg-transparent border-b-2 border-l-2 border-solid border-gray-700 rounded-xl focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="pl-6 py-4">
                                            <label htmlFor="image" className="font-light my-3 text-gray-600 px-5">Image</label>
                                            <input type="file" name="image" id="image" className="my-1 bg-transparent text-gray-600 border-b-2 border-l-2 border-solid border-gray-700 focus:outline-none pl-3 focus:border-yellow-400" />
                                            <Autocomplete
                                                className="my-5 p-5 rounded-2xl"
                                                multiple
                                                id="Category"
                                                options={Category}
                                                getOptionLabel={(option) => option.name}
                                                renderInput={(params) => (
                                                <TextField
                                                {...params}
                                                variant="standard"
                                                color="warning"
                                                label="Category"
                                                placeholder="Category"
                                                />
                                                )}
                                            />
                                        </div>
                                                            
                                        <input type="submit" value="Edite Product" className="p-5 rounded-2xl absolute right-10 bottom-10 transition duration-300 font-semibold text-white bg-neutral-800 hover:bg-gray-500"/>
                                                            
                                    </form>
                                </div>
                            )
                        }
                    })
                }
            </div>
            }{
                !light &&         <div className="h-auto bg-gray-400 p-10">
                <h1 className="font-bold text-gray-700 text-4xl my-2">Edite Product</h1>
                {
                    Toys.map((toy)=>{
                        if(Code == toy.Code ){
                            return(
                                <div className="w-full h-full bg-neutral-600 rounded-2xl my-5">
                                    <h1 className="font-bold text-3xl text-gray-200 p-5"><span className="">Code:</span><span>{toy.Code}</span></h1>
                                    <form className="relative pb-32 px-10">
                                        <div className="flex p-5 gap-8">
                                            <div>
                                               <label htmlFor="Name" className="font-light my-3 text-white px-5">Name</label>
                                                <input type="text" defaultValue={toy.toyName} name="Name" id="Name" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="title" className="font-light my-3 text-white px-5">Title</label>
                                                <input type="text" defaultValue={toy.title} name="title" id="title" className="my-1 text-white bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="Brand" className="font-light my-3 text-white px-5">Brand</label>
                                                <input type="text" name="Brand" defaultValue={toy.Brand} id="Brand" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="Price" className="font-light my-3 text-white px-5">Price</label>
                                                <input type="text" defaultValue={toy.Price} name="Price" id="Price" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                <select name="Symbol" id="Symbol" className="w-20 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                    <option value="$">$</option>
                                                    <option value="¥">¥</option>
                                                    <option value="€">€</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="PriceBeforeOff" className="font-light my-3 text-white px-5">Price Before Off</label>
                                                <input type="text" defaultValue={toy.PriceBeforeOff} name="PriceBeforeOff" id="PriceBeforeOff" className="my-1 text-white font-mono bg-transparent border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="supply" className="font-light my-3 text-white px-5">supply</label>
                                                <input type="number" defaultValue={toy.supply} name="supply" id="supply" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                                                    
                                                <label htmlFor="Ages" className="font-light my-3 text-white pl-10 ">Ages</label>
                                                <select name="Ages" id="Ages" className="w-40 rounded-xl p-1 mx-5 outline-none bg-neutral-600 text-white">
                                                    <option value="Babies">Babies</option>
                                                    <option value="Child">Child</option>
                                                    <option value="Teenager">Teenager</option>
                                                    <option value="Young">Young</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex p-5 gap-8">
                                            <div>
                                                <label htmlFor="ShortDescription" className="font-light my-3 text-white px-5">Short Description</label>
                                                <textarea type="text" defaultValue={toy.ShortDescription} name="ShortDescription" id="ShortDescription" className="my-1 p-3 text-white font-mono bg-transparent rounded-xl border-b-2 border-l-2 border-solid  focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                            <div>
                                                <label htmlFor="Description" className="font-light my-3 text-white px-5">Description</label>
                                                <textarea type="text" defaultValue={toy.Description} name="Description" id="Description" className="my-1 p-3 text-white bg-transparent border-b-2 border-l-2 border-solid rounded-xl focus:outline-none pl-3 focus:border-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="pl-6 py-4">
                                            <label htmlFor="image" className="font-light my-3 text-white px-5">Image</label>
                                            <input type="file" name="image" id="image" className="my-1 bg-transparent text-white border-b-2 border-l-2 border-solid border-gray-200 focus:outline-none pl-3 focus:border-yellow-400" />
                                            <Autocomplete
                                                className="my-5 bg-gradient-to-t from-neutral-300 to-white p-5 rounded-2xl"
                                                multiple
                                                id="Category"
                                                options={Category}
                                                getOptionLabel={(option) => option.name}
                                                renderInput={(params) => (
                                                <TextField
                                                {...params}
                                                variant="standard"
                                                color="warning"
                                                label="Category"
                                                placeholder="Category"
                                                />
                                                )}
                                            />
                                        </div>
                                                            
                                        <input type="submit" value="Edite Product" className="p-5 rounded-2xl absolute right-10 bottom-10 transition duration-300 font-semibold bg-gray-300 hover:bg-neutral-800 hover:text-white"/>
                                                            
                                    </form>
                                </div>
                            )
                        }
                    })
                }
            </div>
            }
        </>
    );
}
 
export default EditeProduct;
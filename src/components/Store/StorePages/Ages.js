import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Toys from '../../../DB/Toys.json';

const Ages = () => {



    const {rate} = useParams();

    return (
        <div className="">
            <div>
                {
                    Toys.map((toy)=>{
                        if(toy.Ages === rate){
                            return(
                                <div>
                                    {toy.toyName}
                                </div>
                            )
                        }
                    })
                }  
            </div>
        </div>
    );
}
 
export default Ages
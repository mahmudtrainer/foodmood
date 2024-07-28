import React from 'react';
import { GiEternalLove } from "react-icons/gi";
import foods from '../../../public/foods.json'
import "./Craving.css"
const Craving = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-10'>
           {
                foods?.slice(0,5).map((e,idx)=> <div className='border-2 bg-gray-100 relative w-fit p-2 ' key={idx}>
<img id='card_img' className='w-56 h-52 object-cover rounded-ee-2xl' src={e.photo} alt="" />
{/* <GiEternalLove className='text-3xl top-4 right-3 bg-white p-1 rounded-full text-red-500 absolute' /> */}
<h1>{e.name}</h1>
<p>{e.price}</p>
<button className='btn bg-red-500 ml-auto flex justify-center w-fit text-white'>Order</button>
                </div>)
            }
           </div>
        </div>
    );
};

export default Craving;
import React from 'react';
import logo from '../../../public/logo.png'
import "./Card.css"
import { GiEternalLove } from "react-icons/gi";
import foods from '../../../public/foods.json'
const Card = () => {
    console.log(foods);
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-center my-4 font-bold'>Hungry? Eat & Order</h1>
            {/* <img id='img' src={logo} className='w-48  mx-auto ' alt="" />
            <GiEternalLove className='text-3xl text-green-700'></GiEternalLove> */}

           <div className='flex flex-wrap justify-center gap-10'>
           {
                foods?.slice(0,5).map((e,idx)=> <div className='border-2 relative w-fit p-2 ' key={idx}>
<img className='w-56 h-52 object-cover rounded-xl' src={e.photo} alt="" />
<GiEternalLove className='text-3xl top-4 right-3 bg-white p-1 rounded-full text-red-500 absolute' />
<h1>{e.name}</h1>
<p>{e.price}</p>
<button className='btn bg-red-500 ml-auto flex justify-center w-fit text-white'>Order</button>
                </div>)
            }
           </div>
<button className='bg-transparent btn border-2 border-red-500 mx-auto w-fit flex justify-center my-10 text-red-500'>View Full Menu</button>
        </div>
    );
};

export default Card;
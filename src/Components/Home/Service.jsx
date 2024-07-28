import Lottie from 'lottie-react';
import React from 'react';
import quality from "../../../public/quality.json"
import order from "../../../public/order.json"
import delivery from "../../../public/develivery.json"
import logo from '../../../public/logo.png'

const Service = () => {
    return (
        <div className='text-center flex gap-10 justify-center'>
            <div className='bg-gray-200 rounded-2xl p-2'>
                <h1>Best Quality</h1>
                <Lottie animationData={quality} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-2xl p-2'>
                <h1>Fast Delivery</h1>
                <Lottie animationData={order} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-2xl p-2'>
                <h1>Hygienic</h1>
                <Lottie animationData={quality} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-2xl p-2'>
                <h1>Budget Friendly</h1>
                <Lottie animationData={delivery} className='w-44'></Lottie>
            </div>
            <div className='bg-gray-200 rounded-2xl p-2'><h1>Easy to Order</h1>
            <Lottie animationData={quality} className='w-44'></Lottie>
            
            </div>

        </div>
    );
};

export default Service;
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)};


    return (
        <section>
            <h1 className='text-4xl text-center font-bold'>Add Product</h1>

            <div className='w-1/3 mx-auto my-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' action="">
                    <div className='w-2/3 mx-auto'>
                        <label className='text-xl font-semibold' htmlFor="">Enter Your Food Name:</label> <br />
                        {/* <input className='border-2 w-full border-black rounded-xl p-1'></input> */}
                        <input className='border-2 w-full border-black rounded-xl p-1' {...register("name")} />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <label className='text-xl font-semibold' htmlFor="">Enter Your Food Price:</label> <br />
                        {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
                        <input className='border-2 w-full border-black rounded-xl p-1' {...register("price")} />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <label className='text-xl font-semibold' htmlFor="">Enter Your Food Image URL:</label> <br />
                        {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
                        <input className='border-2 w-full border-black rounded-xl p-1' {...register("image")} />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <label className='text-xl font-semibold' htmlFor="">Enter Your Food Details:</label> <br />
                        {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
                        <textarea className='border-2 w-full h-20 border-black rounded-xl p-1' {...register("details")} />
                    </div>
                    <div className='w-2/3 mx-auto'>
                        <button className='btn  w-full bg-red-500 text-white hover:bg-red-500'>Submit</button>
                    </div>
                    {/* <div className='w-2/3 mx-auto'>
                    <label className='text-xl font-semibold' htmlFor="">Enter Your Food Image:</label> <br />
                    <input className='border-2 w-full border-black rounded-xl p-1 '></input>
                </div>
                <div className='w-2/3 mx-auto'>
                    <label className='text-xl font-semibold' htmlFor="">Enter Your Food URL:</label> <br />
                    <input className='border-2 w-full border-black rounded-xl p-1 '></input>
                </div>
                <div className='w-2/3 mx-auto'>
                    <label className='text-xl font-semibold' htmlFor="">Enter Your Food Price:</label> <br />
                    <input className='border-2 w-full border-black rounded-xl p-1 '></input>
                </div>
                <div className='w-2/3 mx-auto'>
                    <label className='text-xl font-semibold' htmlFor="">Enter Your Food Details:</label> <br />
                    <textarea className='border-2 w-full h-20 border-black rounded-xl p-1 '></textarea>
                </div>
                 */}
                </form>
            </div>
        </section>
    );
};

export default AddProduct;
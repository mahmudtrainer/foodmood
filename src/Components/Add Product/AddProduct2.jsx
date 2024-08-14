import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct2 = () => {

    const [change, setchange] = useState();

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        data.rate = change
        console.log(data);
    }

    console.log(change);
  
    return (
        <section>
            <h1>Add Your Food</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-3'>

                <div className='w-1/3  mx-auto'>
                    <label>Enter Your Food Name</label> <br />
                    <input className='border-2 w-2/3 border-black rounded-xl p-1'  {...register("name")} />
                </div>
                {/* <h1 className='text-center'>Hello</h1> */}
                <div className='w-1/3 mx-auto'>
                    <label>Enter Your Food Price</label> <br />
                    <input className='border-2 w-2/3 border-black rounded-xl p-1'  {...register("price")} />
                </div>
                <div className='w-1/3 mx-auto'>
                    <label>Enter Your Food Image URL</label> <br />
                    <input onChange={()=>setchange("")} type='file'  className='border-2 w-2/3 border-black rounded-xl p-1'  />
                </div>
                <div className='w-1/3 mx-auto'>
                    <label>Enter Your Food Details</label> <br />
                    <textarea className='border-2 w-2/3 border-black rounded-xl p-1'  {...register("details")} />
                </div>
                <div className='w-1/3 mx-auto'>
                    <button className='btn w-full bg-red-500 text-white hover:bg-red-500'>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct2;
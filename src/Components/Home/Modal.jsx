import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import useAxios, { AxiosSource } from "./useAxios";

const Modal = ({ setcondition, card }) => {
  const axiosLink = useAxios(AxiosSource);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const watchfield = watch();

  const onSubmit = (data) => {
    // console.log(data);
    const newData = {
      name : data?.name || card?.name ,
       price : data?.price || card?.price ,
        image : data?.image || card?.image ,
        details : data?.details || card?.details,

    }

    axiosLink.put(`/update/${card?._id}`, newData)
    .then(res=>{
      console.log(res);
      
    })
    .catch(err=>{
      console.log(err);
      
    })

    console.log(newData) 
    // console.log(watchfield);
    // if(data){
    //   axiosLink.
    // }
  };

  return (
    <section>
      <div className="flex justify-end mr-5 mt-5">
        <button
          onClick={() => setcondition(false)}
          className="text-3xl  font-extrabold"
        >
          <IoCloseSharp></IoCloseSharp>
        </button>
      </div>
      <h1 className="text-4xl text-center font-bold">Add Product</h1>

      <div className="w-2/3 mx-auto my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" action="">
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="">
              Enter Your Food Name:
            </label>{" "}
            <br />
            {/* <input className='border-2 w-full border-black rounded-xl p-1'></input> */}
            <input
              defaultValue={card?.name}
              className="border-2 w-full border-black rounded-xl p-1"
              {...register("name")}
             
            />
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="">
              Enter Your Food Price:
            </label>{" "}
            <br />
            {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
            <input
              defaultValue={card?.price}
              className="border-2 w-full border-black rounded-xl p-1"
              {...register("price")}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="">
              Enter Your Food Image URL:
            </label>{" "}
            <br />
            {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
            <input
              defaultValue={card?.image}
              className="border-2 w-full border-black rounded-xl p-1"
              {...register("image")}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <label className="text-xl font-semibold" htmlFor="">
              Enter Your Food Details:
            </label>{" "}
            <br />
            {/* <input className='border-2 w-full border-black rounded-xl p-1 '></input> */}
            <textarea
              defaultValue={card?.details}
              className="border-2 w-full h-20 border-black rounded-xl p-1"
              {...register("details")}
            />
          </div>
          <div className="w-2/3 mx-auto">
            <button className="btn  w-full bg-red-500 text-white hover:bg-red-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;

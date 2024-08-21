import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios, { AxiosSource } from "./useAxios";
import Swal from "sweetalert2";
import Modal from "./Modal";

<<<<<<< HEAD
const CardDetails = () => {
  const route = useParams();
  const navigate = useNavigate();
  const axiosLink = useAxios(AxiosSource);
  const [condition, setcondition] = useState(false);
  const [data, setdata] = useState();
=======

const CardDetails = () => {
  const route = useParams();
  const axiosLink = useAxios(AxiosSource);
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [condition, setcondition] = useState(false);
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
  console.log(route);

  useEffect(() => {
    axiosLink
<<<<<<< HEAD
      .get(`/foods/${route?.id}`)
      .then((res) => {
        // console.log(res);
=======
      .get(`/food/${route?.id}`)
      .then((res) => {
        console.log(res);
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
        setdata(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLink, route?.id]);

<<<<<<< HEAD
  console.log(data);

  const handledelete = (e) => {
=======
  const handleDelete = () => {
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosLink
<<<<<<< HEAD
          .delete(`/food/${data?._id}`)
          .then((res) => {
            console.log(res);
            navigate("/menu");
=======
          .delete(`/delete/${data?._id}`)
          .then((res) => {
            console.log(res);
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
<<<<<<< HEAD
=======

            navigate("/menu");
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
<<<<<<< HEAD
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Food Details</h1>
      <dialog open={condition} className="w-1/2 border-2 -mt-10 border-black z-50">
        <Modal card={data} setcondition={setcondition}></Modal>
      </dialog>
      <div className="flex justify-around ">
        <div>
          <img src={data?.image} className="w-72 " alt="" />
=======
    <section>
      <h1 className="text-3xl text-center font-bold my-1">Food Details</h1>
      <div className="">
        <dialog open={condition} className="w-1/2 border-2 border-black z-50">
            <Modal setcondition={setcondition}></Modal>
        </dialog>
      </div>

      <div className="flex justify-around">
        <div>
          <img src={data?.image} className="w-72 h-72 object-cover" alt="" />
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
        </div>
        <div className="my-auto text-2xl font-semibold">
          <h1>{data?.name}</h1>
          <h1>{data?.price}</h1>
          <h1>{data?.details}</h1>
          <div>
<<<<<<< HEAD
            <button onClick={()=> setcondition(true)} className="btn bg-red-500 text-white mr-5">Update</button>
            <button
              onClick={handledelete}
              className="btn bg-red-500 text-white mr-5"
=======
            <button onClick={()=> setcondition(true)} className="btn bg-red-500 text-white mr-2">Update</button>
            <button
              onClick={handleDelete}
              className="btn bg-red-500 text-white mr-2"
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
            >
              Delete
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </section>
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
  );
};

export default CardDetails;

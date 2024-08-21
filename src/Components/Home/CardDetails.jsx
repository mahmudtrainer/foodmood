import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios, { AxiosSource } from "./useAxios";
import Swal from "sweetalert2";
import Modal from "./Modal";

const CardDetails = () => {
  const route = useParams();
  const navigate = useNavigate();
  const axiosLink = useAxios(AxiosSource);
  const [condition, setcondition] = useState(false);
  const [data, setdata] = useState();
  console.log(route);

  useEffect(() => {
    axiosLink
      .get(`/foods/${route?.id}`)
      .then((res) => {
        // console.log(res);
        setdata(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLink, route?.id]);

  console.log(data);

  const handledelete = (e) => {
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
          .delete(`/food/${data?._id}`)
          .then((res) => {
            console.log(res);
            navigate("/menu");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Food Details</h1>
      <dialog open={condition} className="w-1/2 border-2 -mt-10 border-black z-50">
        <Modal card={data} setcondition={setcondition}></Modal>
      </dialog>
      <div className="flex justify-around ">
        <div>
          <img src={data?.image} className="w-72 " alt="" />
        </div>
        <div className="my-auto text-2xl font-semibold">
          <h1>{data?.name}</h1>
          <h1>{data?.price}</h1>
          <h1>{data?.details}</h1>
          <div>
            <button onClick={()=> setcondition(true)} className="btn bg-red-500 text-white mr-5">Update</button>
            <button
              onClick={handledelete}
              className="btn bg-red-500 text-white mr-5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

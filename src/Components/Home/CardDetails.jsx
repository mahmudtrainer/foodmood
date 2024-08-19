import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios, { AxiosSource } from "./useAxios";
import Swal from "sweetalert2";
import Modal from "./Modal";


const CardDetails = () => {
  const route = useParams();
  const axiosLink = useAxios(AxiosSource);
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [condition, setcondition] = useState(false);
  console.log(route);

  useEffect(() => {
    axiosLink
      .get(`/food/${route?.id}`)
      .then((res) => {
        console.log(res);
        setdata(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosLink, route?.id]);

  const handleDelete = () => {
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
          .delete(`/delete/${data?._id}`)
          .then((res) => {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            navigate("/menu");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
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
        </div>
        <div className="my-auto text-2xl font-semibold">
          <h1>{data?.name}</h1>
          <h1>{data?.price}</h1>
          <h1>{data?.details}</h1>
          <div>
            <button onClick={()=> setcondition(true)} className="btn bg-red-500 text-white mr-2">Update</button>
            <button
              onClick={handleDelete}
              className="btn bg-red-500 text-white mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;

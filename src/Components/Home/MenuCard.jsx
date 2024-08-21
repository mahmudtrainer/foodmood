import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import useAxios, { AxiosSource } from "./useAxios";

const MenuCard = () => {
  // const foods = useLoaderData(null);
  // const [foods, setFoods] = useState([])
  const [orderArray, setOrderArray] = useState([]);
  const [array, setArray] = useState([]);
  const navigate = useNavigate()
  const axiosLink = useAxios(AxiosSource)
=======

const MenuCard = () => {
  // const foods = useLoaderData(null);
  const [orderArray, setOrderArray] = useState([]);
  const [array, setArray] = useState([]);
  const navigate = useNavigate()
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
  // const [pageNum, setpageNum] = useState([])
  let totalPrice = 0;
  const inputRefs = useRef([]);
  const searchRef = useRef();
  // console.log(foods);

<<<<<<< HEAD

=======
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
  useEffect(() => {
    axios.get('http://localhost:3000/foods')
    .then(res=>{
      console.log(res);
<<<<<<< HEAD
      setArray(res?.data)
=======
      if(res?.data){
        setArray(res.data)
      }
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
      
    })
    .catch(err=>{
      console.log(err);
      
    })
  }, []);

  const handleOrder = (index) => {
    const data = inputRefs.current[index]?.value;
    const data1 = inputRefs.current.value;
    console.log(data1);

    const orderList = {
      name: foods[index].name,
      price: foods[index].price,
      quantity: data,
    };
    setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
  };

  if (orderArray.length > 0) {
    const total = orderArray?.reduce((p, c) => p + c?.price * c?.quantity, 0);
    totalPrice = total;
    // console.log(total);
  }

  // if(foods.length >0){
  //   const pageCount = Math.ceil(foods?.length/6)
  //   // for(let i = 1; i<= pageCount ; i++){
  //   //   const a = Array.from(i)
  //   //   console.log(a);
  //   // }
  //   // setpageNum(pageCount)
  //   const length = [...Array(pageCount).keys()]
  //   console.log(...Array(pageCount).keys());
  // }
  const pageCount = Math.ceil(array?.length / 6);
  // for(let i = 1; i<= pageCount ; i++){
  //   const a = Array.from(i)
  //   console.log(a);
  // }
  // setpageNum(pageCount)
  const pageLength = [...Array(pageCount).keys()];

  const handleSort = (e) => {
    console.log(e.target.value);

<<<<<<< HEAD
axiosLink.get(`/sort/${e.target.value}`)
.then(res=>{
  console.log(res);
  setArray(res?.data)
  
})
.catch(err=>{
  console.log(err);
  
})
    

    // if (e.target.value == "lowtohigh") {
    //   const sortArray = foods.sort((a, b) => a.price - b.price);
    //   setArray([...sortArray]);
    //   // console.log(sortArray);
    // }
    // if (e.target.value == "hightolow") {
    //   const sortArray = foods.sort((a, b) => b.price - a.price);
    //   // console.log(sortArray);
    //   setArray([...sortArray]);
    // }
    // if (e.target.value == "Default") {
    //   // console.log(foods);
    //   setArray([...foods]);
    // }
=======
    if (e.target.value == "lowtohigh") {
      const sortArray = foods.sort((a, b) => a.price - b.price);
      setArray([...sortArray]);
      // console.log(sortArray);
    }
    if (e.target.value == "hightolow") {
      const sortArray = foods.sort((a, b) => b.price - a.price);
      // console.log(sortArray);
      setArray([...sortArray]);
    }
    if (e.target.value == "Default") {
      // console.log(foods);
      setArray([...foods]);
    }
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    const search = foods.filter((e, idx) =>
      e.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    console.log(search);
    setArray([...search]);
    if (searchRef.current.value.length < 1) {
      setArray([...foods]);
    }
  };
  console.log(array);

  return (
    <section className="my-10">
      <h1 className="text-3xl font-bold text-center">Menu Card</h1>
      {/* <div>
        <input
          ref={inputRefs}
          type="number"
          name="count"
          className="border-2 px-1 border-black w-10 rounded-lg"
        />
        <button className="btn" onClick={() => handleOrder()}>
          Order
        </button>
      </div> */}
      <div className="flex flex-wrap my-10">
        <div className="lg:w-2/3 w-full">
          <div className="flex justify-center my-5">
            <div id="Input Section" className="w-fit mx-auto">
              <input
                ref={searchRef}
                type="text"
                className="border-2 rounded-xl border-black p-1 "
              />
              <button
                onClick={handleSearch}
                className="btn btn-sm bg-red-500 text-white hover:bg-red-500"
              >
                Search{" "}
              </button>
            </div>
            <div id="dropdown" className="w-fit ml-auto">
              <select
                onClick={handleSort}
                name=""
                id=""
                className="border-2 p-1 border-black"
              >
                <option value="Default">Default</option>
                <option value="lowtohigh">Low To High</option>
                <option value="hightolow"> High to Low</option>
              </select>
              {/* <butto onClick={handleSort} className="btn bg-red-500 text-white hover:bg-red-500 mr-10">Sort(low to High)</butto>
          <butto onClick={handleSort1} className="btn bg-red-500 text-white hover:bg-red-500 mr-10">Sort(High to Low)</butto> */}
            </div>
          </div>

          <div className="flex  flex-wrap gap-10 justify-center">
            {array?.map((e, idx) => (
              <div key={idx} className="border-2 rounded-xl p-2 w-fit">
                <img className="w-56 h-52 object-cover" src={e?.image} alt="" />
                <h1>{e?.name}</h1>
                <p>{e?.price}</p>
                <div>
                  <input
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="number"
                    name="count"
                    className="border-2 px-1 border-black w-10 rounded-lg"
                  />
                  <button className="btn" onClick={() => handleOrder(idx)}>
                    Order
                  </button>
<<<<<<< HEAD
                  <button onClick={()=> navigate((`/menu/${e?._id}`))} className="btn bg-red-500 text-white">Details</button>
=======
                  <button onClick={()=> navigate(`/menu/${e?._id}`)} className="btn bg-red-500 text-white">Details</button>
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163
                </div>
              </div>
            ))}
          </div>
          <div className="w-fit my-5 mx-auto">
            {pageLength.map((e, idx) => (
              <button className="btn me-2" key={idx}>
                {e + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:w-1/4 w-fit mx-auto">
          <h1 className="text-2xl text-center font-semibold underline text-red-500">
            See Your Order List
          </h1>
          <table className="border-2">
            <thead>
              <tr>
                <th className="border-2 border-black px-3">Food Name</th>
                <th className="border-2 border-black px-3">Quantity</th>
                <th className="border-2 border-black px-3">Food Price</th>
                <th className="border-2 border-black px-3">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orderArray.length > 0 &&
                orderArray.map((e, idx) => (
                  <tr key={idx}>
                    <td className="border-2 border-black text-center px-3">
                      {e.name}
                    </td>
                    <td className="border-2 border-black text-center px-3">
                      {e.quantity}
                    </td>
                    <td className="border-2 border-black text-center px-3">
                      {e.price}
                    </td>
                    <td className="border-2 border-black text-center px-3">
                      {e.price * e.quantity}
                    </td>
                  </tr>
                ))}
              <tr>
                <td className="border-2  border-black text-center px-3">
                  Total Price
                </td>
                <td className="border-2 border-black text-center px-3"></td>
                <td className="border-2 border-black text-center px-3"></td>
                <td className="border-2 border-black text-center px-3">
                  {totalPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;

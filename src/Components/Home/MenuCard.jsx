import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MenuCard = () => {
  const foods = useLoaderData(null);
  const [orderArray, setOrderArray] = useState([]);
  // const [pageNum, setpageNum] = useState([])
  let totalPrice = 0
  const inputRefs = useRef([]);

  const handleOrder = (index) => {
    const data = inputRefs.current[index]?.value;
    const data1 = inputRefs.current.value;
    console.log(data1);

    const orderList = { name: foods[index].name, price: foods[index].price, quantity: data };
    setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
  };

  if (orderArray.length > 0) {
    const total = orderArray?.reduce((p, c) => p + (c?.price*c?.quantity),0);
    totalPrice = total
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
  const pageCount = Math.ceil(foods?.length/6)
  // for(let i = 1; i<= pageCount ; i++){
  //   const a = Array.from(i)
  //   console.log(a);
  // }
  // setpageNum(pageCount)
  const pageLength = [...Array(pageCount).keys()]

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
      <div className="flex my-10">
        <div >
         <div className="flex w-2/3 flex-wrap gap-10 justify-center">
         {foods.map((e, idx) => (
            <div key={idx} className="border-2 rounded-xl p-2 w-fit">
              <img className="w-56 h-52 object-cover" src={e?.photo} alt="" />
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
              </div>
            </div>
          ))}
         </div>
          <div className="w-fit my-5 mx-auto">
            {
             pageLength.map((e,idx)=> <button className="btn me-2" key={idx}>{e+1}</button>)
            }
          </div>
        </div>
        <div className="w-1/4">
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
                <td className="border-2 border-black text-center px-3">{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;

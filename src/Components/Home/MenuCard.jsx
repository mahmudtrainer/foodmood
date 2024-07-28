import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MenuCard = () => {
  const foods = useLoaderData(null);
  const [orderArray, setOrderArray] = useState([]);
  const inputRefs = useRef([]);

  const handleOrder = (index) => {
    const data = inputRefs.current[index]?.value;
    console.log(data);

    const orderList = { name: foods[index].name, price: foods[index].price, quantity: data };
    setOrderArray((prevOrderArray) => [...prevOrderArray, orderList]);
  };

  return (
    <section className="my-10">
      <h1 className="text-3xl font-bold text-center">Menu Card</h1>
      <div className="flex my-10">
        <div className="flex w-2/3 flex-wrap gap-10 justify-center">
          {foods.map((e, idx) => (
            <div key={idx} className="border-2 rounded-xl p-2 w-fit">
              <img className="w-56 h-52 object-cover" src={e?.photo} alt="" />
              <h1>{e?.name}</h1>
              <p>{e?.price}</p>
              <div className="flex gap-2 my-4"></div>
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
        <div className="w-1/4">
          <h1 className="text-2xl text-center font-semibold underline text-red-500">
            See Your Order List
          </h1>
          <table className="border-2">
            <thead>
              <tr>
                <th className="px-3">Food Name</th>
                <th className="px-3">Quantity</th>
                <th className="px-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {orderArray.length > 0 &&
                orderArray.map((e, idx) => (
                  <tr key={idx}>
                    <td className="px-3">{e.name}</td>
                    <td className="px-3">{e.quantity}</td>
                    <td className="px-3">{e.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";

function Card() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartaData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartaData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[3fr_1fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_1fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 object-cover"
                  src={productData?.img?.[0] || "default-placeholder.png"}
                  alt={productData?.name || "Product"}
                />
              </div>
              <p className="text-xs sm:text-lg font-medium">
                {productData?.name}
              </p>
              <div className="flex items-center gap-5 mt-2">
                <p>
                  {currency}
                  {productData?.price}
                </p>
                <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                  {item.size}
                </p>
              </div>
              <RiDeleteBin5Line
                onClick={() => updateQuantity(item._id, item.size, 0)}
                size={25}
                className="mr-4 sm:w-5 cursor-pointer"
              />
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border w-16 sm:w-24 px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-2">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

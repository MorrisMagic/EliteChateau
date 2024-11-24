import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
export function ShopContextProvider({ children }) {
  const currency = "£";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [ShowSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});
  const [products, setproductData] = useState([]);
  const [token, settoken] = useState("");

  const navigate = useNavigate();

  const addtoCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let total = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            total += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return total;
  };

  const getCartAmount = () => {
    let totalAmout = 0;
    for (const items in cartItems) {
      let iteminfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmout += iteminfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmout;
  };

  const getProductsData = async () => {
    try {
      const respon = await axios.get("/api/product/list");
      if (respon.data.success) {
        setproductData(respon.data.products);
      } else {
        console.log(respon.data.error);
      }
      console.log(respon.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  useEffect(() => {
    getProductsData();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
    }
  }, []);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    cartItems,
    addtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    token,
    settoken,
    setCartItems,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

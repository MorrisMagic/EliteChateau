import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return <div className="border-t pt-16"></div>;
}

export default Orders;

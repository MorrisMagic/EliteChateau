import { createContext } from "react";
import { products } from "../assets/asstes";

export const ShopContext = createContext();
export function ShopContextProvider({ children }) {
  const currency = "£";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

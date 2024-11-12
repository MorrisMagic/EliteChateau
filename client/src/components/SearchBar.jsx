import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, ShowSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const loction = useLocation();
  useEffect(() => {
    if (loction.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);
  return ShowSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <IoIosSearch />
      </div>
      <RxCross2
        onClick={() => setShowSearch(false)}
        className="inline-flex  cursor-pointer"
        size={16}
      />
    </div>
  ) : null;
}

export default SearchBar;

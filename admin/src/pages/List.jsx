import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function List({ token }) {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const respone = await axios.get("/api/product/list");
      if (respone.data.success) {
        setList(respone.data.products);
      } else {
        toast.error(respone.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const respone = await axios.post(
        "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (respone) {
        toast.success("Product removed ");
        await fetchList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr,3fr,1fr,1fr,1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr,3fr,1fr] md:grid-cols-[1fr,3fr,1fr,1fr,1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={item.img[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>£{item.price}</p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right text-red-500 md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;

import axios from "axios";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function Add({ token }) {
  const sizee = 43;

  const [images1, setimage1] = useState(null);
  const [images2, setimage2] = useState(null);
  const [images3, setimage3] = useState(null);
  const [images4, setimage4] = useState(null);

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("Men");
  const [SubCategory, setsubcategory] = useState("Topwear");
  const [bestseller, setbestseller] = useState(false);
  const [size, setsizes] = useState([]);

  const handleSizeChange = (size) => {
    setsizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("SubCategory", SubCategory);
      formData.append("bestseller", bestseller);

      formData.append("size", JSON.stringify(size));

      images1 && formData.append("images1", images1);
      images2 && formData.append("images2", images2);
      images3 && formData.append("images3", images3);
      images4 && formData.append("images4", images4);

      const response = await axios.post("/api/product/add", formData, {
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setname("");
        setdescription("");
        setprice("");
        setcategory("Men");
        setsubcategory("Topwear");
        setbestseller(false);
        setsizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            {images1 ? (
              <img className="w-20" src={URL.createObjectURL(images1)} alt="" />
            ) : (
              <IoCloudUploadOutline
                className="border border-gray-400 p-1"
                size={sizee}
              />
            )}
            <input
              type="file"
              id="image1"
              hidden
              onChange={(e) => setimage1(e.target.files[0])}
            />
          </label>
          <label htmlFor="image2">
            {images2 ? (
              <img className="w-20" src={URL.createObjectURL(images2)} alt="" />
            ) : (
              <IoCloudUploadOutline
                className="border border-gray-400 p-1"
                size={sizee}
              />
            )}
            <input
              type="file"
              id="image2"
              hidden
              onChange={(e) => setimage2(e.target.files[0])}
            />
          </label>
          <label htmlFor="image3">
            {images3 ? (
              <img className="w-20" src={URL.createObjectURL(images3)} alt="" />
            ) : (
              <IoCloudUploadOutline
                className="border border-gray-400 p-1"
                size={sizee}
              />
            )}
            <input
              type="file"
              id="image3"
              hidden
              onChange={(e) => setimage3(e.target.files[0])}
            />
          </label>
          <label htmlFor="image4">
            {images4 ? (
              <img className="w-20" src={URL.createObjectURL(images4)} alt="" />
            ) : (
              <IoCloudUploadOutline
                className="border border-gray-400 p-1"
                size={sizee}
              />
            )}
            <input
              type="file"
              id="image4"
              hidden
              onChange={(e) => setimage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          type="text"
          placeholder="Type here"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          placeholder="Write content here"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select
            value={SubCategory}
            onChange={(e) => setsubcategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
            <div key={sizeOption}>
              <p
                className={`bg-slate-200 px-3 py-1 cursor-pointer ${
                  size.includes(sizeOption) ? "bg-green-500" : ""
                }`}
                onClick={() => handleSizeChange(sizeOption)}
              >
                {sizeOption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setbestseller((prev) => !prev)}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  );
}

export default Add;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addtoCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [img, setImg] = useState("");
  const [size, setSize] = useState();
  const fetchData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImg(item.img[0]);
        console.log(productData);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [productId, productData, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.img.map((item, index) => (
              <img
                onClick={() => setImg(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={img} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <FaStar size={18} color="#EB522F" />
            <FaStar size={18} color="#EB522F" />
            <FaStar size={18} color="#EB522F" />
            <FaStar size={18} color="#EB522F" />
            <FaStar size={18} color="#DCCACC" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.size.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={() => addtoCart(productData._id, size)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Esay return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Ecommore delivers the latest fashion trends and timeless essentials,
            blending style and quality to elevate every wardrobe.
          </p>
          <p>
            Ecommore is your go-to for curated style, offering a blend of modern
            trends and timeless classics to transform your wardrobe.
          </p>
        </div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.SubCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;

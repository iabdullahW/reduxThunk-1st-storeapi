// src/components/ProductList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsThunk";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  return (
    <div className="p-8 bg-white text-black flex justify-center flex-col h-auto">
      <h2 className=" text-3xl  text-bold flex justify-center ">   Products:</h2>
      <hr className="border-b-2 border-rose-500 "/>
      <ul className="flex flex-col gap-y-3 mt-3">
        {items.map((product) => (
          <li className="border-b-2 border-black " key={product.id}>
            <span className="text-black"> {product.title} -</span>
            <span className="text-indigo-800 font-bold"> ${product.price}</span>
            <br />

            <span className="text-teal-700 font-semibold">{product.description}</span>
           <h1 className="text-blue-700 text-2xl" >Category: <span className="text-blue-700 ">{product.category}</span></h1> 
            <img src={product.image} alt="" width={40} height={40} />
         
            {product.rating && (
              <span className="text-blue-700 font-medium">Rating: {product.rating.rate+" - "+"Product count: "+product.rating.count}</span>
             
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

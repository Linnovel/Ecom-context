import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCart = ({ productsData, handleDeleted }) => {
  const { id, title, images, price } = productsData;

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <figure className="w-20 h-20 ">
            <img
              className="w-full h-full p-1 rounded-lg object-cover"
              src={images}
              alt={title}
            />
          </figure>
          <p className="text-sm font-light ">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold text-sm ">Price: {price}</p>
          {handleDeleted && (
            <XMarkIcon className="size-6 text-black cursor-pointer" />
          )}
        </div>
      </div>
    </>
  );
};

export default OrderCart;

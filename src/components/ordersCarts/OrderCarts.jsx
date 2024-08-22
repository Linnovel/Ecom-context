import React from "react";

const OrderCarts = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <>
      <div className="flex justify-between items-center mb-3 border-black border">
        <p>
          <span>01.02.2012</span>
          <span>{totalProducts}</span>
          <span>{totalPrice}</span>
        </p>
      </div>
    </>
  );
};

export default OrderCarts;

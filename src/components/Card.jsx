import { useContext } from "react";
import { ShoppingCardContext } from "../context/ShoppingCardProvider";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ products }) => {
  const context = useContext(ShoppingCardContext);

  const showProduct = (productInfo) => {
    context.openProductDetail();
    context.setProductShow(productInfo);
  };

  const addProductToCar = (event, productData) => {
    event.stopPropagation();
    context.setCountItems(context.countItems + 1);
    context.openCheckMenu();
    context.setCartProducts([...context.cartProducts, productData]);
  };

  const isProductSelected =
    context.cartProducts.filter((item) => item.id === products.id).length > 0;

  return (
    <>
      <div
        onClick={() => showProduct(products)}
        className="bg-white cursor-pointer shadow-lg w-56 h-60 rounded-lg"
      >
        <figure className="relative mb-2 w-full h-4/5 ">
          <span className="px-3 py-0.5 absolute bottom-0 left-0 text-black text-sm bg-white/60 rounded-lg m-2">
            Electronics
            {products.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg m-1 "
            src={products.images[0]}
            alt={products.description}
          />
          <div
            className="absolute p-1 top-0 right-0 flex justify-center items-center bg-white w-6 m-2 h-6 rounded-full"
            onClick={(event) => addProductToCar(event, products)}
          >
            {isProductSelected ? <CheckIcon /> : <PlusIcon />}
          </div>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light m-2">{products.title}</span>
          <span className="text-lg font-medium">${products.price}</span>
        </p>
      </div>
    </>
  );
};

export default Card;

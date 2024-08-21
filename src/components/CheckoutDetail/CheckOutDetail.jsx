import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../context/ShoppingCardProvider";
import OrderCart from "../OrderCart/OrderCart";
import { totalPrice } from "../utils";
import { Link } from "react-router-dom";

const CheckOutDetail = () => {
  const context = useContext(ShoppingCardContext);

  const handleDeleted = (id) => {
    const filterProduct = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filterProduct);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.32",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <>
      <aside
        className={`${
          context.isCheckMenuOpen ? "flex" : "hidden"
        }  check-menu  flex-col fixed bg-white right-0 border border-black rounded-lg `}
      >
        <div className="flex justify-between items-center p-2">
          <h2 className="font-medium text-xl">My Order</h2>
          <div>
            <XMarkIcon
              onClick={context.closeCheckMenu}
              className="size-6 text-black cursor-pointer"
            />
          </div>
        </div>
        <div className="px-6 overflow-y-scroll ">
          {context.cartProducts.map((product) => (
            <OrderCart
              key={product.id}
              productsData={product}
              handleDeleted={handleDeleted}
              id={product.id}
            />
          ))}
        </div>
        <div className="px-6 mb-6">
          <p className="flex justify-between items-center font-medium m-2">
            <span className="font-medium text-2xl">Total:</span>
            <span>${totalPrice(context.cartProducts)}</span>
          </p>
          <Link to="my-orders/last">
            <button
              className="w-full rounded-md bg-black py-4 text-white "
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default CheckOutDetail;

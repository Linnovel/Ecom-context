import { useContext } from "react";
import Layout from "../../components/Layout";
import OrderCart from "../../components/OrderCart/OrderCart";
import { ShoppingCardContext } from "../../context/ShoppingCardProvider";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const OrderProduc = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      <div className="flex jn justify-center w-80 items-center relative">
        <Link to="orders" className="absolute left-0 ">
          <ChevronLeftIcon className="h-6 w-6 text-black  cursor-pointer" />
          <h1>My Orders</h1>
        </Link>
      </div>
      <div className="px-6 flex flex-col w-80 ">
        {context.order && context.order.length > 0 ? (
          context.order
            .slice(-1)[0]
            .products.map((product) => (
              <OrderCart
                key={product.id}
                productsData={product}
                id={product.id}
              />
            ))
        ) : (
          <p>No hay productos en la orden.</p>
        )}
      </div>
    </Layout>
  );
};

export default OrderProduc;

import { useContext } from "react";
import Layout from "../../components/Layout";
import OrderCart from "../../components/OrderCart/OrderCart";
import { ShoppingCardContext } from "../../context/ShoppingCardProvider";

const OrderProduc = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      OrderProduc
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

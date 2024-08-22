import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import OrderProduct from "../../pages/Orders/OrderProduc";
import { ShoppingCardContext } from "../../context/ShoppingCardProvider";

const MyOrders = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      {context.order.map((orders, index) => (
        <Link key={index} to={`my-orders/last/${orders.id}}`}>
          <OrderProduct propsCart={orders} />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;

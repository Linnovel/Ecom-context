import Navbar from "../components/Navbar";
import IndexAccount from "../pages/Account/IndexAccount";
import HomeProducts from "../pages/Home/HomeProduct";
import NotFound from "../pages/NotFound/NotFound";
import OrderProduc from "../pages/Orders/OrderProduc";
import SignIn from "../pages/SignIn/SignIn";

//Router Dom
import { Routes, Route, Navigate } from "react-router-dom";

const RoutesApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomeProducts />} />
        <Route path="account" element={<IndexAccount />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="notfound" />} />
        <Route path="orders" element={<OrderProduc />} />
        <Route path="my-orders/last" element={<OrderProduc />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default RoutesApp;

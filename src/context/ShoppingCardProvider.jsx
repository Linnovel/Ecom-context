import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

const ShoppingCardProvider = ({ children }) => {
  //shoping cart
  const [countItems, setCountItems] = useState(0);

  //product detail / Open/ Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //product detail - show product
  const [productShow, setProductShow] = useState({});

  //Shoping Card -- Add Products to car
  const [cartProducts, setCartProducts] = useState([]);

  //Check detail / Open / Close
  const [isCheckMenuOpen, setIsCheckMenuOpen] = useState(false);
  const openCheckMenu = () => setIsCheckMenuOpen(true);
  const closeCheckMenu = () => setIsCheckMenuOpen(false);

  //My Orders
  const [order, setOrder] = useState([]);

  return (
    <>
      <ShoppingCardContext.Provider
        value={{
          countItems,
          setCountItems,
          isProductDetailOpen,
          openProductDetail,
          closeProductDetail,
          setProductShow,
          productShow,
          setCartProducts,
          cartProducts,
          isCheckMenuOpen,
          openCheckMenu,
          closeCheckMenu,
          setOrder,
          order,
        }}
      >
        {children}
      </ShoppingCardContext.Provider>
    </>
  );
};

export default ShoppingCardProvider;

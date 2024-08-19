import RoutesApp from "../../routes/RoutesApp";
import ShoppingCardProvider from "../../context/ShoppingCardProvider";
import CheckOutDetail from "../../components/CheckoutDetail/CheckOutDetail";

function App() {
  return (
    <>
      <ShoppingCardProvider>
        <RoutesApp />
        <CheckOutDetail />
      </ShoppingCardProvider>
    </>
  );
}

export default App;

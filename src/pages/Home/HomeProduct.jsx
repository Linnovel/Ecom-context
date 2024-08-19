import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useState, useEffect } from "react";

const HomeProducts = () => {
  const [productImg, setProductImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setProductImg(data);
      } catch (error) {
        console.log("hubo un error", error.status);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {productImg?.map((products) => (
            <Card key={products.id} products={products} />
          ))}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
};

export default HomeProducts;

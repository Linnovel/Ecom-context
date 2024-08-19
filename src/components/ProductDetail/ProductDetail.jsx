import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../context/ShoppingCardProvider";

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);

  return (
    <>
      <aside
        className={`${
          context.isProductDetailOpen ? "flex" : "hidden"
        }  product-detail   flex-col fixed bg-white right-0 border border-black rounded-lg `}
      >
        <div className="flex justify-between items-center p-2">
          <h2 className="font-medium text-xl">Product Detail</h2>
          <div>
            <XMarkIcon
              onClick={context.closeProductDetail}
              className="size-6 text-black cursor-pointer"
            />
          </div>
        </div>
        <figure className="m-2 ">
          <img
            className="w-full h-full rounded-lg"
            src={context.productShow.images}
            alt={context.productShow.title}
          />
        </figure>
        <p className="flex flex-col p-1 m-2 gap-2 font-medium mt-2">
          <span>${context.productShow.price}</span>
          <span>Title:{context.productShow.title}</span>
          <span>Description: {context.productShow.description}</span>
        </p>
      </aside>
    </>
  );
};

export default ProductDetail;

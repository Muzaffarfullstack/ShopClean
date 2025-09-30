import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FaStar } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "sonner";

function ProductDetail({ addtoCart }) {
  const { title } = useParams();
  const { data } = useFetch("/data/db.json");
  const [itemQuantity, setItemQuantity] = useState(1);

  // increase item
  const increaseItem = () => {
    setItemQuantity(itemQuantity + 1);
  };

  // decrease item
  const descreaseItem = () => {
    itemQuantity > 1 && setItemQuantity(itemQuantity - 1);
  };

  // add to wishlist
  const addWishlist = () => {
    toast.success("Added to Wishlist");
  };

  const selectedItem = Array.isArray(data)
    ? data.find((item) => item.title === title)
    : null;

  if (!selectedItem) return "Product not found";

  return (
    <div className="product-wrapper wrapper  max-sm:flex ">
      {/* <Link
        className="inline-flex back-btn relative left-7 cursor-pointer hover:text-blue-500 border border-gray-600"
        to="/"
      >
        <FaArrowLeft className="relative right-3 top-0.5 hover:text-blue-500" />
        Back
      </Link> */}
      <div className=" inner-cart flex max-sm:flex-col max-sm:overflow-hidden max-sm:w-[90] max-sm:relative max-sm:top-10">
        <div className="max-w-xl max-sm:relative max-sm:w-[95%]">
          <img
            src={selectedItem.image}
            alt=""
            className="w-lg rounded-2xl max-sm:w-[80%] max-sm:relative max-sm:left-3"
          />
        </div>
        <div className="second-section max-w-lg max-sm:overflow-x-hidden max-sm:relative max-sm:top-10 max-sm:right-10">
          <h1 className="font-bold text-3xl">{selectedItem.title}</h1>
          <div className="flex item-price">
            <p className=" font-bold text-2xl">${selectedItem.price}</p>
            <p className="rate text-gray-500 flex">
              <FaStar className="text-yellow-400 rate-logo" />{" "}
              {selectedItem.rating}
            </p>
          </div>
          <div className="desc">
            <p className="text-2xl description">Description</p>
            <p className="text-slate-600 text-xl">{selectedItem.description}</p>
          </div>

          <p className="text-2xl font-semibold">Quantity</p>
          <div className="quantity flex  w-28 justify-between">
            <button
              className="border border-gray-500 cursor-pointer w-6 rounded-lg hover:bg-slate-200"
              onClick={() => descreaseItem()}
            >
              &#8722;
            </button>
            <p className="font-bold">{itemQuantity}</p>
            <button
              className="border border-gray-500 cursor-pointer w-6 rounded-lg hover:bg-slate-200"
              onClick={() => increaseItem()}
            >
              &#43;
            </button>
          </div>

          <button
            className="relative border block bg-blue-500 text-neutral-50 rounded-lg cursor-pointer btn w-lg hover:bg-blue-600 max-sm:w-[100%]"
            onClick={() => addtoCart({ ...selectedItem, qty: itemQuantity })}
          >
            <BsCart3 className="absolute left-42 top-1.5 text-xl max-sm:absolute max-sm:left-16" />
            Add to Cart
          </button>
          <button
            className="block border border-gray-500 btn w-lg relative left-0 rounded-lg cursor-pointer max-sm:w-[100%]"
            onClick={addWishlist}
          >
            <CiHeart className="absolute left-42 top-1.5 text-xl max-sm:absolute max-sm:left-16" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

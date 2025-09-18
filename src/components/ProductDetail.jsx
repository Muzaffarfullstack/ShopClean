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
    <div className="product-wrapper wrapper">
      <Link
        className="flex back-btn relative left-7 cursor-pointer hover:text-blue-500"
        to="/"
      >
        <FaArrowLeft className="relative right-3 top-0.5 hover:text-blue-500" />
        Back
      </Link>
      <div className=" inner-cart flex">
        <div className="max-w-xl">
          <img src={selectedItem.image} alt="" className="w-lg rounded-2xl" />
        </div>
        <div className="second-section max-w-lg">
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
            className="relative border block bg-blue-500 text-neutral-50 rounded-lg cursor-pointer btn w-lg hover:bg-blue-600"
            onClick={() => addtoCart({ ...selectedItem, qty: itemQuantity })}
          >
            <BsCart3 className="absolute left-42 top-1.5 text-xl" />
            Add to Cart
          </button>
          <button
            className="block border border-gray-500 btn w-lg relative left-0 rounded-lg cursor-pointer"
            onClick={addWishlist}
          >
            <CiHeart className="absolute left-42 top-1.5 text-xl" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

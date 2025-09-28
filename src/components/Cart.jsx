import { useFetch } from "../hooks/useFetch";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const { data, isLoading, error } = useFetch("/data/db.json");

  return (
    <div>
      <div className="cart-header text-center mt-10">
        <h1 className="text-3xl font-bold max-sm:text-xl">Featured Products</h1>
        <p className="text-xl text-gray-600 max-sm:text-base">
          Carefully curated selection of quality items at great prices.
        </p>
      </div>

      <div className="cart-main">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}

        <div className="cart-container grid grid-cols-4 gap-10 max-sm:flex-col max-sm:flex max-sm:max-w-[630px]">
          {Array.isArray(data) &&
            data.map((item) => {
              return (
                <Link
                  to={`product/${item.title}`}
                  key={item.id}
                  className=" border-0 shadow-lg rounded-xl w-[90%] relative left-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-4xs h-80 object-cover rounded-t-xl max-sm:w-[100%]"
                  />
                  <p className="item-title">{item.title}</p>
                  <div className="flex justify-between item-title">
                    <p className="font-bold">${item.price}</p>
                    <p className="opacity-60 text-sm flex">
                      <FaStar className="text-xs item-rating" />
                      {item.rating}
                    </p>
                  </div>
                  <button className="flex btn cart-btn border-0 bg-blue-500 rounded-xl cursor-pointer relative left-9 text-neutral-100 max-sm:w-[80%] justify-center">
                    <IoCartOutline className="cart-btn-logo text-xl" />
                    Add to Cart
                  </button>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cart;

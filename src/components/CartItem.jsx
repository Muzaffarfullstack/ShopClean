import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";

function CartItem({ items }) {
  console.log(items);

  return (
    <div className="wrap">
      <div className="cartItem-btn flex justify-between">
        <Link className="flex continue rounded-sm text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all">
          <FaArrowLeft className="continue-logo" /> Continue Shopping
        </Link>
        <Link className="border border-gray-500 continue rounded-sm text-gray-500 hover:bg-gray-200 hover:text-red-600 transition-all">
          Clear Cart
        </Link>
      </div>
      <h1 className="text-3xl font-bold quantity">
        Shopping Cart ({items.length} items)
      </h1>

      <div className="cartItem-container">
        <div>
          {items.length === 0 ? (
            <p>No items found</p>
          ) : (
            items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shadow-md w-[70%] h-[120px] cart flex"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="cart-image rounded-md"
                  />
                  <div className="flex flex-col w-[150px] price-title">
                    <p className="text-md font-medium">{item.title}</p>
                    <p className="font-bold">${item.price}</p>
                  </div>

                  <div className="quantity flex  w-28 justify-between">
                    <button className="border w-[30px] h-[30px] rounded-md cursor-pointer">
                      &#8722;
                    </button>
                    <p className="font-bold">{item.qty}</p>
                    <button className="border  w-[30px] h-[30px] rounded-md cursor-pointer">
                      &#43;
                    </button>
                  </div>
                  <div className="flex gap-10 relative left-10 top-7">
                    <p className="font-bold">${item.price}</p>
                    <GoTrash className="relative top-1 cursor-pointer " />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CartItem;

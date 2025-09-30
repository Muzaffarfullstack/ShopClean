import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { BiBox } from "react-icons/bi";

function CartItem({ items, deleteItems, clearCart, decreaseQty, increaseQty }) {
  console.log(items);
  const subtotal = items.reduce((acc, cur) => {
    if (!cur) return acc; // null bo‘lsa o‘tkaz
    return acc + (cur.price || 0) * (cur.qty || 0);
  }, 0);

  const tax = items.reduce((acc, cur) => {
    if (!cur) return acc;
    return acc + 2 * (cur.qty || 0);
  }, 0);

  const totalItems = items.reduce((acc, cur) => {
    if (!cur) return acc;
    return acc + (cur.qty || 0);
  }, 0);

  const total = subtotal + tax;

  return (
    <div className="wrap max-sm:overflow-x-hidden">
      <div className="cartItem-btn flex justify-between max-sm:flex max-sm:justify-around">
        <Link
          className="flex continue rounded-sm text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-blue-600 transition-all"
          to="/"
        >
          <FaArrowLeft className="continue-logo" /> Continue Shopping
        </Link>
        <Link
          className="border border-gray-500 continue rounded-sm text-gray-500 hover:bg-gray-200 hover:text-red-600 transition-all"
          onClick={clearCart}
        >
          Clear Cart
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center h-[400px] relative top-20 ">
          <div className="flex justify-center">
            <BiBox className="text-center relative text-8xl text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-gray-400 relative top-2">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            className="btn bg-blue-500 text-neutral-50 rounded-md relative top-7"
            to="/"
          >
            Start Shooping
          </Link>
        </div>
      ) : (
        <div className="max-sm:max-w-[640px] max-sm:overflow-x-hiddennpm ">
          <h1 className="text-3xl font-bold quantity relative max-sm:left-5">
            Shopping Cart
          </h1>

          <div className="cartItem-container flex justify-between max-sm:flex max-sm:flex-col border border-gray-50">
            <div className="relative flex  max-sm:justify-center max-sm:flex-wrap ">
              {Array.isArray(items) &&
                items.filter(Boolean).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-md max-sm:max-w-[640px] max-sm:w-[95%] h-[120px] cart flex relative rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="cart-image rounded-md max-sm:w-3 max-sm:h-3"
                      />
                      <div className="flex flex-col w-[150px] price-title">
                        <p className="text-md font-medium max-sm:text-base">
                          {item.title}
                        </p>
                        <p className="font-bold max-sm:text-sm">
                          ${item.price}
                        </p>
                      </div>

                      <div className="quantity flex  w-28 justify-between max-sm:gap-1 max-sm:relative max-sm:right-7">
                        <button
                          className="border w-[30px] h-[30px] rounded-md cursor-pointer max-sm:w-[20px] max-sm:h-[20px]"
                          onClick={() => decreaseQty(item.id)}
                        >
                          <p className="max-sm:relative max-sm:bottom-0.5">
                            {" "}
                            &#8722;
                          </p>
                        </button>
                        <p className="font-bold">{item.qty}</p>
                        <button
                          className="border  w-[30px] h-[30px] rounded-md cursor-pointer max-sm:w-[20px] max-sm:h-[20px]"
                          onClick={() => increaseQty(item.id)}
                        >
                          <p className="max-sm:relative max-sm:bottom-0.5">
                            &#43;
                          </p>
                        </button>
                      </div>
                      <div className="flex gap-10 relative left-10 top-7">
                        <p className="font-bold max-sm:hidden">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                        <GoTrash
                          className="relative top-1 cursor-pointer max-sm:relative max-sm:-left-10"
                          onClick={() => deleteItems(item.id)}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="w-[250px] order-summary flex flex-col relative rounded-xl shadow-xl max-sm:w-[95%] max-sm:relative max-sm:left-2.5">
              <h1 className="text-xl font-bold">Order Summary</h1>
              <div className="flex justify-between text-gray-500 subtotal">
                <p>Subtotal ({totalItems} items)</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="text-gray-500 flex justify-between shipping">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="text-gray-500 flex justify-between tax">
                <p>Tax</p>
                <p>$ {tax.toFixed(2)}</p>
              </div>
              <hr className="summary-line text-gray-500" />
              <div className="text-gray-500 flex justify-between final-price">
                <p>Total</p>
                <p>$ {total.toFixed(2)}</p>
              </div>
              <button className="block bg-blue-600 btn text-neutral-50 rounded-md cursor-pointer hover:bg-blue-700">
                Proceed to Checkout
              </button>
              <small className="text-gray-500 fee">
                Free shipping on orders over $50
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;

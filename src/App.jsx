// react-router-dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout imports
import MainLayout from "./layout/MainLayout";

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import ProductDetail from "./components/ProductDetail";
import CartItem from "./components/CartItem";
import Searchbar from "./components/Searchbar";
import { toast } from "sonner";

// react imports
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // increase item in cart
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // clear cart
  const clearCart = (e) => {
    e.preventDefault();
    setCart([]);
  };

  // localstorage section
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add to cart section
  const addtoCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });

    toast.success("Added to Cart");
  };

  // delete item
  const deleteItems = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:title",
          element: <ProductDetail addtoCart={addtoCart} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/cartItem/",
          element: (
            <CartItem
              items={cart}
              deleteItems={deleteItems}
              clearCart={clearCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ),
        },
        {
          path: "/search",
          element: <Searchbar addtoCart={addtoCart} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

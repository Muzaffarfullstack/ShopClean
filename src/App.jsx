// react-router-dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout imports
import MainLayout from "./layout/MainLayout";

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Error from "./pages/Error";
import ProductDetail from "./components/ProductDetail";
import CartItem from "./components/CartItem";
import { toast } from "sonner";

// react imports
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const clearCart = (e) => {
    e.preventDefault();
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addtoCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to Cart");
  };

  const deleteItems = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
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
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

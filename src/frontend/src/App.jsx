import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/Products/ProductPage";
import MainPage from "./Components/Pages/MainPage";
import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

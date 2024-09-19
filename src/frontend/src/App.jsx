import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/Products/ProductPage";
import MainPage from "./Components/Pages/MainPage";
import { useContext } from "react";

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
        element: <div>Cart</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

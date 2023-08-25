import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Sale from "./components/Sale";
import ShopItem from "./components/ShopItem";
import { ShopContextProvider } from "./management/context";
import Brand from "./components/Brand";

import Brandshop from "./components/Brandshop";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Home1 from "./components/Home1";
import ProtectedRoute from "./auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home1",
    element: <Home1 />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/shopItem/:id",
    element: <ShopItem />,
  },
  // {
  //   path: "/brands",
  //   element: (
  //     <ProtectedRoute>
  //       <Brand />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/brands",
    element: <Brand />,
  },
  {
    path: "/brandshop/:brand",
    element: <Brandshop />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  </React.StrictMode>
);

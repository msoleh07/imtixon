import React from "react";
import Home from "./pages/home/Home";
import SinglePage from "./components/singlePage/SinglePage";
import Cart from "./components/cart/Cart";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Admin from "./pages/admin/Admin";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/single-page/:id" element={<SinglePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
    </Route>
  )
);

function Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;

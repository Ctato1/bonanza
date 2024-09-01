import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Products = lazy(() => import("../pages/Products"));
const Category = lazy(() => import("../pages/Category"));
const Product = lazy(() => import("../pages/Product"));

const Routers = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Routes>
        <Route index element={<Navigate to="products"/>} />
        <Route path="products" element={<Products />}/>
        <Route path="products/:category" element={<Category />}/>
        <Route path="products/:category/:id" element={<Product />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;

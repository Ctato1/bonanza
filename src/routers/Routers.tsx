import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Category = lazy(() => import("../pages/Category"));
const Product = lazy(() => import("../pages/Product"));

const Routers = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}/>
        <Route path="products/:category" element={<Category />}/>
        <Route path="products/:category/:id" element={<Product />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;

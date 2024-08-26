import { Navigate, Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/NotFound";

import Layout from "./Layout/Layout";

function App() {
  return (

        <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="./products" />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </Layout>

  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import FullProduct from "./components/FullProduct";
import Header from "./components/Header";
import Create from "./components/Create";
import LikeProducts from "./components/LikeProducts";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes >
        <Route index element={<Products />} />
        <Route path="/liked" element={<LikeProducts />} />
        <Route path="/create-product" element={<Create />} />
        <Route path="/:id" element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

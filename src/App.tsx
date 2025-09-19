import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";
import FlashSale from "./pages/FlashSale";
import ProductDetails from "./pages/ProductDetails";
import { Wishlist } from "./pages/Wishlist";
import { Transaction } from "./pages/Transaction";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/flash-sale" element={<FlashSale />}/>
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/transaction" element={<Transaction />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App

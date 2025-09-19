import { Footer } from "../components/Footer"
import { Header } from "../components/Header";
import { WishlistCards } from "../components/WishlistCards";
export const Wishlist = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col mx-6 flex-grow">
        <Header />
        <WishlistCards />
      </div>
      <Footer page="wishlist" />
    </div>
  )
}

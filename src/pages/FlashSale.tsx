import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { ProductCard } from "../components/ProductCard"
import { Products } from "../components/data/products"
import { Footer } from "../components/Footer"

export default function FlashSale() {
  return (
    <>
      <div className="space-y-4 mx-6">
        <Header />
        <div className="text-forground-primary text-xl font-semibold">
          Flash Sale
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Products.map((i) => (
            <Link to={`/products/${i.id}`} key={i.id} className="w-full shrink-0">
              <ProductCard {...i} />
            </Link>
          ))}
        </div>
      </div>  
      <Footer page="home" />
    </>
  )
}

import { Categories } from "../components/Categories"
import { HomeFlashSale } from "../components/HomeFlashSale"
import { FlashSaleOffer } from "../components/FlashSaleOffer"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='space-y-5 mx-6 flex-grow'>
        <Header />
        <SearchBar />
        <Categories />
        <FlashSaleOffer />
        <HomeFlashSale />
      </div>
      <Footer page="home" />
    </div>
  )
}

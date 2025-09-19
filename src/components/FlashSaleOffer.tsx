import { useNavigate } from "react-router-dom"

export const FlashSaleOffer = () => {
  const navigate = useNavigate()
  return (
    <div className="relative mx-auto bg-black h-40 rounded-2xl bg-[url(background.webp)] bg-cover bg-center">
      <img
        src="products/product-1.webp"
        alt="Flash Sale" 
        className="w-1/2 h-full ml-auto object-cover"/>
      <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-center gap-3 ml-4 text-forground-secondary">
        <span className="text-lg">
          6.6 Flash Sale 
        </span>
        <span className="text-sm">
          Cashback Up to 100%
        </span>
        <button className="self-start bg-btn-primary px-5 py-1 rounded-lg"
        onClick={() => navigate('/products/1')}>
          Shop Now 
        </button>
      </div>
    </div>
  )
}

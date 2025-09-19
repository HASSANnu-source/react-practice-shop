import { useParams, useNavigate } from "react-router-dom"
import { Products } from "../components/data/products"
import { Share2, Heart, ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useWishlist } from "../components/context/WishlistContext"
import { useCart } from "../components/context/CartContext"

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const product = Products.find(p => p.id === Number(id))
  const navigate = useNavigate()

  if (!product) {
    return <div className="p-6">Product not found</div>
  }

  const [activeImg, setActiveImg] = useState(0)
  const [showFullDesc, setShowFullDesc] = useState(false)
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);
  const { cart ,addToCart } = useCart()
  const IsInCart = cart.some(c => c.id === product.id);
  const finalPrice = product.discount
                ? product.price - (product.price * product.discount) / 100
                : product.price
  const prev = () => {
    if (activeImg > 0) {
      setActiveImg(activeImg - 1)
    }
  }

  const next = () => {
    if (activeImg < product.img.length - 1) {
      setActiveImg(activeImg + 1)
    }
  }

  return (
    <>
      <div className="flex flex-col mx-6">
        {/* Header */}
        <div className="flex w-full items-center justify-between py-6">
          <button 
              className="p-2 rounded-full border-1 border-border-primary"
              onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4" />
            </button>
          <span className="text-xl font-semibold">
            Product Detail
          </span>
          <Share2 className="w-5 h-5" />
        </div>

        {/* Main image with navigation */}
        <div className="relative flex justify-center items-center w-full p-6">
          <button
            onClick={prev}
            disabled={activeImg === 0}
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full disabled:hidden"
          >
            <ArrowLeft />
          </button>
          <img
            src={product.img[activeImg]}
            alt={product.title}
            className="w-80 h-80 object-cover rounded-xl shadow-md transition-all duration-1000"
          />
          <button
            onClick={next}
            disabled={activeImg === product.img.length - 1}
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full disabled:hidden"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Img footer */}
        <div className="relative flex justify-center w-full items-center mb-6">
          <div className="flex gap-3 justify-center">
            {product.img.map((_, i) => (
              <span
                key={i}
                className={`w-15 h-1.5 rounded-lg cursor-pointer ${
                  activeImg === i ? "bg-btn-primary" : "bg-border-primary"
                }`}
                onClick={() => setActiveImg(i)}
              ></span>
            ))}
          </div>
          <div className="absolute right-0 px-3 py-1 rounded-2xl bg-btn-primary/20 text-btn-primary text-sm">
            {activeImg + 1}/{product.img.length}
          </div>
        </div>

        {/* Info */}
        <div className="relative flex flex-col">
          <div 
            className="absolute right-0"> 
            <Heart 
              className={`cursor-pointer ${liked ? "fill-red-500 text-red-500" : ""}`}
              onClick={() => toggleWishlist(product)} 
              />
          </div>
          <h1 className="text-lg">
            {product.title}
          </h1>
          {product.discount > 0 ? (
            <>
              <div className="flex items-center gap-2">
                <div className="font-bold text-forground-primary text-xl">
                  ${finalPrice}
                </div>
                <div className="text-btn-primary bg-btn-primary/20 py-0.5 px-2 rounded-xl text-xs font-semibold">
                  {product.discount}% off
                </div>
              </div>
              
              <div className="line-through text-gray-400">
                ${product.price}
              </div>
            </>
          ) : (
            <span className="font-bold text-forground-primary text-lg">
              ${product.price}
            </span>
          )}
          {/* Description */}
          <div className="mt-5">
            <p className="font-semibold">Product Description</p>
            <p className="text-forground-light">
              {showFullDesc
                ? product.description
                : `${product.description.substring(0, 130)}`}
              <button
                className="text-btn-primary"
                onClick={() => setShowFullDesc(!showFullDesc)}
              >
                {showFullDesc ? "...Read less" : "...Read more"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-forground-secondary flex justify-center gap-4 p-4">
          <button className={`flex justify-center gap-1 text-btn-primary font-semibold w-full py-3 border border-btn-primary rounded-xl ${IsInCart && "bg-gray-300"}`}
            onClick={() => {IsInCart ? navigate('/cart') : addToCart(product)}}>
            <ShoppingBag />
            {IsInCart ? "See in cart" :"Add to cart"}
          </button>
          <button className="bg-btn-primary text-forground-secondary font-semibold w-full py-3 rounded-xl">
            Checkout
          </button>
      </div>
    </>
  )
}

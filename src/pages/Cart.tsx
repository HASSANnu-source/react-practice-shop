import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../components/context/CartContext"
import { ArrowLeft, Heart, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useWishlist } from "../components/context/WishlistContext"

export const Cart = () => {
  const { cart, addToCart, decreaseQuantity } = useCart()
  const { isInWishlist, toggleWishlist } = useWishlist(); 
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const navigate = useNavigate()
  const toggleSelect = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }
  const selectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(cart.map(item => item.id))
    }
  }

  const totalPrice = cart
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => {
      const finalPrice = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price
      return sum + finalPrice * item.quantity
    }, 0)

    return (
    <div className="flex flex-col mx-5 min-h-screen">
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-center justify-center relative w-full pt-6 pb-2 text-center font-bold text-lg">
          <div className="text-xl">
            My Cart
          </div>
          <button 
            className="absolute left-0 p-2 rounded-full border-1 border-border-primary"
            onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow px-4 py-3 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              Your cart is empty
            </div>
          ) : (
            cart.map(item => {
              const finalPrice = item.discount
                ? item.price - (item.price * item.discount) / 100
                : item.price
              const liked = isInWishlist(item.id);
              return (
                <div
                  key={item.id}
                  className="relative flex items-start p-3 border border-border-primary rounded-xl"
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="accent-btn-primary"
                  />

                  {/* Image */}
                  <Link to={`/products/${item.id}`} className="self-center">
                    <img
                      src={item.img[0]}
                      alt={item.title}
                      className="w-35 object-cover"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex flex-col gap-0.5 flex-1">
                    <h2 className="font-semibold text-forground-light text-sm">
                      {item.title}
                    </h2>

                    {/* Price + discount */}
                    <div className="flex flex-col gap-0.5">
                      {item.discount > 0 ? (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="font-bold text-forground-primary text-lg">
                              ${finalPrice}
                            </div>
                            <div className="text-btn-primary bg-btn-primary/20 py-0.5 px-2 rounded-xl text-xs font-semibold">
                              {item.discount}% off
                            </div>
                          </div>
                          
                          <div className="line-through text-gray-400 text-sm">
                            ${item.price}
                          </div>
                        </>
                      ) : (
                        <span className="font-bold text-forground-primary text-lg">
                          ${item.price}
                        </span>
                      )}
                      <button
                        onClick={() => toggleWishlist(item)}>
                        <Heart
                          className={`${liked ? "fill-btn-primary text-btn-primary" : "text-forground-light stroke-[1.5px]"}`}
                        />
                      </button>
                    </div>

                    {/* Quantity controls */}
                  </div>
                    <div className="absolute right-3 flex self-end items-center gap-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="quantity-btn"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="quantity-btn"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                </div>
              )
            })
          )}
        </div>
      </div>
        {/* Checkout bar */}
        {cart.length > 0 ? (
          <div className="px-4 py-3 border-t border-border-primary bg-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedItems.length === cart.length}
                  onChange={selectAll}
                  className="accent-btn-primary"
                />
                <span className="text-sm">Select All</span>
              </div>
              <span className="font-bold">Total: ${totalPrice}</span>
            </div>
            <button className="w-full py-3 bg-btn-primary text-white rounded-xl font-semibold">
              Checkout
            </button>
          </div>
        ) : (
          <Link to={'/'} className="text-center w-full py-3 mb-5 bg-btn-primary text-white rounded-xl font-semibold">
            Return To Home Page
          </Link>
        )}
    </div>
  )
}

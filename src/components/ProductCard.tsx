import { Star } from "lucide-react"
import type { Product } from "./data/products"

export const ProductCard = (item: Product) => {
  const finalPrice = item.discount
    ? item.price - (item.price * item.discount) / 100
    : item.price

  return (
    <div className="relative flex flex-col w-full rounded-2xl p-3 border-1 border-border-primary">
      {/* Product Image */}
      <img
        src={item.img[0]}
        alt="product"
        className="object-cover object-center"
      />

      {/* Title */}
      <div className="mt-2 font-medium">{item.title}</div>

      {/* Price Section */}
      <div className="flex flex-col">
        <div className="text-xl font-semibold">${finalPrice}</div>
        {/* همیشه این div باشه تا ارتفاع ثابت بمونه */}
        <div className="h-5">
          {item.discount > 0 && (
            <span className="line-through text-gray-400 text-sm">
              ${item.price}
            </span>
          )}
        </div>
      </div>

      {/* Discount Badge */}
      {item.discount > 0 && (
        <div className="absolute right-3 top-3 px-2 py-1 rounded-2xl bg-btn-primary/20 text-btn-primary text-xs">
          {item.discount}% off
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm mt-2">
        <Star className="w-5 fill-amber-400 text-amber-400" />
        • {item.rating}
      </div>
    </div>
  )
}

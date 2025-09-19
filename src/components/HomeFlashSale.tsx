import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { ArrowBigRight, ArrowBigLeft } from "lucide-react"
import { Products } from "./data/products"
import { Link } from "react-router-dom"

export const HomeFlashSale = () => {
  const [index, setIndex] = useState(0)
  const visibleCards = 2.3

  const next = () => {
    if (index < Products.length - visibleCards) {
      setIndex(index + 1.5)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1.5)
    }
  }

  return (
    <div className="mb-40 relative">
      {/* Header */}
      <div className="flex justify-between items-center mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">Flash Sale</span>
          <span className="text-xs text-forground-light">Ends in</span>
          <div className="bg-red-500 text-forground-secondary rounded-2xl py-1 px-3 text-xs">
            12 : 56 : 32
          </div>
        </div>
        <Link to={"/flash-sale"} className="text-btn-primary font-semibold">see all</Link>
      </div>

      {/* Cards */}
      <div className="relative flex items-center mt-3">
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-0 z-1 p-2 bg-gray-200 rounded-full disabled:hidden"
        >
          <ArrowBigLeft />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
          >
            {Products.map((i) => (
              <Link className="w-4/9 shrink-0" key={i.id} to={`/products/${i.id}`}>
                <ProductCard {...i} />
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={index >= Products.length - visibleCards}
          className="absolute right-0 z-1 p-2 bg-gray-200 rounded-full disabled:hidden"
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  )
}

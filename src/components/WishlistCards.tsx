import { Link } from "react-router-dom";
import { useWishlist } from "./context/WishlistContext"; 
import { Heart } from "lucide-react";

export const WishlistCards = () => {
  const { wishlist, toggleWishlist } = useWishlist(); 
  if (!wishlist.length) {
    return <div className="text-center py-6">Wishlist is empty</div>;
  }

  return (
    <div className="flex flex-col gap-y-5 py-6">
      {wishlist.map((item) => {
        const finalPrice = item.discount
              ? item.price - (item.price * item.discount) / 100
              : item.price
          return (
          <div
            key={item.id}
            className="w-full flex gap-2 border-1 border-border-primary rounded-2xl shadow-md"
          >
            <Link to={`/products/${item.id}`}>
              <img
                src={item.img[0]}
                alt={item.title}
                className="h-35 rounded-lg"
              />
            </Link>
            <div className="my-2 space-y-0.5">
              <div className="text-forground-light/80 font-semibold">
                {item.title}
              </div>
              {item.discount > 0 ? (
                <>
                  <div className="flex gap-2">
                    <div className="font-bold text-forground-primary">
                      ${finalPrice}
                    </div>
                  <div className="px-2 py-1 rounded-2xl bg-btn-primary/20 text-btn-primary text-xs">
                    {item.discount}% off
                  </div>
                  </div>
                  <div className="line-through text-gray-400 text-sm">
                    ${item.price}
                  </div>
                </>
              ) : (
                <div className="font-bold text-forground-primary">
                  ${item.price}
                </div>
              )}
              <div
                className="flex cursor-pointer items-center gap-1"
                onClick={() => toggleWishlist(item)} 
                >
                <Heart
                  className="fill-btn-primary text-btn-primary"
                />
                <span className="text-xs underline text-btn-primary">remove</span>
              </div>
            </div>
          </div>
      )})}
      
    </div>
  );
};

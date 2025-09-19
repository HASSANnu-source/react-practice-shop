import { Bell, Target, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

export const Header = () => {
  const { cartCount } = useCart()
  return (
    <div>
      <div className="flex justify-between items-center pt-6 ">
        <Link to={'/'} className="flex items-center gap-2 text-2xl font-bold">
          <Target className="w-7 h-7"/> Luxeshop
        </Link>
        <div className='flex gap-5'>
          <Link to={'/cart'} className={`relative h-full p-2 rounded-xl border-2 ${cartCount > 0 ? "text-forground-light border-forground-light" : "text-border-primary border-border-primary"}`}>
            <ShoppingBag className="w-5 h-5"/>
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
          </Link>
          <div className='h-full p-2 rounded-xl border-2 text-border-primary border-border-primary'>
            <Bell className="w-5 h-5"/>
          </div>
        </div>
      </div>
    </div>
  )
}

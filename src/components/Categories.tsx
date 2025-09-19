import { 
  Monitor, Utensils, Watch, Sparkles, Sofa, Shirt, HeartPulse, PenTool 
} from 'lucide-react';

export const Categories = () => {
  return (
    <div className="grid grid-cols-4 mt-3 space-y-3 text-center">
      <div className='categories'>
        <div className='category-item '>
          <Monitor className="w-6 h-6" />
        </div>
        Electronic
      </div>

      <div className='categories'>
        <div className='category-item'>
          <Utensils className="w-6 h-6" />
        </div>
        Food & Drink
      </div>

      <div className='categories'>
        <div className='category-item'>
          <Watch className="w-6 h-6" />
        </div>
        Accessories
      </div>

      <div className='categories'>
        <div className='category-item'>
          <Sparkles className="w-6 h-6" />
        </div>
        Beauty
      </div>

      <div className='categories'>
        <div className='category-item'>
          <Sofa className="w-6 h-6" />
        </div>
        Furniture
      </div>

      <div className='categories'>
        <div className='category-item'>
          <Shirt className="w-6 h-6" />
        </div>
        Fashion
      </div>

      <div className='categories'>
        <div className='category-item'>
          <HeartPulse className="w-6 h-6" />
        </div>
        Health
      </div>

      <div className='categories'>
        <div className='category-item'>
          <PenTool className="w-6 h-6" />
        </div>
        Stationery
      </div>
    </div>
  );
};

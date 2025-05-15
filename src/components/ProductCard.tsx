
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  ingredients?: string[];
}

export default function ProductCard({ id, name, description, price, image, isNew, ingredients }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transform transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-tapiola-green text-white">
            Новинка
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-montserrat font-semibold text-lg text-tapiola-gray-dark mb-2">{name}</h3>
        <p className="text-tapiola-brown text-sm mb-3 line-clamp-2">{description}</p>
        
        {ingredients && (
          <div className="mb-3">
            <p className="text-xs text-tapiola-gray-dark font-medium mb-1">Состав:</p>
            <div className="flex flex-wrap gap-1">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-tapiola-cream text-tapiola-brown text-xs px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
              {ingredients.length > 3 && (
                <span className="inline-block text-tapiola-brown text-xs px-2 py-1">
                  +{ingredients.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-tapiola-green-dark font-medium">{price} ₽</span>
          <Button className="bg-tapiola-green-dark hover:bg-tapiola-green text-white">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
}

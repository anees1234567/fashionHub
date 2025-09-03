import { Favorite, FavoriteBorder } from '@mui/icons-material';
import React, { useState } from 'react';

interface ProductCardProps {
  imageUrl: string; 
  name: string;   
  cateogory:string,
  price: number;  
  rating: number;  
  ratingCount: number; 
}


const ProductCard = ({
  imageUrl,
  name,
  cateogory,
  price,
  rating,
  ratingCount,
}:ProductCardProps) => {
    const [liked, setLiked] = useState(false);
 return (
    <div className="w-72  rounded-xl shadow-lg overflow-hidden flex flex-col bg-gray-50">
      <div className="relative h-56 overflow-hidden bg-pink-50">
        <img src={imageUrl} alt={name} className="w-full h-full object-contain" />
        <div
          className="absolute top-2 right-2 text-blue-600 cursor-pointer"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <Favorite className="text-red-500 text-2xl" />
          ) : (
            <FavoriteBorder className=" text-2xl" />
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{cateogory}</p>
            <div className="flex items-center mt-1">
              <span className="text-yellow-400">
                {'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}
              </span>
              <span className="text-sm text-gray-600 ml-1">({ratingCount})</span>
            </div>
          </div>
          <div className="text-lg font-bold text-blue-800">₹{price.toFixed(2)}</div>
        </div>
      </div>
      <div className="p-4 flex gap-2">
        <button className="bg-blue-950 text-white rounded-xl font-semibold h-12 text-base flex-1 hover:bg-blue-700 transition">
          Add To Cart
        </button>
        <button className="bg-white  border-2 border-gray-500 h-12 rounded-xl font-semibold text-sm flex-1 hover:bg-blue-50 transition">
          Add Shortlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
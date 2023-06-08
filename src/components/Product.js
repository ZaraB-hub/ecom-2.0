'use client'
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlistSlice';
import { addToBag } from '@/redux/bagSlice';


const Overlay = ({ text,onClick }) => {
  return (
    <div className="overlay">
      <div onClick={onClick} className="overlay flex items-center justify-center btn pink_button border-2 border-black text-white font-bold text-sm uppercase cursor-pointer">
        <img src="/assets/icons/iconbag.svg" alt="" className="pe-2" />
        {text}
      </div>
    </div>
  );
};

const ProductComponent = ({ id, name = 'Product Name', price = '$128' }) => {
  const [isFilled, setIsFilled] = useState(false);
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(addToBag({ id, name, price }));
  };

  const handleHeartClick = () => {
    setIsFilled(!isFilled);
    if (isFilled) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, name, price }));
    }
  };

  return (
    <div className="product">
      <div className={`rectangle hidden flex items-center px-1 py-1`} onClick={handleHeartClick}>
        {isFilled ? (
          <img src="/assets/icons/heartfill.svg" alt="" className="cursor-pointer" />
        ) : (
          <img src="/assets/icons/heart.svg" alt="" className="cursor-pointer" />
        )}
      </div>
      <div className="img">
        <img src="/assets/images/blush.webp" alt="product photo" />
        <Overlay text="Quick Buy" onClick={handleBuy} />
      </div>
      <Link href={`/product/${name}`}>
        <div className="py-3 px-4 bg-white">
          <h2 id="product_name" className="mb-1">
            {name}
          </h2>
          <p id="price">{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductComponent;

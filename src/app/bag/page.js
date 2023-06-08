 "use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBag, removeFromBag, decreaseQuantity } from '@/redux/bagSlice'; // Replace with the correct path to your bagslice file
import PriceComponent from '@/components/PriceComponent';
import '@/styles/bag.css';
import Link from 'next/link';

export default function Bag() {
  const bag = useSelector(state => state.bag.bag);
  const subtotal = bag.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );
  const dispatch = useDispatch();

  const increase = (name, price) => {
    dispatch(addToBag({ name, price }));
  };

  const decrease = (name, price) => {
    dispatch(decreaseQuantity({ name, price }));
  };

  const removeAll = (name, price) => {
    dispatch(removeFromBag({ name, price }));
  };

  return (
    <>
      <div className="title text-center p-9">Your Bag</div>
      <div className="w-full flex  flex-col md:flex-row">
        <div className="w-8/12 items-center">
          {bag.length > 0 ? (
            bag.map((item, index) => (
              <PriceComponent
                key={index}
                name={item.name}
                price={item.price}
                items={bag}
                reduce={decrease}
                increase={increase}
                quantity={item.quantity}
                removeAll={removeAll}
              />
            ))
          ) : (
            <p className="ps-72 ms-64 mb-11">Your bag is empty.</p>
          )}
        </div>
        {bag.length > 0 && (
          <div className="flex justify-center pb-10">
            <div className="bg-white order_summary flex flex-col justify-center items-center p-8 h-64">
              <div className="order_text">
                <div className="order_title pb-2">Order summary</div>
                <p className="order_subtext line_color pb-4">
                  Shipping and taxes are calculated at checkout. Discount codes can be applied at checkout.
                </p>
              </div>
              <div className="order_info p-4">
                <div className="order_price flex justify-between pb-4 px-4">
                  <div className="subtotal">SUBTOTAL</div>
                  <div id="order_price">${subtotal.toFixed(2)}</div>
                </div>
                <Link href="/shipping">
                  <button className="btn pink_button border-2 border-black text-white p-2 px-10 font-bold text-base w-80">
                    CHECKOUT NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

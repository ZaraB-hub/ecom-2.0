"use client"
import React, { useState } from 'react';
import '@/styles/price_comp.css';
import '@/styles/bag.css';
import { bag as initial } from '@/utils/data';
import { useEffect } from 'react';

const PriceComponent = ({ name, price, quantity, reduce, increase, removeAll }) => {

    // const [localQuantity, setLocalQuantity] = useState(quantity);

    const handleIncrease = () => {
        // setLocalQuantity((prevQuantity) => prevQuantity + 1);
        increase(name, price);
    };

    const handleDecrease = () => {
        // if (localQuantity > 1) {
        //     setLocalQuantity((prevQuantity) => prevQuantity - 1);
            reduce(name, price);
        
    };

    const handleRemoveAll = () => {
        removeAll(name, price);
    };

    return (
        <div className="mx-10 mb-10">
            <div className="price_comp_size flex pb-5 line_color">
                <img src="/assets/images/blush.webp" alt="" id="cab" />
                <div className="flex flex-col justify-between pro_text">
                    <div>
                        <h2 id="product_name" className="mb-1">
                            {name}
                        </h2>
                        <p id="price">{price}</p>
                    </div>
                    <div className="flex  flex-col md:flex-row">
                        <div className="flex bg-white justify-around">
                            <img
                                src="/assets/icons/minus.svg"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => handleDecrease()}
                            />
                            <div className="border-l border-r px-5">{quantity}</div>
                            <img
                                src="/assets/icons/plus.svg"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => handleIncrease()}
                            />
                        </div>
                        <p className="ps-11 cursor-pointer" onClick={() => handleRemoveAll()}>
                            REMOVE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceComponent;

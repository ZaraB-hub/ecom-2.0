import React from 'react';
import '@/styles/price_comp.css'
import '@/styles/bag.css'

const ShippingComponent = ({ name = 'Product Name', price = '$128', quantity }) => {
    return (
        <div className='w-77'>
            <div className='price_comp_size flex pb-5  line_color'>
                <img src="/assets/images/blush.webp" alt="" id='sap' />
                <div className='flex flex-col justify-between pro_text '>
                    <div className="flex flex-col">
                        <div className='flex items-baseline gap_30'>
                            <h2 id='product_name' className='mb-1'>{name}</h2>
                            <p id='price '>{price}</p>
                        </div>
                        <p id='price '>Quantity: {quantity}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShippingComponent;

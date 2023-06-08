"use client"
import PinkButton from '@/components/PinkButton'
import PriceComponent from '@/components/PriceComponent'
import '@/styles/payment.css'
import Link from "next/link";
import '@/styles/shipping.css'
import '@/styles/bag.css'
import ShippingComponent from '@/components/ShippingComponent'
import { euroCountries } from '@/utils/data';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';


export default function Shipping() {

    const [country, setCountry] = useState('');
    const [formData, setFormData] = useState({ name: "", lastname: "", address: "", city: "" });
    const bag = useSelector(state => state.bag.bag);

    const handleSubmit = (event) => {

        router.push('/payment');
    };


    const calculateSubtotal = () => {
        const subtotal = bag.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
        return subtotal.toFixed(2);
    };

    const calculateShipping = () => {
        const shipping = (Math.random() * 25 + 5).toFixed(2);
        return shipping;
    };

    const shiping = calculateShipping();

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const shipping = parseFloat(shiping);
        const total = (subtotal + shipping).toFixed(2);
        return total
    };
    return (

        <div className="flex  flex-col md:flex-row ">
            <div className="w-1/2">
                <div className="card flex flex-col ms-24">
                    <div className="card-title pb-7 pt-12 text-start">Shipping Information</div>
                    <div className="card-fields">
                        <form className='pb-14' onSubmit={handleSubmit}>

                            <div className="flex  justify-between ">
                                <div className='flex flex-col pb-3'>
                                    <label htmlFor="expiryDate" className='input_text'>First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your first name"
                                        value={formData.name}

                                        required
                                        className='p-1'

                                    />
                                </div>
                                <div className='flex flex-col pb-3 '>
                                    <label htmlFor="cvv" className='input_text'>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter your last name"
                                        required
                                        value={formData.lastname}


                                        className='p-1'

                                    />
                                </div>
                            </div>

                            <div className="flex flex-col pb-3">
                                <label htmlFor="country" className="input_text">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    required
                                    className='p-1'
                                    value={country}
                                    onChange={(e) => handleInputChange(e, 'country')}
                                >
                                    <option value="">Select your country</option>
                                    {euroCountries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardHolderName" className='input_text'>Adress</label>
                                <input
                                    type="text flex-col"
                                    id="cardHolderName"
                                    placeholder="Enter address"
                                    required
                                    value={formData.address}

                                    className='p-1'
                                />
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="cardHolderName" className='input_text'>City</label>
                                <input
                                    type="text flex-col"
                                    id="cardHolderName"
                                    placeholder="Enter city"
                                    value={formData.city}

                                    required
                                    className='p-1'

                                />
                            </div>

                            <div className='flex flex-col pb-3'>
                                <label htmlFor="phone" className='input_text'>Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Enter phone number"
                                    required
                                    className='p-1'

                                />
                            </div>
                            <Link href="/payment"><button type='submit' className=" mx-24 mt-10 btn pink_button border-2 border-black text-white p-2 px-10 font-bold text-base w-80 uppercase">continue to payment</button></Link>
                            <Link href="/bag">
                                <p className="return pt-6 mx-22	pb-6 text-center">return to cart</p>
                            </Link>
                        </form>


                    </div>
                </div>



            </div>
            <div className="w-1/2 flex flex-col items-end pt-10">
                <div className="w_77 flex flex-col">
                    {
                        bag.map((item, index) => (
                            <ShippingComponent
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))
                    }</div>
                <div className="totals flex flex-col line_color w_77 pb-10 pt-10">
                    <div className="flex justify-between me-4">
                        <div id='price'> subtotal</div>
                        <div id='price'>$ {calculateSubtotal()}</div>
                    </div>
                    <div className="flex justify-between me-4">
                        <div id='price'>shipping</div>
                        <div id='price'>$ {shiping}</div>
                    </div>
                </div>
                <div className="w_77">
                    <div className="total_all flex justify-between  pb-5 pt-6 mb-3 me-4">
                        <div id='product_name'>total</div>
                        <div id='product_name'>${calculateTotal()}</div>
                    </div>
                </div>
            </div>

        </div>



    )
}

"use client"
// import ProductComponent from "@/components/Product";
// import '@/styles/productpage.css'
// import { wishlist as initialState } from "@/utils/data";
// import { useState } from "react";
// import { useEffect } from "react";


// export default function Wishlist() {

//     const [wishlist, setWishlist] = useState(initialState);
//     const handleToggleWishlist = (name, isFilled) => {
//         if (isFilled) {
//           setWishlist(prevWishlist => prevWishlist.filter(item => item.name !== name));
//         } else {
//           const selectedItem = initialState.find(item => item.name === name);
//           if (selectedItem) {
//             setWishlist(prevWishlist => [...prevWishlist, selectedItem]);
//           }
//         }
//       };
    
//     useEffect(() => {
//         console.log(wishlist);
//     }, [wishlist]);
//     return (
//         <>
//             <div className="title text-center p-10"> wishlist</div>
//             <div className="items flex-wrap flex justify-start  px-14">
//                 {wishlist.length > 0 ? (
//                     wishlist.map((item, index) => (
//                         <ProductComponent
//                         key={index}
//                         name={item.name}
//                         price={item.price}
//                         onToggleWishlist={handleToggleWishlist}
                        
//                         />
//                     ))
//                 ) : (
//                     <p className="text-center w-full pb-12">Your wishlist is empty.</p>
//                 )}
//             </div>

//         </>

//     )
// }


import ProductComponent from '@/components/Product';
import '@/styles/productpage.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlistSlice';
import { wishlist as initialState } from '@/utils/data';
import { useEffect } from 'react';

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  const handleToggleWishlist = (name, isFilled) => {
    if (isFilled) {
      dispatch(removeFromWishlist({ name }));
    } else {
      const selectedItem = initialState.find(item => item.name === name);
      if (selectedItem) {
        dispatch(addToWishlist(selectedItem));
      }
    }
  };

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <>
      <div className="title text-center p-10">Wishlist</div>
      <div className="items flex-wrap flex justify-start px-14">
        {wishlist.length > 0 ? (
          wishlist.map((item, index) => (
            <ProductComponent
              key={index}
              name={item.name}
              price={item.price}
              onToggleWishlist={handleToggleWishlist}
            />
          ))
        ) : (
          <p className="text-center w-full pb-12">Your wishlist is empty.</p>
        )}
      </div>
    </>
  );
}

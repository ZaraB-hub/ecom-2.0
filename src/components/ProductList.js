'use client'
import ProductComponent from './Product';


const ProductList = ({ title }) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="flex flex-col h">
      <div className="title m-5 text-center">{title}</div>
      <div className="flex justify-between px-5 ">
        <img src="/assets/icons/left.svg" alt=""  onClick={slideLeft} className='hidden sm:inline-block'  />
        <div className="product_list flex justify-around flex-grow gap_30 overflow-hidden ">
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
          </div>
        <img src="/assets/icons/🦆 icon _chevron right_.svg "  onClick={slideRight} className='hidden sm:inline-block'  alt=""  />
      </div>
    </div>
  );
};

export default ProductList;

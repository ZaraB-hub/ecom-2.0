import ProductList from '@/components/ProductList';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    
    <>
    <div className="flex   flex-col md:flex-row start items-center mb-10 w-full space-y-4 md:space-y-0 md:space-x-4">
      <div className='w-1/2 flex flex-col items-center justify-center intro '>
            <div className='main_text'>fashion</div>
            <div className='main_text'>that</div>
            <div className='color_text main_text'>empowers</div>
            <div className='sub_text mt-1'>be your most confident self</div>
      </div>
      <div className='w-1/2 justify-end flex'>
      <Image
            src="/assets/images/woman.png"
            alt="Women in clothin"
            width={500}
            height={100}
            id='women_img'
          />
      </div>
    </div>

    <ProductList title="Best Sellers" />
    <ProductList title="Featured Items" />
    </>
    
  
  )
}

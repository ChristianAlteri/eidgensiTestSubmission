import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";

import Container from "../../src/app/Components/Container";
import Navbar from '../../src/app/Components/Navbar/Navbar';



type ProductCardProps = {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
};

const ProductPage: React.FC<ProductCardProps> = ({ 
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,

 }) => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductCardProps>();
  const [products, setProducts] = useState<ProductCardProps[]>([]);



  useEffect(() => {

    if (id) {
      const apiUrl = `https://dummyjson.com/products/${id}`;

      axios.get(apiUrl).then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
    }
    
  }, [id]);
  
  
  if (!product) {
    return <div>Loading...</div>;
  }

  let stars = ""; 
  //@ts-ignore
  let roundedRating = Math.round(product.rating);
    if (roundedRating === 1) {
      stars = "🤩";
    } else if (roundedRating === 2) {
        stars = "🤩 🤩";
    } else if (roundedRating === 3) {
        stars = "🤩 🤩 🤩";
    } else if (roundedRating === 4) {
        stars = "🤩 🤩 🤩 🤩";
    } else {
        stars = "🤩 🤩 🤩 🤩 🤩"; 
    }
  return (
    <>
    <Navbar/>
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="flex items-center text-neutral-500">
          {product.stock} Left!
        </div>
      <div
        className="flex items-center justify-center "
        style={{ width: '600px', height: '600px' }}
        >
        <Image
          //@ts-ignore
          src={product.images[0]}
          //@ts-ignore
          alt={product.title}
          width={600}
          height={600}
          />
      </div>
      </div>
      
      <div
        className="
        cursor-pointer 
        hover:underline 
        border-b-2 
        pb-2 
        flex 
        justify-center 
        font-semibold 
        text-lg"
      >
        {product.title}
      </div>
      <br />
      <div
        className="
        cursor-pointer 
        hover:underline 
        text-sm 
        text-neutral-500
        justify-center
        text-center
        items-center
        "
      >
        {product.brand}
      </div>
      <br />
      <div className='
      flex
      col-span-2
      gap-2
      '>
        <div
          className=" 
          w-full
          pb-10
          flex 
          text-align-center
          justify-center 
          text-sm"
        >
          <div className='font-semibold'>Specs:&nbsp; </div>
                {product.description}

        <div className="text-sm text-red-500 border-r-2 p-5"> £{product.price} SALE
        <div
          className=" text-sm text-green-500">
           %{product.discountPercentage} Off
        </div>
        <br />
        <div className='
        flex
        '>
          {stars}
        </div>
        </div>

        <button className='
        hover:underline
        p-4
        '
        >Buy now</button>

      </div>
      </div>

      <div 
      className='
      flex

      '>
      </div>

    </Container> 
    </>
  );
}  

export default ProductPage;

'use client'

import React, { useEffect, useState } from "react";
import Container from "./Components/Container";
import ProductCard from "./Components/products/ProductCard";

import axios from "axios";
import { useRouter } from "next/router";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Home() {
  const apiUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState<Product[]>([]);



  React.useEffect(() => {
    axios.get(apiUrl).then((res) => {
      const { products } = res.data; 
      setProducts(products);
      console.log(res.data);
    });
  }, []);

  if (!products) { return <div>Loading...</div> }
    
    return (
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
              "
        >
          
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              thumbnail={product.thumbnail}
              images={product.images}
            />
          ))}
        </div>
      </Container>
    );
  }
// };
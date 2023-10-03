import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';


const apiUrl = "https://dummyjson.com/products";


type Product = {
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

const ProductPage = () => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {

  //   if (id) {
  //     axios.get(apiUrl).then((res) => {
  //       const { products } = res.data;

  //       const selectedProduct = products.find((p: Product) => p.id === Number(id));

  //       if (selectedProduct) {
  //         setProduct(selectedProduct);
  //       }
  //     });
  //   }
  // }, [id]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      HELLOOOOOO
      {/* <h1>Product Details for ID: {id}</h1> */}
      {/* <h2>Name: {product.title}</h2> */}

    </div>
  );
};

export default ProductPage;

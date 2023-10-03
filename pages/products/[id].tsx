import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';



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

  useEffect(() => {
    if (id) {
      const apiUrl = `https://dummyjson.com/products/${id}`; 

      axios.get(apiUrl).then((res) => {
        setProduct(res.data); 
      });
    }
  }, [id]);
  
  
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="
        border-4 
        border-gray-400
        rounded-xl
        p-2
      "
    >
      <div
        className="col-span-1 group"
      >
        <div className="flex flex-col gap-2 w-full">
          <div 
            className="
              flex
              justify-between
              text-neutral-400
              text-sm
            "
          >
            {/* Brand */}
            <div 
              onClick={() => router.push(`/products/${brand}`)} 
              className="
                cursor-pointer
                hover:underline
                flex 
                justify-start 
                font-light 
                text-neutral-500"
            >
              {product.brand}
            </div>
            <div 
              className="
                flex 
                justify-end 
                font-light 
                text-neutral-500"
            >
              {/* Stock count */}
              {product.stock} Left!
            </div>
          </div>
        </div>
        <div 
          className="
            flex
            flex-col
            justify-center
            items-center
          "
          style={{
            width: '30vh',   
            height: '30vh'   
          }}
        >
          <Image
            //@ts-ignore
            src={product.images[0]} 
            //@ts-ignore
            alt={product.title}
            width={200} 
            height={200}
          />
        </div>
        <div 
          onClick={() => router.push(`/products/${id}`)} 
          className="
            cursor-pointer
            hover:underline
            border-b-2
            pb-2 
            flex 
            justify-center 
            font-semibold 
            text-l"
        >
          {product.title}
        </div>
        <div>
          <div className="flex flex-col justify-end">
            <div 
              className="
                text-s 
                flex 
                justify-center 
                flex-row 
                items-center 
                gap-1
              "
            >
              <div 
                className="
                  text-m 
                  text-red-500"
              >
                Originally £{product.price}
              </div>
            </div>
            <div 
              className="
                text-m 
                flex 
                justify-center 
                flex-row 
                items-center 
                gap-1"
            >
              <div 
                onClick={() => router.push(`/products/${id}`)} 
                className="
                  cursor-pointer 
                  hover:underline 
                  text-xl 
                  text-green-500"
              >
                Buy now £{product.discountPercentage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default ProductPage;

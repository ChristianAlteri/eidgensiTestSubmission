// TODO: Display the username of the person who booked the wardrobe when we click on the route 'My listings'

'use client'
import { useRouter } from "next/navigation";



import Image from "next/image";



interface ProductCardProps {
  id: number;
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
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
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

  //@ts-ignore
  let discountSum = price - (price * discountPercentage) / 100;
  let discountPrice = discountSum.toFixed(0); 
  
  const router = useRouter();

  

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
        onClick={() => router.push(`/products/${id}`)} 
        className="col-span-1 cursor-pointer group"
      >
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
            
          >
          <div 
          className="
          text-neutral-400
          absolute 
          top-1 
          right-4
          text-sm
          "
          >
            {stock} Left!</div>
          </div>

          <div 
          className="
          border-b-2
          pb-2 
          flex 
          justify-center 
          font-semibold 
          text-lg"
          >
            {title}
          </div>

          <div 
          className="
          flex 
          justify-center 
          font-light 
          text-neutral-500">
            {brand}
          </div>
          <div>
            <div 
            className="
            text-s 
            flex 
            justify-center 
            flex-row 
            items-center 
            gap-1"
            >
              
              <div className="text-m text-red-500">Originaly £{price}</div>
            </div>

            <div className="text-m flex justify-center flex-row items-center gap-1">
              

              <div className="text-xl text-green-500">Buy now £{discountPrice}</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
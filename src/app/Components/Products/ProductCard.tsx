// TODO: Display the username of the person who booked the wardrobe when we click on the route 'My listings'


import { useRouter } from "next/navigation";

import { useCallback, useMemo } from "react";

import Image from "next/image";



interface ProductCardProps {
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


  const router = useRouter();

  return (
    <div
      className="
            border-4 
            border-green-400
            rounded-xl
            p-2
            "
    >
      <div
        // onClick={() => router.push(`/products/${props.data.id}`)} // Use props.data.id if you pass the data as a prop
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
            <div className="absolute top-3 right-3">Hello</div>
          </div>

          <div className="border-b flex justify-center font-semibold text-lg">
            Name (title)
          </div>

          <div className="flex justify-center font-light text-neutral-500">
            brand
          </div>
          <div>
            <div className="text-s flex justify-center flex-row items-center gap-1">
              Most products are
              <div className="text-s text-green-500">price</div>
            </div>

            <div className="text-m flex justify-center flex-row items-center gap-1">
              <div className="text-m text-red-500">rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
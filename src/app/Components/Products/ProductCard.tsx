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
  const imageUrl = images && images.length > 0 ? images[0] : "/default-image.jpg";

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
      <div className="col-span-1 group">
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
              {brand}
            </div>
            <div
              className="
                flex 
                justify-end 
                font-light 
                text-neutral-500"
            >
              {/* Stock count */}
              {stock} Left!
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex items-center justify-center p-3">
            <div
              style={{
                width: '20vh',
                height: '20vh'
              }}
              className="flex items-center justify-center w-1/2 h-1/2 overflow-hidden">
              <Image
                //@ts-ignore
                src={imageUrl}
                //@ts-ignore
                alt={title}
                width={400}
                height={400}
              />
            </div>
          </div>
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
          {title}
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
                Originally £{price}
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
                Buy now £{discountPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

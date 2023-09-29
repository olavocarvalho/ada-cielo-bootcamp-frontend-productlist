import { PriceBR } from "@/lib/utils";
import { Product } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick: (open: boolean) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="max-w-sm w-full h-auto flex flex-col gap-y-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={() => onClick(true)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <span className="absolute top-2 left-2 flex flex-row gap-x-1 items-center px-2 py-1 dark:bg-black/80 bg-white/80 dark:text-slate-200 text-slate-700 backdrop-blur-sm rounded-md">
          <Star width={20} /> <p>{product.rating}</p>
        </span>
        <Image
          className="rounded-t-lg w-full h-auto object-cover"
          src={product.avatar}
          alt={product.name}
          width={480}
          height={192}
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {PriceBR.format(Number(product.price))}
        </h5>
      </div>
    </div>
  );
}

"use client";

import { Product } from "@/types";
import { useState } from "react";
import { ProductCard } from "./ui/product-card";
import Modal from "./modal";

interface ProductListType {
  products: Product[];
}

export default function ProductList({ products }: ProductListType) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={`${product.name} ${product.price} `}
          onClick={() => setOpen(true)}
        />
      ))}
      <Modal
        open={open}
        setOpen={setOpen}
        product={products[0]}
        listIndex={0}
      />
    </>
  );
}

"use client"

import { CartModal } from "@/components/cartModal";
import { ProductDetailCard } from "@/components/productlist";
import { CartProvider } from "@/lib/Cartcontext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        if (!id) return;
    
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data))
          .catch((err) => console.error("Failed to fetch product:", err));
      }, []);
    
      if (!product) {
        return <p className="text-center mt-10">Loading product...</p>;
      }
    
      return (
        <CartProvider>
        <div className="p-4">
          <ProductDetailCard product={product} />
          <CartModal />
        </div>
        </CartProvider>
      );
    }
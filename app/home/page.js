"use client";

import Navbar from "@/components/navbar";
import ProductCard from "@/components/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {n
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });``
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading products...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dscgkuvkd/image/upload/v1746464301/Screenshot_2025-05-05_at_10.25.54_PM_vwhbfc.png"
          alt="Hero"
          className="w-full h-auto object-cover max-h-[400px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div onClick={() => router.push(`/productdetails/${product.id}`)} key={product.id}><ProductCard product={product} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client"

import Navbar from "@/components/navbar";
import ProductCard from "@/components/product";
import { useEffect, useState } from "react";
export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p className="text-center mt-10">Loading products...</p>;
    }
  return (
    <div className="flex flex-col">
    <Navbar />
    <div className="w-screen h-full">
        <img src="https://res.cloudinary.com/dscgkuvkd/image/upload/v1746464301/Screenshot_2025-05-05_at_10.25.54_PM_vwhbfc.png" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>);
}
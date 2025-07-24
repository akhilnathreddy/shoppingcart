import Navbar from "./navbar";
import { Plus, ShoppingCart, Minus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/Cartcontext";

export function ProductDetailCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex-shrink-0 md:w-1/2 flex items-center justify-center bg-gray-100 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-80 w-full"
            />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold text-green-600">
                ${product.price}
              </span>
              <span className="text-sm text-yellow-600">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </span>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>


              <div className="flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
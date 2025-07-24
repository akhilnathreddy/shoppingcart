import { useCart } from "@/lib/Cartcontext";
import { X , Minus, Plus} from "lucide-react";

export function CartModal() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    clearCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-gray-100 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.title.substring(0, 50)}...</h3>
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-gray-50 rounded">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total: ${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Clear Cart
                  </button>
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
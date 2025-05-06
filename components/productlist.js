import Navbar from "./navbar";

export default function ProductDetailCard({ product }) {
    return (<>
    <Navbar/>
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
  
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-green-600">
                ${product.price}
              </span>
              <span className="text-sm text-yellow-600">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </span>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div></>
    );
  }
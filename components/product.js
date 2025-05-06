export default function ProductCard({ product }) {
    return (
      <div className="flex flex-col max-w-sm w-full rounded-2xl overflow-hidden shadow-md border p-4 bg-white transition-transform hover:scale-105">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain rounded-xl"
        />
  
        <div className="mt-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-bold text-gray-800 line-clamp-2">{product.title}</h2>
            <p className="text-sm text-gray-500 mt-1 capitalize">{product.category}</p>
            <p className="text-gray-700 mt-2 text-sm line-clamp-3">{product.description}</p>
          </div>
  
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm text-yellow-600">
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    );
  }
  
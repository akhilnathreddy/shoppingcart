function ProductCard() {
    const product = {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    };
  
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={product.image}
          alt={product.title}
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-gray-700 mt-2 line-clamp-3">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm text-yellow-600">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedproduct = {
  name: "Stylish Jacket",
  price: 120,
  original_price: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  color: ["Red", "Black"],
  image: [
    {
      url: "https://picsum.photos/seed/newarrival1/500/500",
      alt: "Stylish Jacket Front",
    },
    {
      url: "https://picsum.photos/seed/newarrival2/500/500",
      alt: "Stylish Jacket Side",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
];

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedproduct?.image?.length > 0) {
      setMainImage(selectedproduct.image[0].url);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select both color and size before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Item added to cart!", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4">
            {selectedproduct.image.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-xl shadow cursor-pointer hover:scale-105 transition border ${
                  mainImage === image.url ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            {mainImage && (
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-[500px] object-cover rounded-xl shadow-md"
              />
            )}

            <div className="flex md:hidden mt-4 gap-4 overflow-x-auto">
              {selectedproduct.image.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setMainImage(image.url)}
                  className={`w-20 h-20 object-cover rounded-xl shadow cursor-pointer hover:scale-105 transition border ${
                    mainImage === image.url ? "border-black" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:w-1/2 flex flex-col justify-start text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedproduct.name}</h2>

            <p className="text-lg text-gray-700 mb-1">
              <span className="line-through text-gray-400 mr-2">${selectedproduct.original_price}</span>
              <span className="font-semibold text-xl">${selectedproduct.price}</span>
            </p>

            <p className="text-sm text-gray-600 mb-4">{selectedproduct.description}</p>

            {/* Color */}
            <div className="mb-4">
              <span className="font-medium block mb-1">Color:</span>
              <div className="flex gap-2">
                {selectedproduct.color.map((color) => (
                  <span
                    key={color}
                    onClick={() => setSelectedColor(selectedColor === color ? "" : color)}
                    className={`w-8 h-8 rounded-full cursor-pointer ring-offset-2 ring-2 ${
                      selectedColor === color ? "ring-black" : "ring-transparent"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.9)",
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <span className="font-medium block mb-1">Size:</span>
              <div className="flex gap-2">
                {selectedproduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
                    className={`px-3 py-2 border rounded-md hover:bg-gray-100 cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <span className="font-medium block mb-1">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  className="border px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="px-2">{selectedQuantity}</span>
                <button
                  onClick={() => setSelectedQuantity((prev) => prev + 1)}
                  className="border px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`px-6 py-3 rounded-md w-full transition font-semibold ${
                isButtonDisabled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Characteristics */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Characteristics:</h3>
              <div className="grid grid-cols-2 text-sm gap-y-2">
                <span className="text-gray-600">Brand</span>
                <span className="text-gray-900">{selectedproduct.brand}</span>
                <span className="text-gray-600">Material</span>
                <span className="text-gray-900">{selectedproduct.material}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
        <ProductGrid products={similarProducts} />
      </div>
    </section>
  );
};

export default ProductDetail;

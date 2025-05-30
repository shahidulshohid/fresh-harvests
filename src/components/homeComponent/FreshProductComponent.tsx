'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  _id?: string;
  name: string;
  price: number | string;
  category?: string;
  images?: string[];
}

export default function FreshProductComponent() {
  const [toggle, setToggle] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from API
  const getProducts = async () => {
    try {
      const res = await fetch('https://code-commando.com/api/v1/products');
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filter products based on category toggle
  const filteredProducts = products.filter(product => {
    if (toggle === "All") return true;
    return product.category?.toLowerCase() === toggle.toLowerCase();
  });

  return (
    <section className="w-full px-5 lg:px-8 xl:px-[8%] space-y-10 pt-24">
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-xl font-semibold text-greenText px-3 py-1">
          Our Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Our Fresh Products
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52] max-sm:w-[80%] lg:w-[30%] mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 max-sm:space-x-2 max-lg:space-x-3 max-2xl:space-x-4 2xl:space-x-4 flex-wrap">
          {["All", "Fruits", "Vegetables", "Salad"].map(category => (
            <button
              key={category}
              onClick={() => setToggle(category)}
              className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl whitespace-nowrap ${
                toggle === category
                  ? "bg-[#749B3F] text-white"
                  : "border border-[#D9D9D9] hover:bg-[#749B3F1A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 8).map((product, index) => (
            <div key={product._id || index} className="p-4 rounded-2xl shadow-xl space-y-4 bg-white hover:shadow-2xl transition-shadow">
              <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center p-5">
                <Image
                  src={product.images?.[0] || "/placeholder.png"}
                  alt={product.name || "Product image"}
                  width={200}
                  height={200}
                  className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]"
                  priority={index < 4}
                />
              </figure>
              <div className="text-center space-y-2">
                <h4 className="font-medium text-[#212337] text-lg sm:text-xl truncate">{product.name}</h4>
                <p className="text-[#4A4A52] text-base sm:text-lg">৳{product.price}</p>
                <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-2 text-lg hover:bg-[#FF6A1A] hover:text-white transition-colors duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg sm:text-xl py-10">
            Sorry, no products available in this category.
          </p>
        )}
      </div>

      {/* See All Products Button */}
      <div className="text-center">
        <button className="border border-[#FF6A1A] text-[#FF6A1A] max-sm:text-[14px] text-xl lg:px-8 lg:py-4 rounded-lg hover:bg-[#FF6A1A] hover:text-white transition-colors duration-300">
          See All Products
        </button>
      </div>
    </section>
  );
}

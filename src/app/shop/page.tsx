'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
type Product = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
};

export default function AllProductsCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://code-commando.com/api/v1/products");
      const data = await res.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2F5233] mb-10">
        All Products
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 text-xl">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product._id || index}
              className="bg-white rounded-2xl shadow p-4 space-y-3 hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#F4F6F6] rounded-xl flex items-center justify-center h-[200px]">
                <Image
                  src={product.images?.[0] || "/another img.png"}
                  alt={product.name || "Product Image"}
                  width={160}
                  height={160}
                  className="object-contain max-h-[180px]"
                  priority={index < 4}
                />
              </div>
              <h4 className="text-lg font-semibold text-center truncate text-[#212337]">
                {product.name}
              </h4>
              <p className="text-center text-[#496D2F] font-medium">৳{product.price}</p>
              <button className="w-full bg-[#FF6A1A] text-white font-semibold py-2 rounded-md hover:bg-[#e05912] transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

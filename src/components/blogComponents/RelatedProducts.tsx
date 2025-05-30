import Image from "next/image";
import React from "react";
export default function RelatedProducts() {
  return (
    <section>
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5 mt-[110px]">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-xl font-semibold text-greenText px-3 py-1 ">
          Out Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl mb-8">
          Related Products
        </h2>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card one */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/fruits1.png"
              width={200}
              height={200}
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Two */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/fruits1.png"
              width={200}
              height={200}
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Three */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/fruits1.png"
              width={200}
              height={200}
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Four */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/fruits1.png"
              width={200}
              height={200}
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

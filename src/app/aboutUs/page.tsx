'use client'

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10 space-y-12 pt-30">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2F5233]">
          About Fresh Harvest
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          At Fresh Harvest, we are passionate about bringing the freshest, most flavorful fruits, vegetables, and salad ingredients directly to your table. Our commitment to quality and sustainability ensures every product meets the highest standards.
        </p>
      </header>

      {/* Image & Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:flex-1">
          <Image
            src="/harvestImg.jpg" 
            alt="Fresh Harvest Farm"
            width={600}
            height={400}
            className="rounded-3xl object-cover shadow-lg h-[300px]"
            priority
          />
        </div>

        <div className="lg:flex-1 space-y-6 text-gray-800">
          <h2 className="text-3xl font-semibold text-[#496D2F]">
            Our Story
          </h2>
          <p>
            Founded with the vision to connect people with s best produce, Fresh Harvest partners with local farmers who follow eco-friendly farming practices. We carefully select every product to ensure freshness, taste, and nutrition.
          </p>
          <p>
            Whether you’re looking for juicy fruits, crisp vegetables, or vibrant salad ingredients, we strive to make healthy eating easy and accessible.
          </p>
          <p>
            Join us on our journey to promote sustainable farming and support local communities.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-[#E6F1D6] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#37592B] mb-4">Our Mission</h3>
          <p>
            To deliver fresh, healthy, and organic produce to families while supporting local farmers and promoting sustainable agriculture.
          </p>
        </div>
        <div className="bg-[#D9E8B9] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#37592B] mb-4">Our Vision</h3>
          <p>
            To become the leading fresh produce provider in the region, known for quality, transparency, and positive impact on the environment.
          </p>
        </div>
      </div>
    </section>
  );
}

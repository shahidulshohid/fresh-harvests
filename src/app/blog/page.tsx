
// const Blog = () => {
//     return (
//         // <div className="relative w-full h-[75vh] overflow-hidden">
//         <div className="w-full h-[75vh]">
//         <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center">
//         <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
//         this is about page
//         </h1>
//       </div>
//         </div>
//     );
// };

// export default Blog;




"use client";

import ProductDetails from "@/components/blogComponents/ProductDetails";
import RelatedProducts from "@/components/blogComponents/RelatedProducts";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";

export default function Blog() {
  return (
    <section className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10">
      <div className="w-full h-[20vh]">
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center"></div>
      {/* section Description */}
      <ProductDetails />
      {/* Review */}
      <ReviewComponent />
      {/* Related Product */}
      <RelatedProducts/>
      </div>
    </section>
  );
}
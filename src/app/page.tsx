"use client"
// import FreshProductComponent from '@/components/homeComponent/FreshProductComponent';
import dynamic from "next/dynamic";
const FreshProductComponent = dynamic(() => import('@/components/homeComponent/FreshProductComponent'), {
  ssr: false,
});
import Banner from '../components/Banner';
import SectionAbout from '@/components/homeComponent/SectionAbout';
import HarvestBlog from "@/components/homeComponent/HervestBlog";
import SpecialOffer from "@/components/homeComponent/SpecialOffer";
import Testimonial from "@/components/homeComponent/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FreshProductComponent/>
      <SectionAbout/>
      <HarvestBlog/>
      <SpecialOffer/>
      <Testimonial/>
    </div>
  );
};

export default Home;
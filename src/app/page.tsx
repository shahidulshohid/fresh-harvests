"use client"
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
      <SpecialOffer/>
      <Testimonial/>
      <HarvestBlog/>
    </div>
  );
};

export default Home;
"use client"
import FreshProductComponent from '@/components/homeComponent/FreshProductComponent';
import Banner from '../components/Banner';
import SectionAbout from '../components/homeComponent/SectionAbout';

const Home = () => {
  return (
    <div className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10">
      <Banner/>
      <FreshProductComponent/>
      <SectionAbout/>
    </div>
  );
};

export default Home;
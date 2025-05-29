"use client"
import FreshProductComponent from '@/components/homeComponent/FreshProductComponent';
import Banner from '../components/Banner';
import SectionAbout from '@/components/homeComponent/SectionAbout';

const Home = () => {
  return (
    <div>
      <Banner/>
      <FreshProductComponent/>
      <SectionAbout/>
    </div>
  );
};

export default Home;
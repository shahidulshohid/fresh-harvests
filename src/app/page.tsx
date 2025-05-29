import Image from "next/image";
import bannerImage from "@/assets/bannerImg/bannerImg.png";
const Banner = () => {
  return (
    <div>
      <Image
        src={bannerImage}
        alt="Banner"
        width={1200}
        height={600} 
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Banner;

import bannerImage from "@/assets/bannerImg/bannerBgImg.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[1600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
      </div>
    </div>
  );
};

export default Banner;

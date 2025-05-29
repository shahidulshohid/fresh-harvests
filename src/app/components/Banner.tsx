import bannerImage from "@/assets/bannerImg/bannerBgImg.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[1600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage.src})`,
      }}
    >
      <div className="flex justify-between items-center h-full text-white">
        <div>
          <h1>left side</h1>
        </div>
        <div>left side</div>
      </div>
    </div>
  );
};

export default Banner;

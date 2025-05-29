// import bannerImage from "@/assets/bannerImg/bannerBgImg.png";

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to right,white 73%, #749B3F 27%)",
      }}
    >
      <div className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10">
        <div className="w-full h-[70vh]">
          <div className="flex justify-between items-center h-full text-white">
            <div className="text-black">
                <span className="text-[#749B3F] text-5 px-4 bg-[#dee1da] rounded-sm">Welcome to Fresh Harvest</span>
              <h1 className="text-5xl font-bold text-[#212337] mb-4 mt-5">Fresh Fruits and <br /> Vegetables</h1>
              <p className="text-4 max-w-xl text-[#4A4A52] mb-8">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
              <button className="bg-[#FF6A1A] text-white text-4 font-semibold py-2 px-4 rounded-sm">Shop Now</button>
            </div>
            <div>left side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import bannerImage from "@/assets/bannerImg/bannerBgImg.png";
import Image from "next/image";
const SectionAbout = () => {
    return (
        <div>
            <div className='max-w-[1213px] mx-auto container bg-white/50'>
                {/* <SectionHeader subheader={'Testimonial'} header={'What Our Customer Say'} description={"Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest!"} /> */}
                {/* /Image */}
                <div className=' grid md:grid-cols-2 items-center space-x-10  p-4 md:p-0'>
                    <div className='relative mx-auto'>
                        <div className='text-center'>
                            <Image src={bannerImage} width={600} height={700} alt="" className="w-full h-full"/>
                        </div>
                        <div className='px-[7px] py-[4px] md:px-[13px] absolute right-32 bg-[#ddd] bottom-28'> 
                            <h6 className='font-medium'>Fresh Harvest</h6>
                        </div>

                        <div className='px-[7px] py-[4px] md:px-[13px] absolute right-20 bg-white  -bottom-8 flex flex-col justify-center items-center space-y-1'>
                            <h6 className='font-medium'>Image</h6>
                            <h6 className='font-medium'>Mashrum</h6>
                            <p className='font-medium'>$2.3kg/</p>
                            <button className='border py-[6px] px-[44px]'>Add to cart</button>
                        </div>
                    </div>

                    {/* content */}
                    <div className='space-y-4'>
                        <h4 className='text-[14px] md:text-xl'>About Us</h4>
                        <h2 className='text-3xl md:text-5xl'>About Fresh Harvest</h2>

                        <p className='text-[#4a4a52]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo praesentium temporibus excepturi impedit quaerat sequi maiores voluptatem beatae laborum fugit culpa ex eos, hic ullam iusto consectetur dolorum laudantium, quae non ea perferendis aperiam dolor. Optio, deserunt. Nisi, magni facilis, neque non sapiente recusandae unde dolorem quae reiciendis, voluptas qui.</p>
                        <button className='border border-[#FF6a1a] text-[#FF6a1a] p-4'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SectionAbout;
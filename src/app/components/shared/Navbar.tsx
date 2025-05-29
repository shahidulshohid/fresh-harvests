// // "use client"
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // const Navbar = () => {
// //   const pathName = usePathname()
// //   return (
// //     <div
// //       className="h-[10vh] flex items-center fixed z-[999] w-full"
// //     >
// //       <nav className="flex justify-between items-center w-11/12 mx-auto px-4 md:px-8">
// //         <div>
// //           <h1 className="text-xl font-bold">logo</h1>
// //         </div>
// //         <div className="space-x-4">
// //           <Link className={`${pathName === "/" ? "font-bold border-b-2 border-orange-600" : "font-semibold"}`} href="/">Home</Link>
// //           <Link className={`${pathName === "/shop" ? "font-bold border-b-2 border-orange-600" : "font-semibold"}`} href="/shop">Shop</Link>
// //           <Link className={`${pathName === "/aboutUs" ? "font-bold border-b-2 border-orange-600" : "font-semibold"}`} href="/aboutUs">About Us</Link>
// //           <Link className={`${pathName === "/blog" ? "font-bold border-b-2 border-orange-600" : "font-semibold"}`} href="/blog">Blog</Link>
// //         </div>
// //         <div className="space-x-4">
// //           <Link href="/favorites">Favorites</Link>
// //           <Link href="/cart">Cart</Link>
// //           <Link href="/signIn">SignIn</Link>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa6";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [showNav, setShowNav] = useState(false);
//   const openNav = showNav ? "translate-x-0" : "translate-x-[100%]";

//   const handleOpenNave = () => setShowNav(true);
//   const handleCloseNave = () => setShowNav(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shop" },
//     { name: "About Us", path: "/aboutUs" },
//     { name: "Blog", path: "/blog" },
//   ];

//   return (
//     <div className="h-[10vh] flex items-center fixed z-[999] w-full">
//       <nav className="flex justify-between items-center w-11/12 mx-auto px-4 md:px-8">
//         <div>
//           <h1 className="text-xl font-bold">logo</h1>
//         </div>
//         {/* desktop menu  */}
//         <div className="space-x-6 hidden md:flex">
//           {navLinks.map((link) => (
//             <Link {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               href={link.path}
//               className={`pb-1 ${
//                 pathname === link.path
//                   ? "font-bold border-b-2 border-0 border-orange-600"
//                   : "font-semibold"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//               key={link.path}
//               href={link.path}
//               className={`pb-1 ${
//                 pathname === link.path
//                   ? "font-bold border-b-2 border-0 border-orange-600"
//                   : "font-semibold"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         <div className="space-x-4 flex justify-center items-center">
//           <Link href="/favorites">
//             <p className="flex justify-center items-center gap2">
//               <FaHeart className="text-white" />
//               Favorites
//             </p>
//           </Link>
//           <Link href="/cart">Cart</Link>
//           <Link href="/signIn">SignIn</Link>
//           <button onClick={handleOpenNave} className="lg:hidden text-green-500">
//             opendasdsad
//           </button>
//         </div>
//         {/* responsive menu */}
//         {/* <div>
//           {/* overlay */}
//         <div
//           className={`${openNav} fixed inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-0`}
//         ></div>
//         {/* sidebar menu */}
//         {/* <div
//             className={`${openNav} right-0 fixed text-white flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-gray-600 space-y-6 z-[1006] transform transition-all duration-500`}
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 onClick={handleCloseNave}
//                 className={`pb-1 ${
//                   pathname === link.path
//                     ? "font-bold border-b-2 border-0 border-orange-600"
//                     : "font-semibold"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//           <button onClick={handleOpenNave} className="lg:hidden">
//             xxxxxxxxxx
//           </button> */}
//         {/* </div> */} 
//         <div>
//           {/* overlay */}
//           <div
//             className={`${openNav} fixed inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-0`}
//           ></div>

//           {/* sidebar menu */}
//           <div
//             className={`${openNav} right-0 fixed text-white flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-gray-600 space-y-6 z-[1006] transform transition-all duration-500`}
//           >
//             <div className="flex flex-col justify-center space-y-5 text-white p-8 mt-10">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   href={link.path}
//                   className={`pb-1 ${
//                     pathname === link.path
//                       ? "font-bold border-b-2 border-0 border-orange-600"
//                       : "font-semibold"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             <button
//               onClick={handleCloseNave}
//               className="absolute top-8 right-8"
//             >
//               xxxx
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
















"use client";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import Image from "next/image";
import bannerImage from "@/assets/logo.png";



const Navbar = () => {
  const pathName = usePathname();

  const [navBg, setNavBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleOpenNave = () => setShowNav(true);
  const handleCloseNave = () => setShowNav(false);

  const openNav = showNav ? "translate-x-0" : "translate-x-[100%]";

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 100) {
        setNavBg(true);
      }

      if (window.scrollY < 100) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header>
      {/* desktop menu */}
      <div className={`${navBg ? 'bg-white shadow-xl transition-all ease' : 'text-white'} h-[12vh] flex items-center fixed z-[999] w-full`}>
        <nav className="flex justify-between items-center w-11/12 mx-auto px-4 md:px-8">
          {/* left logo  */}
          <div className=" px-4 py-0.5 rounded-xs">
            <Link href="/" className="text-2xl md:text-3xl font-semibold text-black">
              <p className="flex items-center gap-2">
                <Image src={bannerImage} alt="logo" width={30} height={30} className="bg-transparent rounded-full"/> <span className="text-[#212337] text-2xl font-bold">Fresh Harvests</span>
              </p>
            </Link>
          </div>

          {/* center content */}
          <div className="hidden md:flex items-center justify-center space-x-12">
           
             {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`pb-1 text-[#4A4A52] text-4 ${
                pathName === link.path
                  ? "font-bold border-b-2 border-0 border-[#749B3F]"
                  : "font-semibold"
              }`}
            >
              {link.name}
            </Link>
          ))}
          </div>

          {/* right content */}
          <div className="flex items-center gap-3">
           
              <div className=" cursor-pointer p-0.5 hover:bg-amber-500 rounded-full">
                
                    <p className="flex items-center gap-2"><FaHeart /> Favorites</p>
              </div>

            <div className="hidden lg:flex">
              {status == "authenticated" ? (
                <button className="hover:bg-amber-600 font-semibold bg-amber-500 text-white cursor-pointer  py-1 px-4 rounded-4xl"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <Link href="/signIn">
                    <button className="hover:bg-amber-600 font-semibold bg-amber-500 text-white  cursor-pointer py-1 px-4 rounded-4xl">
                      SignIn
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div className="flex space-x-5">
              <Link
                className={`${pathName === "/cart" ? " bg-amber-500" : "font-semibold"} w-fit p-0.5 cursor-pointer hover:bg-amber-500 rounded-full flex items-center`}

                href={"/cart"}>
                <CiShoppingCart size={27} />
              </Link>
              <button onClick={handleOpenNave} className="lg:hidden">
                <GiHamburgerMenu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <div>
        {/* overlay */}
        <div
          className={`${openNav} fixed inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-0`}
        ></div>

        {/* sidebar menu */}
        <div
          className={`${openNav} right-0 fixed text-white flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-gray-600 space-y-6 z-[1006] transform transition-all duration-500`}
        >
          <div className="flex flex-col justify-center space-y-5 text-black p-8 mt-10">
            <Link onClick={handleCloseNave} href="/" className={`${pathName === "/" ? "font-bold border-b-2 border-orange-600" : "font-semibold"} w-fit`}>Home</Link>
            <Link onClick={handleCloseNave} href="/shop" className={`${pathName === "/shop" ? "font-bold border-b-2 border-orange-600" : "font-semibold"} w-fit`}>Shop</Link>
            <Link onClick={handleCloseNave} href="/aboutUs" className={`${pathName === "/aboutUs" ? "font-bold border-b-2 border-orange-600" : "font-semibold"} w-fit`}>About Us</Link>
            <Link onClick={handleCloseNave} href="/blog" className={`${pathName === "/blog" ? "font-bold border-b-2 border-orange-600" : "font-semibold"} w-fit`}>Blog</Link>
          </div>
          <button
            onClick={handleCloseNave}
            className="absolute top-8 right-8">
            <IoMdClose className="size-6 text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


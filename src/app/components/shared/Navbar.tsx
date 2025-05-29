
import Link from "next/link";

const Navbar = () => {

  return (
    <div
      className="h-[10vh] flex items-center fixed z-[999] w-full"
    >
      <nav className="flex justify-between items-center w-11/12 mx-auto px-4 md:px-8">
        <div>
          <h1 className="text-xl font-bold">logo</h1>
        </div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="space-x-4">
          <Link href="/favorites">Favorites</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/signIn">SignIn</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

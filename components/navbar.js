import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <h2 className="text-xl font-bold text-gray-800"><Link href="/home">INSHOP</Link></h2>

          <div className="flex items-center gap-4">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <Link href="/login" className="text-base font-medium text-gray-700 hover:text-black">
              Login
            </Link>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
}

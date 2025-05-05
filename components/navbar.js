import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (<>
      <div className="flex justify-between m-4">
        <div>
          <b><h2>INSHOP</h2></b>
        </div>
        <div className="flex gap-4 mr-4">
        <ShoppingCart />
          <Link href="/login">
            <h3>Login</h3>
          </Link>
        </div>
      </div>
      <hr></hr>
      </>
    );
  }
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product";

export default function Home() {
  return (
    <div className="flex flex-col">
    <Navbar />
    <div className="w-screen h-full">
        <img src="https://res.cloudinary.com/dscgkuvkd/image/upload/v1746464301/Screenshot_2025-05-05_at_10.25.54_PM_vwhbfc.png" />
    </div>
    
    <ProductCard/>
  </div>);
}
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer=()=> {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Image src={"/logo.png"} width={20} height={15} alt="logo" />
            <h2 className="text-xl font-semibold text-white">LiveStock</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            A trusted livestock marketplace in Bangladesh where you can easily
            buy and sell cows, goats, and other animals.
          </p>

          <div className="flex gap-3 mt-4">
            <div className="p-2 bg-gray-800 rounded-md hover:bg-green-600 text-white cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="p-2 bg-gray-800 rounded-md hover:bg-green-600 text-white cursor-pointer">
              <FaWhatsapp size={14} />
            </div>
            <div className="p-2 bg-gray-800 rounded-md hover:bg-green-600 text-white cursor-pointer">
              <FaYoutube size={14} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:grid lg:grid-cols-3">
          <div>
            <h3 className="text-white font-medium mb-3">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/all-animals">All Cows</Link>
              </li>
              <li>
                <Link href="#">Add Livestock</Link>
              </li>
              <li>
                <Link href="#">Featured Listings</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Cow</li>
              <li>Goat</li>
              <li>Sheep</li>
              <li>Others</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>How to Sell</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="">
      <div className="bg-[url('https://i.postimg.cc/050MrtTt/banner.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
        <div className="w-full h-full rounded-lg bg-black/10 flex items-center relative">
          <div className="max-w-7xl mx-auto w-full px-6 text-white absolute bottom-38 left-16">
            <Link href="/all-animals">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-2xl p-6">
                <FaPaw className="mr-2" />
                Browse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

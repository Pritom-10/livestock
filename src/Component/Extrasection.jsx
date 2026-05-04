import Image from "next/image";
import { FaCheckCircle, FaShieldAlt, FaTags, FaHeadset, FaArrowRight, FaTruck } from "react-icons/fa";
import { Card, Separator } from "@heroui/react";
import Link from "next/link";
import { Button } from "@heroui/react";
export default function ExtraSection({cow}) {
 
  
  return (
    <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
      <Card>
        <h2 className="bg-linear-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text text-xl font-bold text-center">
          Top Breeds
        </h2>
        <Separator className="w-full h-2 bg-green-700" />
        <div className="space-y-6">
          {cow.map((cows) => (
            <div key={cows.id} className="flex items-center gap-5">
              <div>
                <Image
                  width={100}
                  height={70}
                  src={cows.image}
                  className="rounded-xl shadow-sm"
                  alt={cows.name}
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <p className="font-semibold">{cows.name}</p>
                  <p className="bg-green-300 rounded-2xl p-2">{cows.breed}</p>
                </div>
                <p className="text-sm text-gray-500">{cows.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/all-animals"}>
          <Button className={"mt-5"} variant="outline">
            View All Breeds <FaArrowRight />
          </Button>
        </Link>
      </Card>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl text-center font-bold mb-2 bg-linear-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text ">
          Qurbani Tips
        </h2>
        <Separator className="w-full h-2 bg-green-700 mb-4" />
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-center gap-3">
            <FaCheckCircle size={20} className="text-green-600" />

            <div>
              <p className="font-bold text-[18px]">Choose a healthy animal</p>
              <p className="text-sm text-gray-500">
                Check the animals health, eyes, nose and skin properly
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <FaCheckCircle size={20} className="text-green-600 mt-1" />
            <div>
              <p className="font-bold text-[18px]">Check the age </p>
              <p className="text-sm text-gray-500">
                Make sure the animal meets the minimum age requirement
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-cemter">
            <FaCheckCircle size={20} className="text-green-600 mt-1" />
            <div>
              <p className="font-bold text-[18px]">Proper feeding</p>
              <p className="text-sm text-gray-500">
                Give healthy food and clean water for better growth
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <FaCheckCircle size={20} className="text-green-600 mt-1" />
            <div>
              <p className="font-bold text-[18px]">Clean and safe handling</p>
              <p className="text-sm text-gray-500">
                Keep the animal in a clean environment and handle with care.
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <FaCheckCircle size={20} className="text-green-600 mt-1" />
            <div>
              <p className="font-bold text-[18px]">Proper rest and space</p>
              <p className="text-sm text-gray-500">
                Ensure the animal has enough space and rest before Qurbani day.
              </p>
            </div>
          </li>
        </ul>
        <Button variant="outline" className={"mt-5 flex items-center"}>
          Read More tips <FaArrowRight />
        </Button>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 bg-linear-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text text-center">
          Why Choose Us?
        </h2>
        <Separator className="w-full h-2 bg-green-700 mb-4" />
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-center gap-3">
            <FaShieldAlt size={20} className="text-green-600" />
            <div>
              <p className="font-bold text-[18px]">Trusted Platform</p>
              <p className="text-sm text-gray-500">
                All sellers are verified and animals are carefully checked.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaTags size={20} className="text-green-600" />
            <div>
              <p className="font-bold text-[18px]">Safe & Secure</p>
              <p className="text-sm text-gray-500">
                Your payment and personal information are 100% safe.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FaTruck size={20} className="text-green-600" />
            <div>
              <p className="font-bold text-[18px]">Fast Delivery</p>
              <p className="text-sm text-gray-500">
                We ensure quick and reliable delivery to your location.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaCheckCircle size={20} className="text-green-600" />
            <div>
              <p className="font-bold text-[18px]">Affordable Price</p>
              <p className="text-sm text-gray-500">
                Get the best quality animals at the best price.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaHeadset size={20} className="text-green-600" />
            <div>
              <p className="font-bold text-[18px]">Customer Support</p>
              <p className="text-sm text-gray-500">
                We are always here to help you.
              </p>
            </div>
          </li>
        </ul>

        <Button variant="outline" className="mt-5 flex items-center gap-2">
          Learn More <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FaCheckCircle, FaShieldAlt, FaTags, FaHeadset } from "react-icons/fa";
import { Card } from "@heroui/react";
export default function ExtraSection({cow}) {
 
  
  return (
    <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
      <Card>
        <div className="space-y-4">
          {cow.map((cows) => (
            <div key={cows.id} className="flex items-center gap-2">
              <Image width={50} height={30} src={cows.image} alt={cows.name} />
              <p className="font-semibold">{cows.name}</p>
              <p className="text-sm text-gray-500">{cows.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Qurbani Tips</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex gap-2 items-start">
            <FaCheckCircle className="text-green-600 mt-1" />
            Choose a healthy animal with clear eyes and active behavior
          </li>
          <li className="flex gap-2 items-start">
            <FaCheckCircle className="text-green-600 mt-1" />
            Check minimum age requirement properly
          </li>
          <li className="flex gap-2 items-start">
            <FaCheckCircle className="text-green-600 mt-1" />
            Ensure proper feeding and clean environment
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>

        <ul className="space-y-4 text-sm text-gray-600">
          <li className="flex gap-2">
            <FaShieldAlt className="text-green-600 mt-1" />
            100% verified sellers
          </li>

          <li className="flex gap-2">
            <FaTags className="text-green-600 mt-1" />
            Best affordable prices
          </li>

          <li className="flex gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            Healthy animals guarantee
          </li>

          <li className="flex gap-2">
            <FaHeadset className="text-green-600 mt-1" />
            24/7 customer support
          </li>
        </ul>
      </div>
    </div>
  );
}
{
  /* <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Qurbani Tips</h2>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2 items-start">
                <FaCheckCircle className="text-green-600 mt-1" />
                Choose a healthy animal with clear eyes and active behavior
              </li>
              <li className="flex gap-2 items-start">
                <FaCheckCircle className="text-green-600 mt-1" />
                Check minimum age requirement properly
              </li>
              <li className="flex gap-2 items-start">
                <FaCheckCircle className="text-green-600 mt-1" />
                Ensure proper feeding and clean environment
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Top Breeds</h2>

           
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-2">
                <FaShieldAlt className="text-green-600 mt-1" />
                100% verified sellers
              </li>

              <li className="flex gap-2">
                <FaTags className="text-green-600 mt-1" />
                Best affordable prices
              </li>

              <li className="flex gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                Healthy animals guarantee
              </li>

              <li className="flex gap-2">
                <FaHeadset className="text-green-600 mt-1" />
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </section> */
}
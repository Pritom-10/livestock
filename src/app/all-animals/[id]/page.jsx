import Booking from "@/Component/Booking";
import { Button, Card,Chip } from "@heroui/react";
import Image from "next/image";
import {
  FaTag,
  FaWeightHanging,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { GiCow } from "react-icons/gi";
const cowsId = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find(p => p.id == id);
  return (
    <div className="mt-10 min-h-screen ">
      <Card>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <Card>
            <div className="space-y-4">
              <h2 className="flex items-center gap-1 text-2xl font-bold">
                <GiCow />
                {photo.name}
              </h2>
              <div className="relative w-48 aspect-square">
                <Image
                  src={photo.image}
                  alt={photo.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-w:768) 100vw, (max-w:1200) 50vw, 33vw"
                />
                <Chip className="absolute right-2 top-2" size="sm">
                  {photo.category}
                </Chip>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  <GiCow />
                  {photo.type}
                </p>
                <p className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  <FaTag />
                  {photo.breed}
                </p>
              </div>
              <Booking />
            </div>
          </Card>
          <div className="space-y-4">
            <Card>
              <p className="flex items-center gap-1">
                <FaInfoCircle />
                {photo.description}
              </p>
            </Card>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <FaMapMarkerAlt />
                {photo.location}
              </p>
              <p className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                <FaBirthdayCake /> {photo.age} Years
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <span className="text-[18px]">৳</span> {photo.price}
              </p>
              <p className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                <FaWeightHanging />
                {photo.weight} Kg
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default cowsId;
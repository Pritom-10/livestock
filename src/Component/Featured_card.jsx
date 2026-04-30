import { Chip } from "@heroui/react";
import { Button } from "@heroui/react";
import { MdLocationPin } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { Card, Separator } from "@heroui/react";
import Image from "next/image";
const Featured_card = ({ cows }) => {
  console.log(cows.image);

  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={cows.image}
          alt={cows.name}
          fill
          className="object-cover rounded-xl"
          sizes="(max-w:768) 100vw, (max-w:1200) 50vw, 33vw"
        />
        <Chip className="absolute right-2 top-2" size="sm">{cows.category}</Chip>
      </div>
      <div>
        <h2>{cows.name}</h2>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <GiWeight />
          </p>
          <p>{cows.weight}Kg</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <p>
            <MdLocationPin />
          </p>
          <p>{cows.location}</p>
        </div>
      </div>
      <Button variant="outline" className={'w-full'}>View Details</Button>
    </Card>
  );
};

export default Featured_card;

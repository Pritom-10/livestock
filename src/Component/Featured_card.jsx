/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

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
    </Card>
  );
};

export default Featured_card;
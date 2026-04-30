/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Card } from "@heroui/react";
import Image from "next/image";
const Featured_card = ({ cows }) => {
  console.log(cows.image);
  
  return (
    <Card>
      <div>
        <h2>{cows.name}</h2>
        <Image src={cows.image} height={200} width={200} alt={cows.name}/>

      </div>
    </Card>
  );
};

export default Featured_card;
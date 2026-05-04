import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async () => {
  const res = await fetch("https://livestock-gules.vercel.app/price.json");
  const categories = await res.json()

  
  return (
    <div className=" flex  gap-5">
      {categories.map((category) => (
        <Link
          
          key={category.id}
          href={`?category=${category.name}`}
        >
          <Button className={"mb-7 "}>{category.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
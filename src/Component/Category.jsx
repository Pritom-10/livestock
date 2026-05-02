import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async () => {
  const res = await fetch("https://livestock-gules.vercel.app/price.json");
  const categories = await res.json()

  
  return (
    <div>
      {categories.map((category) => (
        <Link key={category.id} href={`?category=${category.name}`}>
          <Button>{category.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
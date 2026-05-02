import Category from "@/Component/Category";
import Featured_card from "@/Component/Featured_card";

const AllAnimals = async ({ searchParams }) => {
  const { category } = await searchParams;
  
  const res = await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();

  const filteredPhotos= category?photos.filter(photo=> photo.price == category):photos 
  return (
    <div>
      <h2 className="text-2xl font-bold m-3">All Animals</h2>
      <Category/>
      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map(cows => <Featured_card key={cows.id} cows={cows} />)}
      </div>
    </div>
  );
};

export default AllAnimals;
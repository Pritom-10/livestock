import Featured_card from "./Featured_card";


const Featured = async () => {
  const res =await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();
  console.log(photos);
  
  const topFour = photos.slice(0, 4)
  
    return (
      <div>
        <h1 className="text-2xl font-bold my-5">Featured</h1>
        <div className="grid grid-cols-4 gap-5">
          {topFour.map((cows) => (
            <Featured_card key={cows.id} cows={cows} />
          ))}
        </div>
      </div>
    );
};

export default Featured;
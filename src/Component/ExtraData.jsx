import ExtraSection from "./Extrasection";




const ExtraData = async () => {
  const res =await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();
  const topBreds = photos.slice(5, 9)
 
  

  
    return (
      <div>
        <h1 className="text-2xl font-bold my-5">Featured</h1>
        <ExtraSection cow={topBreds} />
      </div>
    );
};

export default ExtraData;
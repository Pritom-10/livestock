import ExtraSection from "./Extrasection";




const ExtraData = async () => {
  const res =await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();
  const topBreds = photos.slice(5, 9)
  
    return (
      <div className="my-7">
        
        <ExtraSection cow={topBreds} />
      </div>
    );
};

export default ExtraData;
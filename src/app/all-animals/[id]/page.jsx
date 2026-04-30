

const cowsId = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://livestock-gules.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find(p => p.id == id);
  return (
    <div>
      <h1>{photo.name}</h1>
    </div>
  );
};

export default cowsId;
import Image from "next/image";

export default function ArtworkCard({ artwork }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src={artwork.image}
        alt={artwork.title}
        layout='fill'
        objectFit='cover'
      />
      <h2>{artwork.title}</h2>
      <p>{artwork.artist}</p>
    </div>
  );
}

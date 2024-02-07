import { Carousel } from "react-responsive-carousel";
import ArtworkCard from "../components/ArtworkCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Your artworks data
const artworks = [
  {
    id: 1,
    title: "Artwork 1",
    artist: "Artist 1",
    image:
      "https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148981502.jpg?w=1380&t=st=1707325470~exp=1707326070~hmac=6dc36b6c8e4ca9d5ee86cc8ddd87b6aeae2ad8564bc4368b10e6e6fdb95621bb",
  },
  {
    id: 2,
    title: "Artwork 2",
    artist: "Artist 2",
    image:
      "https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148981502.jpg?w=1380&t=st=1707325470~exp=1707326070~hmac=6dc36b6c8e4ca9d5ee86cc8ddd87b6aeae2ad8564bc4368b10e6e6fdb95621bb",
  },
  {
    id: 3,
    title: "Artwork 3",
    artist: "Artist 3",
    image:
      "https://img.freepik.com/free-vector/gradient-grainy-texture_23-2148981502.jpg?w=1380&t=st=1707325470~exp=1707326070~hmac=6dc36b6c8e4ca9d5ee86cc8ddd87b6aeae2ad8564bc4368b10e6e6fdb95621bb",
  },
  // Add more artworks here
];

export default function Gallery() {
  return (
    <div style={{ width: "80%", height: "280px", position: "relative" }}>
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        // style={{ height: "100%" }}
      >
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            style={{ position: "relative", width: "100%", height: "800%" }}
          >
            <ArtworkCard artwork={artwork} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

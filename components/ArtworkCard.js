import Image from 'next/image'

export default function ArtworkCard({ artwork }) {
  return (
    <div>
      <Image src={artwork.image} alt={artwork.title} width={500} height={500} />
      <h2>{artwork.title}</h2>
      <p>{artwork.artist}</p>
    </div>
  )
}
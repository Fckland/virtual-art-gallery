import Head from 'next/head'
import ArtworkCard from '../components/ArtworkCard'

export default function Gallery() {
  // This is just dummy data
  const artworks = [
    { id: 1, title: 'Artwork 1', artist: 'Artist 1', image: '../images/1.avif' },
    { id: 2, title: 'Artwork 2', artist: 'Artist 2', image: '../images/2.avif' },
    // Add more artworks here
  ]

  return (
    <div>
      <Head>
        <title>Virtual Art Gallery</title>
      </Head>

      <main>
        <h1>Welcome to the Virtual Art Gallery</h1>
        {artworks.map(artwork => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </main>
    </div>
  )
}
const images = [
  { src: '/images/Resturent.png', alt: 'Restaurant Interior' },
  { src: '/images/Gallery.png', alt: 'Gallery View 1' },
  { src: '/images/Gallery2.png', alt: 'Gallery View 2' },
  { src: '/images/Gallery3.png', alt: 'Gallery View 3' },
  { src: '/images/Briyani.png', alt: 'Special Biryani' },
  { src: '/images/Tikka.png', alt: 'Special Tikka' },
  { src: '/images/Gallery4.png', alt: 'Butter Garlic Naan' },
  { src: '/images/Spring Rolls.png', alt: 'Crispy Spring Rolls' },
  { src: '/images/Pepperoni Pizza.png', alt: 'Classic Pepperoni Pizza' },
  { src: '/images/Gallery5.png', alt: 'Royal Mango Lassi' },
  { src: '/images/Gulab Jamun.png', alt: 'Royal Gulab Jamun' },
  { src: '/images/Chocolate Brownie.png', alt: 'Sizzling Brownie' }
];

function Gallery() {
  return (
    <main>
      <section className="page-header" style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
        <h1>Photo Gallery</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          A glimpse into our ambiance and culinary creations.
        </p>
      </section>

      <section className="gallery-section" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Gallery;

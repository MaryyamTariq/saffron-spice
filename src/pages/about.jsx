function About() {
  return (
    <main>
      <section className="page-header" style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
        <h1>Our Story</h1>
      </section>

      <section
        className="about-section"
        style={{
          maxWidth: '1000px',
          margin: '2rem auto',
          padding: '0 1rem',
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <div className="about-img" style={{ flex: 1, minWidth: '300px' }}>
          <img
            src="/images/cheif.png"
            alt="Chef preparing food in kitchen"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        <div className="about-text" style={{ flex: 1, minWidth: '300px' }}>
          <h2>Tradition Meets Passion</h2>
          <p style={{ marginBottom: '1rem' }}>
            Founded in 2020, Saffron Spice was born out of a deep love for
            authentic culinary traditions. We believe that great food starts
            with fresh, locally sourced ingredients and a commitment to heritage recipes.
          </p>
          <p>
            Every dish we serve tells a story of culture, flavor, and dedication,
            crafted to give you a warm and unforgettable dining experience right
            in the heart of the city.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Culinary Heritage</h2>
            <p>
              Founded with a passion for authentic culinary traditions, Saffron
              Spice has been serving handcrafted meals made from age-old recipes.
              We believe that great food starts with genuine ingredients, a
              dedicated kitchen, and a welcoming atmosphere for every guest.
            </p>
            <p>
              Every dish is thoughtfully prepared using aromatic heritage spices
              and locally sourced organic produce, ensuring that each bite brings
              a true taste of royal tradition straight to your table.
            </p>
            <a href="/about" className="btn-secondary">Discover Our Full Story</a>
          </div>
          <div className="about-features-grid">
            <div className="about-card">
              <h3>15+ Years</h3>
              <p>Of serving authentic culinary excellence and unforgettable dining experiences.</p>
            </div>
            <div className="about-card">
              <h3>Handpicked Spices</h3>
              <p>Imported and ground fresh daily to maintain rich flavors and aromas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
function Home() {
  return (
    <main>
      <section
        className="hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/Resturent.png') center/cover`
        }}
      >
        <div className="hero-content">
          <h1>Experience Authentic Flavors</h1>
          <p>Fresh ingredients, traditional recipes, and a warm cozy atmosphere.</p>
          <a href="/menu" className="btn-primary">Explore Menu</a>
        </div>
      </section>

      <section className="about-teaser">
        <div className="about-content">
          <h2>Welcome to Saffron Spice</h2>
          <p>
            We bring the finest traditional recipes straight to your table,
            crafted with passion, heritage spices, and fresh organic ingredients.
          </p>
          <a href="/about" className="btn-secondary">Read Our Story</a>
        </div>
      </section>

      <section className="featured-dishes">
        <h2>Our Signature Dishes</h2>
        <div className="dish-grid">
          <div className="dish-card">
            <img src="/images/Buffer.png" alt="Butter Chicken" />
            <h3>Shahi Butter Chicken</h3>
            <p>Tender chicken cooked in a rich, creamy tomato gravy.</p>
          </div>
          <div className="dish-card">
            <img src="/images/Briyani.png" alt="Biryani" />
            <h3>Hyderabadi Biryani</h3>
            <p>Aromatic basmati rice layered with spiced meat and herbs.</p>
          </div>
          <div className="dish-card">
            <img src="/images/Tikka.png" alt="Chicken Tikka" />
            <h3>Chicken Tikka</h3>
            <p>Juicy minced meat skewers grilled to smoky perfection.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="features-container">
          <h2>Why Dine With Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Master Chefs</h3>
              <p>Decades of culinary expertise crafting authentic royal tastes.</p>
            </div>
            <div className="feature-item">
              <h3>Fresh Ingredients</h3>
              <p>Locally sourced organic produce and premium handpicked spices.</p>
            </div>
            <div className="feature-item">
              <h3>Cozy Ambiance</h3>
              <p>An elegant, welcoming space perfect for family and friends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-slide active">
            <p>"The best butter chicken I've ever had! Absolute perfection."</p>
            <span>- Rahul S.</span>
          </div>
          <div className="testimonial-slide">
            <p>"Amazing ambiance and wonderful service. Highly recommended!"</p>
            <span>- Priya M.</span>
          </div>
        </div>
      </section>

      <section className="cta-reservation">
        <div className="cta-content">
          <h2>Come Dine With Us</h2>
          <p>Experience an unforgettable culinary journey. Reserve your table today!</p>
          <a href="/contact" className="btn-primary">Book a Table</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
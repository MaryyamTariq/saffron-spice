const menuItems = [
  { img: '/images/Buffer.png', name: 'Butter Chicken', price: '$18.99', desc: 'Tender chicken simmered in a rich, velvety tomato and butter gravy.' },
  { img: '/images/Tikka.png', name: 'Chicken Tikka Masala', price: '$16.50', desc: 'Grilled chicken pieces tossed in a spicy, aromatic onion-tomato masala.' },
  { img: '/images/Briyani.png', name: 'Hyderabadi Biryani', price: '$15.99', desc: 'Fragrant basmati rice layered with spiced marinated meat and saffron.' },
  { img: '/images/Gallery4.png', name: 'Butter Garlic Naan', price: '$4.99', desc: 'Freshly baked flatbread brushed with garlic butter and fresh herbs.' },
  { img: '/images/Spring Rolls.png', name: 'Crispy Spring Rolls', price: '$7.99', desc: 'Golden, crispy rolls stuffed with seasoned fresh vegetables and served with sweet chili dip.' },
  { img: '/images/Pepperoni Pizza.png', name: 'Classic Pepperoni Pizza', price: '$14.99', desc: 'Hand-tossed crust topped with rich tomato sauce, melted mozzarella, and savory pepperoni.' },
  { img: '/images/Gallery5.png', name: 'Royal Mango Lassi', price: '$5.50', desc: 'A refreshing, creamy yogurt-based sweet drink blended with fresh mango pulp.' },
  { img: '/images/Gulab Jamun.png', name: 'Royal Gulab Jamun', price: '$6.99', desc: 'Golden-fried milk solid dumplings soaked in a warm, cardamom-infused rose sugar syrup.' },
  { img: '/images/Chocolate Brownie.png', name: 'Sizzling Brownie', price: '$6.50', desc: 'Warm, fudgy chocolate brownie topped with a scoop of rich vanilla ice cream and hot fudge.' }
];

function Menu() {
  return (
    <main>
      <section className="page-header" style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
        <h1>Our Signature Menu</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Explore our freshly prepared dishes crafted with authentic spices.
        </p>
      </section>

      <section className="menu-section" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <div className="menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {menuItems.map((item, i) => (
            <article key={i} className="menu-card" style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              paddingBottom: '1.5rem'
            }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem 1.5rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{item.name}</h3>
                  <span style={{ color: '#e67e22', fontWeight: 'bold' }}>{item.price}</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
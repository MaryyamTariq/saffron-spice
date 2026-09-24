import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert(`Thank you ${form.name}, your message has been sent!`);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 500
  };

  return (
    <main>
      <section className="page-header" style={{ textAlign: 'center', padding: '3rem 1rem 1rem' }}>
        <h1>Get in Touch</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          We would love to hear from you or reserve a table for your next visit.
        </p>
      </section>

      <section className="contact-section" style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem 4rem' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={labelStyle}>Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={labelStyle}>Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={labelStyle}>Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..... "
              required
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#e67e22',
              color: 'white',
              border: 'none',
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
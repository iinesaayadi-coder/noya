import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Parlons<br />
              <span className="accent-text">ensemble</span>
            </h2>
            <p className="contact-desc">
              Une question, une suggestion, ou envie de distribuer Noya dans votre région ? Nous sommes là pour vous.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Adresse</strong>
                  <p>Seliana, Tunisie</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <p>hello@noya.tn</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon">📱</div>
                <div>
                  <strong>Téléphone</strong>
                  <p>+216 70 000 000</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Votre message..."
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className={`btn-primary form-submit ${sent ? 'sent' : ''}`}>
                {sent ? '✓ Message envoyé !' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.015;
      el.style.transform = `translateY(${Math.sin(t) * 12}px) rotate(${Math.sin(t * 0.5) * 2}deg)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1"></div>
        <div className="hero-blob blob2"></div>
        <div className="hero-blob blob3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            100% Naturel · Made in Tunisia
          </div>
          <h1 className="hero-title">
            L'énergie<br />
            <span className="hero-title-accent">de la nature,</span><br />
            à chaque gorgée.
          </h1>
          <p className="hero-subtitle">
            Noya combine les saveurs authentiques du miel, des dattes et des fruits frais pour une boisson énergisante sans compromis.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={scrollToProducts}>
              Découvrir la gamme
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Notre histoire
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Saveurs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">Additifs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Naturel</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" ref={canRef}>
          <div className="can-showcase">
            <div className="can-glow honey-glow"></div>
            <img
              src="https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Noya Energy Drink"
              className="hero-product-img"
            />
          </div>
          <div className="floating-badge fb1">🍯 Honey</div>
          <div className="floating-badge fb2">🌿 Mint</div>
          <div className="floating-badge fb3">🍓 Berry</div>
        </div>
      </div>

      <div className="hero-features">
        <div className="feature-item">
          <span className="feature-icon">🌿</span>
          <span>100% Naturel</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⚡</span>
          <span>Énergie Naturelle</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🎨</span>
          <span>Sans Colorants</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💧</span>
          <span>Sans Conservateurs</span>
        </div>
      </div>
    </section>
  );
}

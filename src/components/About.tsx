import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`about-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-wrap">
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ingrédients naturels Noya"
                className="about-img"
              />
              <div className="about-img-overlay"></div>
              <div className="about-img-badge">
                <span>Fondé en 2024</span>
                <strong>Tunis, Tunisie</strong>
              </div>
            </div>
            <div className="about-floater">
              <img
                src="https://images.pexels.com/photos/1350245/pexels-photo-1350245.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Miel naturel"
                className="floater-img"
              />
            </div>
          </div>

          <div className="about-text">
            <div className="section-tag">Notre Histoire</div>
            <h2 className="section-title">
              Nés du soleil,<br />
              <span className="accent-text">nourris par la terre</span>
            </h2>
            <p className="about-description">
              Noya est née d'une conviction simple : l'énergie la plus pure vient de la nature. Inspirés par la richesse des saveurs tunisiennes — le miel du Jebel, les dattes de Tozeur, la menthe fraîche des marchés — nous avons créé une boisson qui célèbre notre héritage tout en nourrissant le corps.
            </p>
            <p className="about-description">
              Chaque canette Noya est une promesse : zéro compromis sur la qualité, zéro additif artificiel, et 100% de saveur authentique. Notre formule exclusive combine les meilleurs ingrédients naturels pour une énergie propre et durable.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon" style={{ background: 'linear-gradient(135deg, #FFF3CD, #F5B830)' }}>🍯</div>
                <div>
                  <strong>Miel Authentique</strong>
                  <p>Sélectionné auprès d'apiculteurs locaux tunisiens</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon" style={{ background: 'linear-gradient(135deg, #EFEBE9, #8D6E63)' }}>🌴</div>
                <div>
                  <strong>Dattes de Tozeur</strong>
                  <p>La meilleure datte du monde, reconnue mondialement</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon" style={{ background: 'linear-gradient(135deg, #E8F5E9, #66BB6A)' }}>🌿</div>
                <div>
                  <strong>Herbes Fraîches</strong>
                  <p>Menthe, basilic et plantes aromatiques locales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

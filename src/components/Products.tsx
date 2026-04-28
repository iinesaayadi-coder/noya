import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
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
    <section id="products" className={`products-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Notre Gamme</div>
          <h2 className="section-title">
            Chaque saveur,<br />
            <span className="accent-text">une émotion</span>
          </h2>
          <p className="section-subtitle">
            Six boissons énergisantes naturelles, inspirées des meilleures saveurs de la Méditerranée et d'Afrique du Nord.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="products-footer-banner">
          <div className="banner-item">
            <span>🌿</span>
            <div>
              <strong>100% Naturel</strong>
              <p>Sans additifs chimiques</p>
            </div>
          </div>
          <div className="banner-item">
            <span>⚡</span>
            <div>
              <strong>Énergie Durable</strong>
              <p>Formule à libération lente</p>
            </div>
          </div>
          <div className="banner-item">
            <span>🌍</span>
            <div>
              <strong>Origine Tunisie</strong>
              <p>Ingrédients locaux sélectionnés</p>
            </div>
          </div>
          <div className="banner-item">
            <span>🏆</span>
            <div>
              <strong>Certifié Premium</strong>
              <p>Qualité contrôlée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

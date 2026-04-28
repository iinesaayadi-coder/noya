import { useState } from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="product-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="product-card-inner" style={{ background: product.bgGradient }}>
        <div className="product-top">
          <div className="product-badge" style={{ color: product.color, borderColor: product.color }}>
            {product.emoji} {product.flavor}
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }}
          />
          <div className="product-can-visual">
            <div className="can-color-top" style={{ background: product.color }}></div>
            <div className="can-body">
              <div className="can-brand">NOYA</div>
              <div className="can-flavor" style={{ color: product.color }}>{product.flavor}</div>
              <div className="can-lightning">⚡</div>
              <div className="can-ml">250 ml</div>
            </div>
          </div>
        </div>

        <div className="product-info">
          <h3 className="product-name" style={{ color: product.textColor }}>{product.name}</h3>
          <p className="product-tagline" style={{ color: product.color }}>{product.tagline}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-footer">
            <div className="product-price" style={{ color: product.textColor }}>
              <span className="price-value">{product.price.toFixed(2)}</span>
              <span className="price-currency">DT</span>
            </div>
            <button
              className={`add-to-cart-btn ${added ? 'added' : ''}`}
              style={{
                background: added ? '#22c55e' : product.color,
                boxShadow: `0 4px 20px ${product.color}50`
              }}
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Ajouté !
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Ajouter
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>
            Mon Panier
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </h3>
          <button className="cart-close" onClick={() => setIsOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Votre panier est vide</p>
              <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => { setIsOpen(false); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Découvrir nos produits
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-can" style={{ background: item.bgGradient }}>
                    <div className="mini-can-top" style={{ background: item.color }}></div>
                    <div className="mini-can-brand">NOYA</div>
                    <div className="mini-can-flavor" style={{ color: item.color }}>{item.flavor}</div>
                  </div>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <div className="cart-item-price">{item.price.toFixed(2)} DT</div>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-total">{(item.price * item.quantity).toFixed(2)} DT</span>
                    <button className="cart-item-remove" onClick={() => removeItem(item.id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Sous-total</span>
              <span>{totalPrice.toFixed(2)} DT</span>
            </div>
            <div className="cart-shipping">
              <span>Livraison</span>
              <span className="free-shipping">Gratuite</span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>{totalPrice.toFixed(2)} DT</span>
            </div>
            <button className="btn-primary checkout-btn">
              Commander maintenant
            </button>
            <button className="clear-cart-btn" onClick={clearCart}>
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  );
}

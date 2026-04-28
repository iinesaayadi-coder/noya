export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">NOYA</div>
            <p>L'énergie naturelle pour les esprits libres. Fait avec amour en Tunisie.</p>
            <div className="footer-flags">🇹🇳 Made in Tunisia</div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#products">Produits</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Produits</h4>
            <ul>
              <li><a href="#products">Noya Honey</a></li>
              <li><a href="#products">Noya Berry</a></li>
              <li><a href="#products">Noya Mint</a></li>
              <li><a href="#products">Noya Lemon</a></li>
              <li><a href="#products">Noya Vanilla</a></li>
              <li><a href="#products">Noya Date</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Légal</h4>
            <ul>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Noya Energy. Tous droits réservés.</p>
          <p className="footer-tagline">L'énergie de la nature, à chaque gorgée. ⚡</p>
        </div>
      </div>
    </footer>
  );
}

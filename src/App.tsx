import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

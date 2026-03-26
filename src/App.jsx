import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col" style={{ minHeight: '100vh' }}>
            <Header />
            <CartDrawer />
            <main style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

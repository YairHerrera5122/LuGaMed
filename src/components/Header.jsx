import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartCount, setIsCartOpen } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'var(--white)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="LuGaMed Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="font-bold hover:text-primary" style={{ color: 'var(--black)' }}>Inicio</Link>
          <Link to="/nosotros" className="font-bold hover:text-primary" style={{ color: 'var(--black)' }}>Nosotros</Link>
          <Link to="/catalogo" className="font-bold hover:text-primary" style={{ color: 'var(--black)' }}>Catálogo</Link>
          <Link to="/contacto" className="font-bold hover:text-primary" style={{ color: 'var(--black)' }}>Contacto</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} style={{ position: 'relative', padding: '0.5rem' }}>
            <ShoppingCart size={24} color="var(--primary)" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: 0, right: 0, 
                backgroundColor: 'var(--primary)', color: 'var(--white)',
                borderRadius: '50%', width: '20px', height: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--white)', borderTop: '1px solid var(--border)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
          <Link to="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
          <Link to="/catalogo" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</Link>
          <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
};
export default Header;

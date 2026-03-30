import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: '#000000', paddingTop: '3rem', paddingBottom: '1.5rem' }}>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <Link to="/" className="flex items-center mb-4" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="LuGaMed Logo" style={{ height: '95px', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} />
          </Link>
          <p style={{ opacity: 0.8 }}>Tu tienda de confianza en insumos médicos, enfermería y tecnología. Calidad y servicio para profesionales de la salud.</p>
        </div>

        <div>
          <h3>Enlaces Rápidos</h3>
          <div className="flex flex-col gap-2 mt-4">
            <Link to="/nosotros" style={{ opacity: 0.8 }}>Nosotros</Link>
            <Link to="/catalogo" style={{ opacity: 0.8 }}>Catálogo de Productos</Link>
            <Link to="/contacto" style={{ opacity: 0.8 }}>Contacto</Link>
            <Link to="/admin" style={{ opacity: 0.8 }}>Acceso Administrador</Link>
          </div>
        </div>

        <div>
          <h3>Contacto</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2" style={{ opacity: 0.8 }}><Phone size={16} /> +54 9 297 544-0834</div>
            <div className="flex items-center gap-2" style={{ opacity: 0.8 }}><Mail size={16} /> luga.medstore@gmail.com</div>
            <div className="flex items-center gap-2" style={{ opacity: 0.8 }}><Camera size={16} /> @lugamed.ok</div>
            <div className="flex items-center gap-2" style={{ opacity: 0.8 }}><MapPin size={16} /> Buenos Aires, Argentina</div>
          </div>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem', textAlign: 'center', opacity: 0.8, fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} LuGaMed - Insumos Médicos y Tecnología. Todos los derechos reservados.
      </div>
    </footer>
  );
};
export default Footer;
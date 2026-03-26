import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useContext(ProductContext);
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--primary)', color: 'var(--white)',
        padding: '5rem 1rem', textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Tu Aliado en Salud y Tecnología
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            Insumos médicos, equipamiento de enfermería y tecnología de primer nivel para profesionales que cuidan vidas.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/catalogo" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '0.75rem 1.5rem' }}>
              Ver Catálogo <ArrowRight size={18} />
            </Link>
            <Link to="/contacto" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)', padding: '0.75rem 1.5rem' }}>
              Contactanos
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center" style={{ padding: '2rem 1rem' }}>
          <div className="p-4">
            <ShieldCheck size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h3>Calidad Garantizada</h3>
            <p className="text-muted">Productos certificados para el uso profesional y doméstico.</p>
          </div>
          <div className="p-4">
            <Truck size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h3>Envíos a todo el país</h3>
            <p className="text-muted">Recibí tu pedido de forma rápida y segura en tu domicilio.</p>
          </div>
          <div className="p-4">
            <Clock size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h3>Atención 24/7</h3>
            <p className="text-muted">Asesoramiento personalizado por profesionales de la salud.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container">
        <div className="flex justify-between items-center mb-8">
          <h2>Productos Destacados</h2>
          <Link to="/catalogo" className="text-primary font-bold flex items-center gap-1 hover:underline">
            Ver Todos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;

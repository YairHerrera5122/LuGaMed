import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { generateProductWhatsAppLink } from '../utils/whatsapp';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="card flex flex-col h-full">
      <div style={{ padding: '1rem', backgroundColor: 'var(--white)', display: 'flex', justifyContent: 'center' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      </div>
      <div className="p-4 flex flex-col" style={{ flexGrow: 1, borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {product.category}
        </span>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{product.name}</h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', flexGrow: 1 }}>{product.description}</p>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
          {formatPrice(product.price)}
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-primary w-full" onClick={() => addToCart(product)}>
            <ShoppingCart size={18} /> Agregar al carrito
          </button>
          <a href={generateProductWhatsAppLink(product)} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full" style={{ padding: '0.5rem' }}>
            <MessageCircle size={18} /> Consultar
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

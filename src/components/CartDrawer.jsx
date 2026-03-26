import { useContext } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  if (!isCartOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <>
      <div 
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div 
        style={{ 
          position: 'fixed', right: 0, top: 0, bottom: 0, 
          width: '100%', maxWidth: '400px', 
          backgroundColor: 'var(--white)', zIndex: 50,
          boxShadow: 'var(--shadow-lg)',
          display: 'flex', flexDirection: 'column'
        }}
      >
        <div className="p-4 flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: 0 }}>Tu Carrito</h2>
          <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
        </div>

        <div className="p-4 flex-col gap-4" style={{ flexGrow: 1, overflowY: 'auto', display: 'flex' }}>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted" style={{ marginTop: '2rem' }}>El carrito está vacío.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 items-center" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>{formatPrice(item.price)}</div>
                  <div className="flex items-center gap-2">
                    <button className="btn btn-outline" style={{ padding: '0.2rem' }} onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-outline" style={{ padding: '0.2rem' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ color: '#dc3545' }}><Trash2 size={20} /></button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4" style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--light-gray)' }}>
            <div className="flex justify-between items-center font-bold mb-4" style={{ fontSize: '1.25rem' }}>
              <span>Total:</span>
              <span style={{ color: 'var(--primary)' }}>{formatPrice(cartTotal)}</span>
            </div>
            <a 
              href={generateWhatsAppLink(cartItems, cartTotal)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn w-full"
              style={{ backgroundColor: '#25D366', color: 'white', padding: '1rem' }}
              onClick={() => setIsCartOpen(false)}
            >
              <MessageCircle size={20} /> Finalizar Compra
            </a>
          </div>
        )}
      </div>
    </>
  );
};
export default CartDrawer;

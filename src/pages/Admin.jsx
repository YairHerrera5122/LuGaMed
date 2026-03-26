import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const Admin = () => {
  const { products, addProduct, editProduct, deleteProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentProduct({ name: '', price: '', category: 'Insumos médicos', description: '', image: '' });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentProduct.id) {
      editProduct(currentProduct.id, { ...currentProduct, price: Number(currentProduct.price) });
    } else {
      addProduct({ ...currentProduct, price: Number(currentProduct.price) });
    }
    setIsEditing(false);
    setCurrentProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      deleteProduct(id);
    }
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Panel de Administración</h1>
          <p className="text-muted">Gestiona el inventario de LuGaMed</p>
        </div>
        <button className="btn btn-primary" onClick={handleAddNew} style={{ padding: '0.75rem 1.5rem' }}>
          <Plus size={20} /> Nuevo Producto
        </button>
      </div>

      <div className="card overflow-hidden">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--light-gray)', borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '1.25rem 1rem', width: '80px' }}>Imagen</th>
                <th style={{ padding: '1.25rem 1rem' }}>Nombre</th>
                <th style={{ padding: '1.25rem 1rem' }}>Categoría</th>
                <th style={{ padding: '1.25rem 1rem' }}>Precio</th>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="hover" style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s' }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--light-gray)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{product.name}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', backgroundColor: 'var(--secondary)', color: 'var(--primary)', padding: '0.35rem 0.6rem', borderRadius: '16px', fontWeight: 'bold' }}>
                      {product.category}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>{formatPrice(product.price)}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <div className="flex justify-end gap-2">
                      <button className="btn btn-outline" style={{ padding: '0.5rem' }} onClick={() => handleEditClick(product)}>
                        <Edit size={18} />
                      </button>
                      <button className="btn btn-outline" style={{ padding: '0.5rem', color: '#dc3545', borderColor: '#f8d7da', backgroundColor: '#fff5f5' }} onClick={() => handleDelete(product.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-8 text-muted">No hay productos en el catálogo.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isEditing && currentProduct && (
        <>
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 100, backdropFilter: 'blur(2px)' }} onClick={() => setIsEditing(false)}></div>
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', width: '90%', maxWidth: '600px', zIndex: 110, maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-lg)' }}>
            <div className="flex justify-between items-center mb-6 border-b pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
              <h2 style={{ marginBottom: 0 }}>{currentProduct.id ? 'Editar Producto' : 'Crear Nuevo Producto'}</h2>
              <button onClick={() => setIsEditing(false)} className="text-muted hover:text-black transition">
                <X size={28} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="flex flex-col gap-5">
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nombre del producto</label>
                <input type="text" required value={currentProduct.name} onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Precio (ARS)</label>
                  <input type="number" required value={currentProduct.price} onChange={e => setCurrentProduct({...currentProduct, price: e.target.value})} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Categoría</label>
                  <select required value={currentProduct.category} onChange={e => setCurrentProduct({...currentProduct, category: e.target.value})} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
                    <option value="Insumos médicos">Insumos médicos</option>
                    <option value="Insumos de enfermería">Insumos de enfermería</option>
                    <option value="Equipamiento médico">Equipamiento médico</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Productos varios">Productos varios</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>URL de Imagen</label>
                <input type="url" required value={currentProduct.image} onChange={e => setCurrentProduct({...currentProduct, image: e.target.value})} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} placeholder="https://ejemplo.com/imagen.jpg" />
                {currentProduct.image && (
                  <div className="mt-2" style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                    <img src={currentProduct.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                )}
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Descripción</label>
                <textarea required rows={4} value={currentProduct.description} onChange={e => setCurrentProduct({...currentProduct, description: e.target.value})} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', resize: 'vertical' }}></textarea>
              </div>
              
              <div className="flex gap-4 mt-2 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <button type="button" className="btn btn-outline w-full" onClick={() => setIsEditing(false)} style={{ padding: '0.875rem' }}>Cancelar</button>
                <button type="submit" className="btn btn-primary w-full" style={{ padding: '0.875rem' }}><Save size={20} /> Guardar Producto</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default Admin;

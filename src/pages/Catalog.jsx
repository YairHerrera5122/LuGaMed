import { useContext, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8">
      <h1 className="mb-8">Catálogo de Productos</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside style={{ width: '100%', maxWidth: '280px', flexShrink: 0 }}>
          <div className="card p-6" style={{ position: 'sticky', top: '90px' }}>
            <div className="flex items-center gap-2 mb-6 font-bold text-primary" style={{ fontSize: '1.25rem' }}>
              <Filter size={20} /> Filtros
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <div className="flex items-center gap-2" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.75rem', backgroundColor: 'var(--light-gray)' }}>
                <Search size={18} className="text-muted" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent' }}
                />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--dark-gray)' }}>Categorías</h4>
              <div className="flex flex-col gap-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer" style={{ fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="category" 
                      checked={categoryFilter === cat}
                      onChange={() => setCategoryFilter(cat)}
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    {cat === 'All' ? 'Todas las categorías' : cat}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div style={{ flexGrow: 1 }}>
          <div className="mb-6 text-muted border-b pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
            Mostrando <b>{filteredProducts.length}</b> productos en el catálogo
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="card p-12 text-center flex flex-col items-center justify-center">
              <Search size={48} className="text-muted mb-4" opacity={0.5} />
              <h3 className="mb-2">No encontramos resultados</h3>
              <p className="text-muted mb-6 max-w-md">No se encontraron productos que coincidan con tu búsqueda o filtros seleccionados.</p>
              <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setCategoryFilter('All'); }}>
                Limpiar Filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Catalog;

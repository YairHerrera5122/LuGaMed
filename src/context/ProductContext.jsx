import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const initialProducts = [
  { id: 1, name: 'Estetoscopio Littmann Classic III', price: 125000, category: 'Insumos médicos', description: 'Alta sensibilidad acústica y campana de doble cara para estudiantes y profesionales.', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Tensiómetro Digital Omron', price: 85000, category: 'Equipamiento médico', description: 'Monitor de presión arterial de brazo automático y preciso.', image: 'https://images.unsplash.com/photo-1628177142898-93e46e61f23c?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Termómetro Infrarrojo', price: 25000, category: 'Tecnología', description: 'Medición rápida y sin contacto de temperatura corporal y superficies.', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Kit de Enfermería Básico', price: 45000, category: 'Insumos de enfermería', description: 'Incluye tijera, pinza, linterna clínica y torniquete. Ideal para prácticas.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Oxímetro de Pulso', price: 18000, category: 'Tecnología', description: 'Mide la saturación de oxígeno en sangre y la frecuencia cardíaca al instante.', image: 'https://images.unsplash.com/photo-1631815587646-b85a1bb02246?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Uniforme Spandex Antifluido', price: 35000, category: 'Productos varios', description: 'Comodidad, elasticidad y protección avanzada para largas jornadas de trabajo.', image: 'https://plus.unsplash.com/premium_photo-1664303350278-f7b57b4c4fae?auto=format&fit=crop&q=80&w=400' }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('lugamed_products');
    if (saved) {
      return JSON.parse(saved);
    }
    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('lugamed_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const editProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

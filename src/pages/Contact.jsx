import { MapPin, Phone, Mail, Camera, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container py-8 md:py-16">
      <div className="text-center mb-16" style={{ maxWidth: '700px', margin: '0 auto 4rem auto' }}>
        <h1 className="mb-4 text-primary" style={{ fontSize: '2.5rem' }}>Contacto</h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
          Estamos aquí para asesorarte. Contáctanos por el medio que prefieras y te responderemos a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card p-8">
          <h2 className="mb-6" style={{ fontSize: '1.75rem' }}>Envianos un mensaje</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado (Simulado)'); }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nombre Completo</label>
              <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
              <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Asunto / Consulta</label>
              <textarea required rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.125rem' }}>
              <Send size={20} /> Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-6" style={{ fontSize: '1.75rem' }}>Información</h2>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5492975440834" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 card hover:border-primary transition" style={{ boxShadow: 'none', border: '1px solid var(--border)' }}>
                <Phone size={24} color="var(--primary)" style={{ marginTop: '4px' }} />
                <div>
                  <h4 className="mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-muted">+54 9 11 1234-5678</p>
                </div>
              </a>
              
              <a href="mailto:hola@lugamed.com" className="flex items-start gap-4 p-4 card hover:border-primary transition" style={{ boxShadow: 'none', border: '1px solid var(--border)' }}>
                <Mail size={24} color="var(--primary)" style={{ marginTop: '4px' }} />
                <div>
                  <h4 className="mb-1">Correo Electrónico</h4>
                  <p className="text-muted">hola@lugamed.com</p>
                </div>
              </a>
              
              <a href="https://instagram.com/lugamed.ok" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 card hover:border-primary transition" style={{ boxShadow: 'none', border: '1px solid var(--border)' }}>
                <Camera size={24} color="var(--primary)" style={{ marginTop: '4px' }} />
                <div>
                  <h4 className="mb-1">Instagram</h4>
                  <p className="text-muted">@lugamed.ok</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 p-4 card" style={{ boxShadow: 'none', border: '1px solid var(--border)' }}>
                <MapPin size={24} color="var(--primary)" style={{ marginTop: '4px' }} />
                <div>
                  <h4 className="mb-1">Ubicación</h4>
                  <p className="text-muted">Av. Corrientes 1234, CABA, Argentina</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card overflow-hidden" style={{ height: '250px', border: '1px solid var(--border)', boxShadow: 'none' }}>
            {/* Simulating a map */}
            <div style={{ width: '100%', height: '100%', backgroundColor: '#e5e3df', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={48} color="var(--primary)" className="mb-2" />
              <span className="font-bold text-muted">Mapa Interactivo simulado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

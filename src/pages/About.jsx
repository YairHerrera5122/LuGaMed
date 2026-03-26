import { Users, HeartPulse, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="container py-8 md:py-16">
      <div className="text-center mb-16" style={{ maxWidth: '700px', margin: '0 auto 4rem auto' }}>
        <h1 className="mb-4 text-primary" style={{ fontSize: '2.5rem' }}>Sobre Nosotros</h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
          Llevamos calidad, confianza y vocación a las manos de quienes cuidan la salud a diario.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="mb-6" style={{ fontSize: '2rem' }}>Nuestra Historia</h2>
          <p className="mb-4 text-dark-gray" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            <b>LuGaMed</b> nació como un emprendimiento impulsado por estudiantes y jóvenes profesionales 
            de la salud. Conocemos de primera mano las necesidades del sector, la importancia de contar
            con herramientas confiables y el impacto directo que tienen en el cuidado de los pacientes.
          </p>
          <p className="text-dark-gray" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Comenzamos ofreciendo kits básicos para nuestros propios compañeros de cursada y colegas. 
            Con el tiempo, gracias a la confianza y recomendación, expandimos nuestro catálogo para 
            incluir insumos especializados, tecnología de monitoreo y equipamiento completo tanto 
            para prácticas formativas como para clínicas y hospitales.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
            alt="Profesionales de la salud" 
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card p-8 text-center" style={{ borderTop: '4px solid var(--primary)' }}>
          <HeartPulse size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Misión</h3>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            Proveer a profesionales de la salud y estudiantes con insumos y tecnología de la más 
            alta calidad, facilitando su labor diaria y priorizando el bienestar del paciente.
          </p>
        </div>
        
        <div className="card p-8 text-center" style={{ borderTop: '4px solid var(--secondary)' }}>
          <Sparkles size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Visión</h3>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            Ser la empresa líder y de mayor confianza en la distribución de insumos médicos y 
            equipamiento a nivel nacional, reconocida por nuestra atención empática y profesional.
          </p>
        </div>
        
        <div className="card p-8 text-center" style={{ borderTop: '4px solid var(--dark-gray)' }}>
          <Users size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Valores</h3>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            Empatía, compromiso constante, excelencia, innovación y un profundo respeto por la 
            vocación de quienes elijen el área de salud como su camino de vida.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

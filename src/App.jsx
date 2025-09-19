import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (section) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h3>Dra. María Andrea Esparza</h3>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>Acerca de</button></li>
            <li><button onClick={() => scrollToSection('specialties')} className={activeSection === 'specialties' ? 'active' : ''}>Especialidades</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Dra. María Andrea Esparza</h1>
            <p className="subtitle">Directora Adjunta – Instituto de Derecho Internacional Privado</p>
            <p className="description">Especialista en derecho de familia y sucesiones nacional e internacional. Adopción, divorcio, alimentos, cuidado personal de hijos, régimen de comunicación, restitución internacional de menores y sucesiones. Combino la práctica jurídica con la docencia universitaria.</p>
            <button onClick={() => scrollToSection('contact')} className="cta-button">Solicitar Consulta</button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>👩‍⚖️</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>Trayectoria Profesional</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2008 - Presente</div>
              <div className="timeline-content">
                <h3>Directora Adjunta</h3>
                <p>Instituto de Derecho Internacional Privado - Colegio de Abogados de Morón</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005 - Presente</div>
              <div className="timeline-content">
                <h3>Docente por Concurso</h3>
                <p>Universidad de Buenos Aires (UBA)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1996 - Presente</div>
              <div className="timeline-content">
                <h3>Fundadora</h3>
                <p>Estudio Jurídico Esparza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specialties" className="specialties-section">
        <div className="container">
          <h2>Áreas de Especialización</h2>
          <div className="cards-grid">
            <div className="specialty-card">
              <div className="card-icon">👪</div>
              <h3>Derecho de Familia</h3>
              <p>Divorcios, régimen de parentalidad, compensación económica y todas las cuestiones relacionadas con el derecho de familia.</p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">⚖️</div>
              <h3>Sucesiones</h3>
              <p>Testamentos, partición de bienes hereditarios y asesoramiento integral en materia sucesoria.</p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">🌐</div>
              <h3>Derecho Internacional Privado</h3>
              <p>Restitución internacional de menores, casos transfronterizos y derecho internacional privado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>Lo que dicen mis clientes</h2>
          <div className="testimonials-grid">
            <blockquote className="testimonial">
              <p>"Profesional de excelencia, claridad e integridad. Recomiendo ampliamente sus servicios."</p>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Me dio confianza desde el primer contacto. Su conocimiento y dedicación son excepcionales."</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:andrea@estudioesparza.com">andrea@estudioesparza.com</a>
              </div>
              <div className="contact-item">
                <strong>WhatsApp:</strong>
                <a href="https://wa.me/5491155617919" target="_blank" rel="noopener noreferrer">+54 9 11 5561-7919</a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/mar%C3%ADa-andrea-esparza-b478608b" target="_blank" rel="noopener noreferrer">María Andrea Esparza</a>
              </div>
              <div className="contact-item">
                <strong>Instagram:</strong>
                <a href="https://www.instagram.com/estudiojuridico.andreaesparza/" target="_blank" rel="noopener noreferrer">@estudiojuridico.andreaesparza</a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo electrónico" required />
              <textarea placeholder="Describe tu consulta" rows="5" required></textarea>
              <button type="submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Dra. María Andrea Esparza – Estudio Jurídico Esparza. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20me%20gustaría%20solicitar%20una%20consulta%20legal."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
      </a>
    </div>
  )
}

export default App

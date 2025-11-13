<script>
  import { Rocket, Heart, Facebook, Instagram, Phone, Mail } from 'lucide-svelte';
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <div class="logo">
          <Rocket size={28} color="#4361ee" />
          <h3>RoboKids</h3>
        </div>
        <p>Academia de robótica para niños de 4 a 12 años. Donde el aprendizaje se encuentra con la diversión.</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Contacto Rápido</h4>
        <div class="contact-links">
          <a href="tel:+5491112345678">
            <Phone size={16} />
            +54 9 11 1234-5678
          </a>
          <a href="mailto:info@robokids.com">
            <Mail size={16} />
            info@robokids.com
          </a>
          <a href="https://wa.me/5491112345678" target="_blank">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Edades</h4>
        <ul>
          <li>👶 4-6 años</li>
          <li>👦 7-9 años</li>
          <li>👱 10-12 años</li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>
        Hecho con <Heart size={16} color="#e25555" /> para futuros ingenieros
      </p>
      <p>&copy; 2024 RoboKids. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--gray-dark);
    color: white;
    padding: 3rem 0 1rem 0;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
  }
  
  .logo h3 {
    color: white;
    margin: 0;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    color: white;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: var(--primary-green);
  }
  
  .footer-section h4 {
    color: var(--primary-green);
    margin-bottom: 1rem;
  }
  
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .contact-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-links a:hover {
    color: var(--primary-green);
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-bottom p {
    margin: 0;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
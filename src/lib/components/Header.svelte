<script>
  import { Rocket } from 'lucide-svelte';
</script>

<header>
  <div class="container">
    <div class="logo">
      <Rocket size={32} color="#4361ee" />
      <h1>RoboKids</h1>
    </div>
    <nav>
      <a href="#horario">Horarios</a>
      <a href="#contacto">Inscripción</a>
      <a href="tel:+5491112345678" class="btn btn-primary">Llamar Ahora</a>
    </nav>
  </div>
</header>

<style>
  header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  }
  
  header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .logo h1 {
    color: var(--primary-blue);
    font-size: 1.8rem;
    font-weight: 800;
  }
  
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  nav a {
    text-decoration: none;
    color: var(--gray-dark);
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    color: var(--primary-orange);
  }
  
  @media (max-width: 768px) {
    header .container {
      flex-direction: column;
      gap: 1rem;
    }
    
    nav {
      gap: 1rem;
    }
  }
</style>
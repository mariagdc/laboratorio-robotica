<script>
  import { getTodaySchedule } from '$lib/utils/schedule.js';
  
  const today = getTodaySchedule();
</script>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="text-content">
        <h1>¡Aprendé Robótica <span class="highlight">Divirtiéndote!</span> 🤖</h1>
        <p class="subtitle">Clases interactivas para niños de 4 a 12 años. Donde la imaginación se encuentra con la tecnología.</p>
        
        <div class="today-info">
          <h3>📍 Hoy estamos en:</h3>
          <div class="location-card">
            <strong>{today.location}</strong>
            <p>{today.address}</p>
            <span class="time-badge">{today.time}</span>
            <span class="age-badge">{today.ageGroup}</span>
          </div>
        </div>
        
        <div class="cta-buttons">
          <a href="#contacto" class="btn btn-primary">¡Quiero Inscribirme!</a>
          <a href="#horario" class="btn btn-secondary">Ver Horario Completo</a>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="robot-illustration">
          <div class="robot-head"></div>
          <div class="robot-body"></div>
          <div class="robot-arms"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 4rem 0;
    color: white;
  }
  
  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  .highlight {
    color: var(--yellow);
  }
  
  .subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .today-info {
    margin: 2rem 0;
  }
  
  .location-card {
    background: rgba(255, 255, 255, 0.2);
    padding: 1.5rem;
    border-radius: 15px;
    margin-top: 1rem;
    backdrop-filter: blur(10px);
  }
  
  .time-badge, .age-badge {
    display: inline-block;
    background: var(--primary-orange);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .age-badge {
    background: var(--primary-green);
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn-secondary:hover {
    background: white;
    color: var(--primary-blue);
  }
  
  .robot-illustration {
    width: 300px;
    height: 300px;
    position: relative;
  }
  
  .robot-head {
    width: 100px;
    height: 100px;
    background: var(--yellow);
    border-radius: 20px;
    position: absolute;
    top: 50px;
    left: 100px;
  }
  
  .robot-body {
    width: 150px;
    height: 120px;
    background: var(--primary-blue);
    border-radius: 15px;
    position: absolute;
    top: 160px;
    left: 75px;
  }
  
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    .cta-buttons {
      flex-direction: column;
    }
  }
</style>
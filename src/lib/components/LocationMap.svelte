<script>
  import { getTodaySchedule } from '$lib/utils/schedule.js';
  
  const todaySchedule = getTodaySchedule();
  
  // Coordenadas de ejemplo (reemplazar con las reales)
  const mapUrl = `https://www.google.com/maps?q=${todaySchedule.coordinates.lat},${todaySchedule.coordinates.lng}&output=embed`;
</script>

<section class="map-section">
  <div class="container">
    <h2>📍 Ubicación de Hoy</h2>
    <p><strong>{todaySchedule.location}</strong> - {todaySchedule.address}</p>
    
    <div class="map-container">
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style="border:0; border-radius: 15px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación de la clase de hoy"
      ></iframe>
    </div>
    
    <div class="map-actions">
      <a 
        href={`https://maps.google.com/?q=${todaySchedule.coordinates.lat},${todaySchedule.coordinates.lng}`}
        target="_blank"
        class="btn btn-primary"
      >
        Abrir en Google Maps
      </a>
      <a 
        href={`https://waze.com/ul?ll=${todaySchedule.coordinates.lat},${todaySchedule.coordinates.lng}&navigate=yes`}
        target="_blank"
        class="btn btn-secondary"
      >
        Abrir en Waze
      </a>
    </div>
  </div>
</section>

<style>
  .map-section {
    padding: 3rem 0;
    background: var(--gray-light);
    text-align: center;
  }
  
  .map-section h2 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }
  
  .map-container {
    margin: 2rem 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .map-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-secondary {
    background: var(--primary-blue);
    color: white;
  }
  
  .btn-secondary:hover {
    background: #3a56d4;
  }
</style>
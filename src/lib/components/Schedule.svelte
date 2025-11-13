<script>
  import { getWeekSchedule, getTodaySchedule } from '$lib/utils/schedule.js';
  import { Calendar, MapPin, Clock, Users } from 'lucide-svelte';
  
  const weeklySchedule = getWeekSchedule();
  const todaySchedule = getTodaySchedule();
  
  function getDayName(dayIndex) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[dayIndex];
  }
  
  const today = new Date().getDay();
  const todayName = getDayName(today);
</script>

<section id="horario" class="schedule-section">
  <div class="container">
    <div class="section-header">
      <Calendar size={48} color="#4361ee" />
      <h2>Nuestro Horario Semanal</h2>
      <p>Encuentra tu clase según el día y la localidad</p>
    </div>
    
    <!-- Tarjeta de hoy -->
    <div class="today-highlight">
      <h3>📌 ¡Hoy es {todayName}!</h3>
      <div class="today-card card">
        <div class="today-badge">HOY</div>
        <div class="schedule-item">
          <div class="location-info">
            <h4>{todaySchedule.location}</h4>
            <p class="address">
              <MapPin size={16} />
              {todaySchedule.address}
            </p>
          </div>
          <div class="schedule-details">
            <span class="time">
              <Clock size={16} />
              {todaySchedule.time}
            </span>
            <span class="age-group">
              <Users size={16} />
              {todaySchedule.ageGroup}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Horario semanal completo -->
    <div class="weekly-schedule">
      <h3>Horario Completo de la Semana</h3>
      <div class="schedule-grid">
        {#each weeklySchedule as daySchedule, index}
          <div class="schedule-card card {todayName === daySchedule.day ? 'active' : ''}">
            <div class="day-header">
              <h4>{daySchedule.day}</h4>
              {#if todayName === daySchedule.day}
                <div class="current-day">Hoy</div>
              {/if}
            </div>
            
            <div class="schedule-content">
              <div class="location">
                <MapPin size={14} />
                <strong>{daySchedule.location}</strong>
              </div>
              <p class="address-small">{daySchedule.address}</p>
              
              <div class="details">
                <span class="detail-item">
                  <Clock size={14} />
                  {daySchedule.time}
                </span>
                <span class="detail-item">
                  <Users size={14} />
                  {daySchedule.ageGroup}
                </span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .schedule-section {
    padding: 4rem 0;
    background: var(--gray-light);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    color: var(--primary-blue);
    font-size: 2.5rem;
    margin: 1rem 0 0.5rem 0;
  }
  
  .today-highlight {
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .today-highlight h3 {
    color: var(--primary-orange);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .today-card {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    border: 3px solid var(--primary-orange);
  }
  
  .today-badge {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-orange);
    color: white;
    padding: 0.3rem 1.5rem;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  
  .schedule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .location-info h4 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }
  
  .address {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray-dark);
    opacity: 0.8;
  }
  
  .schedule-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .time, .age-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--gray-light);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
  }
  
  .weekly-schedule h3 {
    text-align: center;
    color: var(--primary-blue);
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
  
  .schedule-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .schedule-card {
    transition: all 0.3s ease;
  }
  
  .schedule-card.active {
    border-color: var(--primary-orange);
    transform: scale(1.05);
  }
  
  .schedule-card:hover {
    transform: translateY(-5px);
  }
  
  .day-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gray-light);
  }
  
  .day-header h4 {
    color: var(--primary-blue);
    margin: 0;
  }
  
  .current-day {
    background: var(--primary-green);
    color: white;
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .address-small {
    font-size: 0.9rem;
    color: var(--gray-dark);
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    .schedule-item {
      flex-direction: column;
      text-align: center;
    }
    
    .schedule-details {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
<script>
  import { Send, Phone, Mail, MessageCircle } from 'lucide-svelte';
  import { getTodaySchedule } from '$lib/utils/schedule.js';
  
  const todaySchedule = getTodaySchedule();
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    childAge: '',
    location: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simular envío (aquí integrarías con tu backend)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    submitMessage = '¡Gracias! Te contactaremos pronto para confirmar la inscripción.';
    formData = {
      name: '',
      email: '',
      phone: '',
      childAge: '',
      location: '',
      message: ''
    };
    
    isSubmitting = false;
  }
</script>

<section id="contacto" class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <!-- Información de contacto -->
      <div class="contact-info">
        <h2>¡Inscribite Ahora! 🚀</h2>
        <p class="intro">Completá el formulario y nos contactaremos para contarte todo sobre nuestras clases.</p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="icon">
              <Phone size={24} />
            </div>
            <div>
              <h4>Llamanos</h4>
              <a href="tel:+5491112345678">+54 9 11 1234-5678</a>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="icon">
              <Mail size={24} />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:info@robokids.com">info@robokids.com</a>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="icon">
              <MessageCircle size={24} />
            </div>
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/5491112345678" target="_blank">Enviar mensaje</a>
            </div>
          </div>
        </div>
        
        <div class="today-class">
          <h4>📍 Clase de hoy:</h4>
          <p><strong>{todaySchedule.location}</strong></p>
          <p>{todaySchedule.time} - {todaySchedule.ageGroup}</p>
        </div>
      </div>
      
      <!-- Formulario -->
      <div class="form-container">
        <form on:submit={handleSubmit} class="contact-form">
          <div class="form-group">
            <label for="name">Nombre del Padre/Madre *</label>
            <input
              id="name"
              type="text"
              bind:value={formData.name}
              required
              placeholder="Tu nombre completo"
            />
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                id="email"
                type="email"
                bind:value={formData.email}
                required
                placeholder="tu@email.com"
              />
            </div>
            
            <div class="form-group">
              <label for="phone">Teléfono *</label>
              <input
                id="phone"
                type="tel"
                bind:value={formData.phone}
                required
                placeholder="11 1234-5678"
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="childAge">Edad del Niño/a *</label>
              <select id="childAge" bind:value={formData.childAge} required>
                <option value="">Seleccionar edad</option>
                <option value="4-6">4-6 años</option>
                <option value="7-9">7-9 años</option>
                <option value="10-12">10-12 años</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="location">Localidad de Interés *</label>
              <select id="location" bind:value={formData.location} required>
                <option value="">Seleccionar localidad</option>
                {#each getWeekSchedule() as schedule}
                  <option value={schedule.location}>{schedule.location}</option>
                {/each}
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="message">Mensaje o Consulta</label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="4"
              placeholder="Contanos sobre los intereses de tu hijo/a o cualquier consulta que tengas..."
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
            {#if isSubmitting}
              Enviando...
            {:else}
              <Send size={20} />
              Enviar Inscripción
            {/if}
          </button>
          
          {#if submitMessage}
            <div class="success-message">
              {submitMessage}
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 4rem 0;
    background: white;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    align-items: start;
  }
  
  .contact-info h2 {
    color: var(--primary-blue);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .contact-method .icon {
    width: 50px;
    height: 50px;
    background: var(--primary-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .contact-method h4 {
    margin: 0 0 0.3rem 0;
    color: var(--primary-blue);
  }
  
  .contact-method a {
    color: var(--gray-dark);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-method a:hover {
    color: var(--primary-orange);
  }
  
  .today-class {
    background: var(--gray-light);
    padding: 1.5rem;
    border-radius: 15px;
    border-left: 4px solid var(--primary-orange);
  }
  
  .today-class h4 {
    color: var(--primary-orange);
    margin-bottom: 0.5rem;
  }
  
  .form-container {
    background: var(--gray-light);
    padding: 2rem;
    border-radius: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--primary-blue);
  }
  
  input, select, textarea {
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
  }
  
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-green);
  }
  
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .success-message {
    background: var(--primary-green);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
  }
</style>
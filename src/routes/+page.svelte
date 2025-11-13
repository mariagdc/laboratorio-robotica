<script>
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Schedule from '$lib/components/Schedule.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>RoboKids - Academia de Robótica para Niños</title>
  <meta name="description" content="Clases de robótica divertidas para niños de 4 a 12 años. Aprende, crea y diviértete con nosotros en diferentes localidades." />
</svelte:head>

<div class="page-wrapper">
  <Header />
  <main>
    <Hero />
    <Schedule />
    <ContactForm />
  </main>
  <Footer />
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
</style>
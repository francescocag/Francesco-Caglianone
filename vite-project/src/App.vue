<script setup>
// Aquí luego puedes agregar lógica si necesitas (menu responsive, etc.)
</script>

<template>
  <header class="header">
    <div class="container">
      <!-- Logo / Brand -->
      <a href="#" class="logo" aria-label="Boca Juniors, inicio">
        <span aria-hidden="true">💙💛</span>
        <span>Boca Juniors</span>
      </a>

      <!-- Navegación -->
      <nav class="nav" aria-label="Navegación principal">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#" class="nav-link">Inicio</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Equipo</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Noticias</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Tienda</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #0b1f66; /* azul Boca */
  padding: 1rem 2rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #f7d117; /* amarillo Boca */
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: #f7d117;
}
</style>
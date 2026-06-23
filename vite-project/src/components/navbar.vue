<script>
export default {
  name: "Navbar"
}
</script>

<template>

<header class="header">

  <div class="container">

    <router-link to="/" class="logo">
      <span>💙💛</span>
      <span>BOCA JUNIORS</span>
    </router-link>

    <nav class="nav">

      <ul class="nav-list">

        <li>
          <router-link to="/" class="nav-link">
            Inicio
          </router-link>
        </li>

        <li>
          <router-link to="/equipo" class="nav-link">
            Equipo
          </router-link>
        </li>

        <li>
          <router-link to="/noticias" class="nav-link">
            Noticias
          </router-link>
        </li>

        <li>
          <router-link to="/tienda" class="nav-link">
            Tienda
          </router-link>
        </li>

      </ul>

    </nav>

  </div>

</header>

</template>

<style scoped>
.header {
  background: #0b1f66;
  padding: 1rem 2rem;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #f7d117;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #f7d117;
}

.router-link-active {
  color: #f7d117;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
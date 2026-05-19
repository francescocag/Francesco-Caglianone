<script>
export default {
  name: "Navbar"
}
</script>

<template>

<header class="header">

  <div class="container">

    <a href="#" class="logo">
      <span>💙💛</span>
      <span>BOCA JUNIORS</span>
    </a>

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
          <a href="#" class="nav-link">Noticias</a>
        </li>

        <li>
          <a href="#" class="nav-link">Tienda</a>
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
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #f7d117;
}

</style>
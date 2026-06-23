<template>
  <div class="noticias">

    <h1>Noticias de Boca Juniors</h1>

    <section class="contenedorNoticias">

      <router-link
        class="noticia"
        v-for="noticia in noticias"
        :key="noticia.id"
        :to="`/noticias/${noticia.id}`"
      >

        <img
          :src="noticia.imagen"
          :alt="noticia.titulo"
          class="imagenNoticia"
        />

        <div class="contenido">
          <h2>{{ noticia.titulo }}</h2>
          <p>{{ noticia.descripcion }}</p>
          <span>{{ noticia.fecha }}</span>
        </div>

      </router-link>

    </section>

  </div>
</template>

<script setup>
import noticias from '../data/noticias.js'
</script>

<style scoped>
.noticias {
  min-height: 100vh;
  background: #f4f4f4;
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;
}

.noticias h1 {
  text-align: center;
  color: #0b1f66;
  font-size: 3rem;
  margin-bottom: 3rem;
}

.contenedorNoticias {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.noticia {
  background: white;
  width: 320px;
  border-radius: 15px;
  overflow: hidden;
  border: 3px solid #0b1f66;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: 0.3s;
  text-decoration: none;
  color: inherit;
}

.noticia:hover {
  transform: translateY(-6px);
}

.imagenNoticia {
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
  background: #ddd;
}

.contenido {
  padding: 1.3rem;
}

.contenido h2 {
  color: #0b1f66;
  margin-bottom: 0.8rem;
}

.contenido p {
  color: #333;
  margin-bottom: 1rem;
}

.contenido span {
  background: #f7d117;
  color: #0b1f66;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
}
</style>
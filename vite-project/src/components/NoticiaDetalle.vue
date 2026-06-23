<template>
  <div class="detallePagina">

    <div v-if="noticia" class="detalleCard">

      <img
        :src="noticia.imagen"
        :alt="noticia.titulo"
        class="imagenDetalle"
      />

      <div class="contenidoDetalle">

        <span class="fecha">{{ noticia.fecha }}</span>

        <h1>{{ noticia.titulo }}</h1>

        <p class="descripcion">
          {{ noticia.descripcion }}
        </p>

        <p class="detalle">
          {{ noticia.detalle }}
        </p>

        <router-link to="/noticias" class="botonVolver">
          Volver a noticias
        </router-link>

      </div>

    </div>

    <div v-else class="noEncontrada">
      <h1>Noticia no encontrada</h1>

      <router-link to="/noticias" class="botonVolver">
        Volver a noticias
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import noticias from '../data/noticias.js'

const route = useRoute()

const noticia = computed(() => {
  return noticias.find(noticia => noticia.id === route.params.id)
})
</script>

<style scoped>
.detallePagina {
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b1f66, #06113a);
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.detalleCard {
  background: white;
  max-width: 900px;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
}

.imagenDetalle {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.contenidoDetalle {
  padding: 2rem;
}

.fecha {
  display: inline-block;
  background: #f7d117;
  color: #0b1f66;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.contenidoDetalle h1 {
  color: #0b1f66;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.descripcion {
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.detalle {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.botonVolver {
  display: inline-block;
  background: #0b1f66;
  color: #f7d117;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.botonVolver:hover {
  background: #f7d117;
  color: #0b1f66;
}

.noEncontrada {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
}

.noEncontrada h1 {
  color: #0b1f66;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .imagenDetalle {
    height: 260px;
  }

  .contenidoDetalle h1 {
    font-size: 2rem;
  }
}
</style>
<template>

  <div class="equipo">

    <h1>Plantel Profesional Boca Juniors</h1>

    <!-- ARQUEROS -->
    <section class="categoria">

      <h2>🧤 Arqueros</h2>

      <div class="jugadores">

        <div
          class="card"
          v-for="jugador in arqueros"
          :key="jugador.nombre"
        >

          <!-- IMAGEN -->
          <img
            :src="jugador.imagen"
            :alt="jugador.nombre"
            class="fotoJugador"
          />

          <h3>{{ jugador.nombre }}</h3>

          <span>#{{ jugador.numero }}</span>

        </div>

      </div>

    </section>

    <!-- DEFENSORES -->
    <section class="categoria">

      <h2>🛡️ Defensores</h2>

      <div class="jugadores">

        <div
          class="card"
          v-for="jugador in defensores"
          :key="jugador.nombre"
        >

          <img
            :src="jugador.imagen"
            :alt="jugador.nombre"
            class="fotoJugador"
          />

          <h3>{{ jugador.nombre }}</h3>

          <span>#{{ jugador.numero }}</span>

        </div>

      </div>

    </section>

    <!-- MEDIOCAMPISTAS -->
    <section class="categoria">

      <h2>⚽ Mediocampistas</h2>

      <div class="jugadores">

        <div
          class="card"
          v-for="jugador in mediocampistas"
          :key="jugador.nombre"
        >

          <img
            :src="jugador.imagen"
            :alt="jugador.nombre"
            class="fotoJugador"
          />

          <h3>{{ jugador.nombre }}</h3>

          <span>#{{ jugador.numero }}</span>

        </div>

      </div>

    </section>

    <!-- DELANTEROS -->
    <section class="categoria">

      <h2>🔥 Delanteros</h2>

      <div class="jugadores">

        <div
          class="card"
          v-for="jugador in delanteros"
          :key="jugador.nombre"
        >

          <img
            :src="jugador.imagen"
            :alt="jugador.nombre"
            class="fotoJugador"
          />

          <h3>{{ jugador.nombre }}</h3>

          <span>#{{ jugador.numero }}</span>

        </div>

      </div>

    </section>

  </div>

</template>

<script setup>

const arqueros = [
  {
    nombre: "Agustín Marchesín",
    numero: 1,

    // ACA PONES LA IMAGEN
    imagen: "/jugadores/marchesin.jpg"
  },

  {
    nombre: "Leandro Brey",
    numero: 12,

    imagen: "/jugadores/brey.jpg"
  },

  {
    nombre: "Javier García",
    numero: 13,

    imagen: "/jugadores/garcia.jpg"
  }
]

const defensores = [
  {
    nombre: "Lautaro Blanco",
    numero: 3,

    imagen: "/jugadores/blanco.jpg"
  },

  {
    nombre: "Nicolás Figal",
    numero: 4,

    imagen: "/jugadores/figal.jpg"
  },

  {
    nombre: "Rodrigo Battaglia",
    numero: 6,

    imagen: "/jugadores/battaglia.jpg"
  }
]

const mediocampistas = [
  {
    nombre: "Leandro Paredes",
    numero: 5,

    Image: "/jugadores/paredes.jpg"
  },

  {
    nombre: "Kevin Zenón",
    numero: 22,

    imagen: "/jugadores/zenon.jpg"
  },

  {
    nombre: "Alan Velasco",
    numero: 20,

    imagen: "/jugadores/velasco.jpg"
  }
]

const delanteros = [
  {
    nombre: "Edinson Cavani",
    numero: 10,

    imagen: "/jugadores/cavani.jpg"
  },

  {
    nombre: "Miguel Merentiel",
    numero: 16,

    imagen: "/jugadores/merentiel.jpg"
  },

  {
    nombre: "Exequiel Zeballos",
    numero: 7,

    imagen: "/jugadores/zeballos.jpg"
  }
]

</script>

<style scoped>

.equipo {
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b1f66, #06113a);
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #f7d117;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}

.categoria {
  margin-bottom: 4rem;
}

.categoria h2 {
  color: white;
  margin-bottom: 1.5rem;
  border-left: 6px solid #f7d117;
  padding-left: 1rem;
  font-size: 2rem;
}

.jugadores {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  background: white;
  width: 240px;
  border-radius: 15px;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.card:hover {
  transform: translateY(-5px) scale(1.03);
}

.fotoJugador {
  width: 120px;
  height: 120px;
  object-fit: cover;

  border-radius: 50%;
  border: 4px solid #f7d117;

  margin-bottom: 1rem;
}

.card h3 {
  color: #0b1f66;
  text-align: center;
  margin-bottom: 0.7rem;
}

.card span {
  background: #f7d117;
  color: #0b1f66;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: bold;
}

</style>
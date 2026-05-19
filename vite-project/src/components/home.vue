<template>

  <div class="page">

    <!-- IMAGEN PRINCIPAL -->
    <section class="hero">
      <img src="../assets/bombonera.jpg" alt="La Bombonera" />
    </section>

    <!-- TARJETAS -->
    <section class="cards">

      <!-- TABLA -->
      <div class="card">

        <h2>Tabla de posiciones</h2>

        <img
          class="tablaposiciones"
          src="../assets/tablaboca.png"
          alt="Tabla"
        />

      </div>

      <!-- PARTIDO -->
      <div class="card">

        <h2>Próximo Partido</h2>

       <img
          class="proxpartido"
          src="../assets/proxpartido.jpg"
          alt="Tabla"
        />
      </div>

      <!-- PUBLICIDAD -->
      <div class="card">

        <h2>Publicidad</h2>

        <p>
          Comprá la nueva camiseta oficial.
        </p>

      </div>

    </section>

    <!-- NOVEDADES -->
    <section class="news">

      <h2>Novedades y Promociones</h2>

      <p>
        Enterate de las últimas noticias del club.
      </p>

    </section>

  </div>

</template>

<style scoped>

.page {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}

/* HERO */

.hero {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.hero img {
  width: 80%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  border: 4px solid #0b1f66;
}

/* TARJETAS */

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
}

.card {
  background: white;
  width: 300px;
  min-height: 250px;
  padding: 1.5rem;
  border-radius: 10px;
  border: 3px solid #0b1f66;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h2 {
  color: #0b1f66;
  margin-bottom: 1rem;
}

.card p {
  color: #333;
  text-align: center;
}

/* TABLA */

.tablaposiciones {
  width: 90%;
  max-width: 240px;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
}

/* NOVEDADES */

.news {
  background: #f7d117;
  text-align: center;
  padding: 3rem 2rem;
}

.news h2 {
  color: #0b1f66;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.news p {
  color: #222;
  font-size: 1.1rem;
}

</style>
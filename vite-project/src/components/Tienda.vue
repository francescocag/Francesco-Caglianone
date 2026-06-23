<template>
  <div class="tienda">

    <h1>Tienda Oficial Boca Juniors</h1>

    <section class="productos">

      <div
        class="producto"
        v-for="producto in productos"
        :key="producto.nombre"
      >

        <img
          :src="producto.imagen"
          :alt="producto.nombre"
          class="imagenProducto"
        />

        <h2>{{ producto.nombre }}</h2>

        <p>{{ producto.descripcion }}</p>

        <span>${{ producto.precio }}</span>

        <button>Comprar</button>

      </div>

    </section>

  </div>
</template>

<script setup>
const productos = [
  {
    nombre: "Camiseta titular",
    descripcion: "Camiseta oficial azul y oro de Boca Juniors.",
    precio: "89.999",
    imagen: "/tienda/camisetacomprar.png"
  },
  {
    nombre: "Short oficial",
    descripcion: "Short deportivo oficial del club.",
    precio: "49.999",
    imagen: "/tienda/short.png"
  },
  {
    nombre: "Campera Boca",
    descripcion: "Campera azul con detalles amarillos.",
    precio: "119.999",
    imagen: "/tienda/campera.png"
  },
  {
    nombre: "Gorra Boca Juniors",
    descripcion: "Gorra oficial con escudo del club.",
    precio: "29.999",
    imagen: "/tienda/gorra.png"
  }
]
</script>

<style scoped>
.tienda {
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b1f66, #06113a);
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;
}

.tienda h1 {
  text-align: center;
  color: #f7d117;
  font-size: 3rem;
  margin-bottom: 3rem;
}

.productos {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.producto {
  background: white;
  width: 280px;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: 0.3s;
}

.producto:hover {
  transform: translateY(-6px) scale(1.03);
}

.imagenProducto {
  width: 100%;
  height: 210px;
  object-fit: contain;
  display: block;
  margin-bottom: 1rem;
  background: #f1f1f1;
  border-radius: 10px;
}

.producto h2 {
  color: #0b1f66;
  margin-bottom: 0.8rem;
}

.producto p {
  color: #333;
  margin-bottom: 1rem;
}

.producto span {
  display: block;
  color: #0b1f66;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.producto button {
  background: #f7d117;
  color: #0b1f66;
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.producto button:hover {
  background: #0b1f66;
  color: #f7d117;
}

@media (max-width: 768px) {
  .tienda h1 {
    font-size: 2rem;
  }

  .producto {
    width: 90%;
  }
}
</style>
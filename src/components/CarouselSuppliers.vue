<script>
export default {
  name: "CarouselSuppliers",
}
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide mt-5 mb-5">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner ">
      <div class="carousel-item active">
        <img src="/carrousselSupplier1.webp" class="d-block w-100" alt="producteur de spiruline">
        <div class="carousel-caption d-none d-md-block ">
          <h5 class="h1 text-shadow-3">RESPECT DE L'ENVIRONNEMENT</h5>
          <p class="fs-5 text-shadow-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores dicta eius fugit illo maxime minima minus molestiae perferendis, quae, quidem ratione tempore tenetur unde voluptatem. Accusantium at doloribus quis.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/carrousselSupplier2.webp" class="d-block w-100" alt="poudre de spiruline">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="h1 text-shadow-3">PRODUITS DE QUALITÉ</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur dignissimos, eveniet excepturi explicabo facilis inventore laudantium maiores nisi nostrum obcaecati perferendis recusandae rem saepe soluta, tempora temporibus totam voluptatem.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/carrousselSupplier3.webp" class="d-block w-100" alt="producteur de spiruline">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="h1 text-shadow-3">COMMERCE EQUITABLE</h5>
          <p class="fs-5 text-shadow-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias consequuntur delectus dolor ea et facere, iusto labore nam numquam odit optio provident, quia quo rem unde! Dicta, error.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>




</template>

<style scoped>
.green1Background{
  background-color: #08664c;
}
.green2Background{
  background-color: rgb(0, 73, 52);
}
.green3Background{
  background-color: rgb(0, 43, 31);
}
</style>
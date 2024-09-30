<script>
import Header from '@/components/Header.vue'
export default {
  name: "home",
  components: { Header }
}
</script>

<template>
  <div class="bgGreen marginZero">
  <Header/>
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5 m-auto w-75">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="https://inhaircare.co/cdn/shop/articles/la-spiruline-un-incontournable-pour-le-bien-etre-de-vos-cheveux-178481.jpg?v=1667578328&width=1500" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5  lh-1 mb-3">Quels sont les bienfaits de la spiruline ?</h1>
      <p class="lead"><span>La spiruline est une algue riche en protéines, vitamines (B12, A, E) et minéraux (fer, calcium), ce qui en fait un super-aliment très complet. Elle booste l'énergie, soutient le système immunitaire et combat l'anémie grâce à sa haute teneur en fer, favorisant une meilleure oxygénation du corps. Ses puissants antioxydants, comme la phycocyanine, aident à protéger les cellules contre les radicaux libres et le stress oxydatif. En plus, la spiruline favorise la récupération musculaire et peut contribuer à améliorer la santé de la peau et des cheveux.</span></p>
    </div>
  </div>
  </div>
</template>

<style scoped>
  h1{
    font-family: "Fira Sans Condensed", 'Lato', sans-serif;
    font-size: 2rem;
    margin: 0;
    letter-spacing: 0.20rem;
    color: white;
    font-weight: 400;
  }
  p{
    color: white;
    font-family: "Fira Sans Condensed", 'Lato', sans-serif;

  }
.marginZero{
  margin-top: 0;
}
  .bgGreen{
    background-color: rgba(24, 83, 79, 0.84);

  }
</style>
<script>
export default {
  name: "Header",
  data(){
    return {

    }
  }
}
</script>

<template>
  <header>
  <section class="et-hero-tabs">
    <h1>SPIRULINE</h1>
    <h3 class="mt-2">Et ses nombreux bienfaits</h3>
    <div class="et-hero-tabs-container">
      <router-link to="/" class="et-hero-tab">Home</router-link>
      <router-link to="/suppliers" class="et-hero-tab">Fournisseurs</router-link>
      <router-link to="/resselers" class="et-hero-tab">Revendeurs</router-link>

      <router-link to="/map" class="et-hero-tab">Carte des fournisseurs</router-link>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>
  </header>

</template>

<style scoped>
body {
  font-family: "Century Gothic", 'Lato', sans-serif;
}

a {
  text-decoration: none;
}

.et-hero-tabs,
.et-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 33vh;
  position: relative;
  background: #C9E3CC;
  text-align: center;
  padding: 0 2em;
  h1 {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 1rem;
  }
  h3 {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.6;
  }
}

.et-hero-tabs-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 10;
  &--top {
    position: fixed;
    top: 0;
  }
}

.et-hero-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #000;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;
  font-size: 0.8rem;
  &:hover {
    color:white;
    background: #7E9591;
    transition: all 0.5s ease;
  }
}

.et-hero-tab-slider {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 6px;
  background: #66B1F1;
  transition: left 0.3s ease;
}

@media (min-width: 800px) {
  .et-hero-tabs,
  .et-slide {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  .et-hero-tab {
    font-size: 1rem;
  }
}
</style>
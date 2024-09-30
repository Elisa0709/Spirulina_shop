<script>
import {format, render, cancel, register} from 'timeago.js';

export default {
  name: "Resselers",

  data() {
    return {
      imgSuppliers: [
        "suppliersImg/3.webp",
        "suppliersImg/4.webp",
        "suppliersImg/5.webp",
        "suppliersImg/6.webp",
        "suppliersImg/7.webp",
        "suppliersImg/8.webp",
        "suppliersImg/9.webp",
        "suppliersImg/10.webp",
        "suppliersImg/11.webp",
        "suppliersImg/12.webp",
        "suppliersImg/13.webp",
        "suppliersImg/14.webp",
        "suppliersImg/15.webp",
        "suppliersImg/16.webp",
        "suppliersImg/17.webp",
        "suppliersImg/18.webp",
        "suppliersImg/19.webp",
        "suppliersImg/20.webp",
        "suppliersImg/21.webp",
        "suppliersImg/22.webp",
        "suppliersImg/23.webp",
        "suppliersImg/24.webp",
        "suppliersImg/25.webp",
        "suppliersImg/26.webp",
        "suppliersImg/27.webp",
        "suppliersImg/28.webp",
        "suppliersImg/29.webp",
        "suppliersImg/20.webp",
        "suppliersImg/31.webp",
        "suppliersImg/32.webp",
        "suppliersImg/33.webp",
        "suppliersImg/34.webp",
        "suppliersImg/35.webp",
      ]
    }
  },
  methods:{
    format,
    getRandomImg (){
      let random = Math.floor(Math.random() * this.imgSuppliers.length);
      return this.imgSuppliers[random]
}
  },
  props: {
    name: String,
    description: String,
    keyId: Number,
  },
}
</script>

<template>

  <div class="container mt-5  mb-5">
    <div class="card mb-3 border-0 greenShadow" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4 mt-3 h-100">
          <img :src=getRandomImg() class="img-fluid rounded-start me-2 ms-2 mt-2 mb-2" alt="image du producteur">
        </div>
        <div class="col-md-8 h-100">
          <div class="card-body">
            <h5 class="card-title HFamily">{{ name }}</h5>
            <p class="textFamily">{{description}}</p>
<!--            <p class="card-text"><small class="text-body-secondary">Last updated : {{format(checkedAt)}}</small></p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greenShadow {
  box-shadow: 0 4px 12px #C9E3CC;
}
.HFamily{
  font-family: "Fira Sans Condensed", 'Lato', sans-serif;
  font-weight: 400;
}
.textFamily{
  font-family: "Fira Sans Condensed", 'Lato', sans-serif;
  font-weight: 300;
}
</style>
<script>
import {format, render, cancel, register} from 'timeago.js';

export default {
  name: "Resselers",

  data() {
    return {
      imgSuppliers: [
        "/1.png",
        "/20.png",
        "/5.png",
        "/12.png",
        "/16.png",
        "/3.png",
        "/17.png",
        "/24.png",
        "/8.png",
        "/15.png",
        "/23.png",
        "/2.png",
        "/10.png",
        "/19.png",
        "/4.png",
        "/13.png",
        "/22.png",
        "/11.png",
        "/18.png",
        "/7.png",
        "/25.png",
        "/14.png",
        "/26.png",
        "/27.png",
        "/28.png",
        "/29.png",
        "/30.png",
        "/31.png",
        "/32.png",
        "/33.png",
        "/34.png",
        "/35.png",
        "/36.png",
        "/37.png",
        "/38.png",
        "/39.png",


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
            <h5 class="card-title">{{ name }}</h5>
            <p>{{description}}</p>
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
.heightBox{
  height: 15vh;
}
</style>
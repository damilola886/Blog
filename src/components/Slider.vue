<template>
  <div class="wrap-home-resources">
    <!-- <script src="./home-resources.js" inline></script> -->

    <div class="home-resources-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="carousel-home-resources" class="carousel-home-resources">
              <carousel-3d
                :perspective="30"
                :border="0"
                :width="585"
                :height="370"
                :controls-visible="true"
                :space="500"
                :clickable="true"
              >
                <slide :index="0">
                  <img :src="require('../assets/slider2jpeg.jpeg')" />
                </slide>

                <slide :index="1">
                  <img :src="require('../assets/slider1.jpeg')" />
                </slide>

                <slide :index="2">
                  <img :src="require('../assets/slider3.jpeg')" />
                </slide>
                <slide :index="3">
                  <img :src="require('../assets/slider4.jpeg')" />
                </slide>
                <slide :index="4">
                  <img :src="require('../assets/slider5.jpeg')" />
                </slide>
              </carousel-3d>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    name: "Slider",
    name: "carousel-3d",
    name: "slide",
  },
  data() {
    return {
      slides: 5,
    };
    $(function() {
      // Activate Carousel
      $("#myCarousel").carousel();
    });
  },
};
</script>
<style scoped>
.left-1 {
  transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}
.right-1 {
  transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
}
.carousel-home-resources {
  padding: 0px;
}
.carousel-3d-container {
  background-color: #f8f8f8;
  padding-top: 0px;
  margin-top: 5px;
}
</style>

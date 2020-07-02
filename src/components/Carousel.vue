<template>
  <div class="container">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- <img src="..." class="d-block w-100" alt="..."> -->
          <!-- <div v-for="image in images" :key="image.id"> -->
          <img
            :src="require('../assets/slider1.jpeg')"
            width="350"
            height="350"
            srcset=""
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../assets/slider2jpeg.jpeg')"
            width="350"
            height="350"
            srcset=""
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../assets/slider3.jpeg')"
            width="350"
            height="350"
            srcset=""
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../assets/slider4.jpeg')"
            width="350"
            height="350"
            srcset=""
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('../assets/slider5.jpeg')"
            width="350"
            height="350"
            srcset=""
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: "Carousel",
  },
  data() {
    return {
      //   images: [
      //     {
      //       id: 1,
      //       path: require("../assets/slider1.jpeg"),
      //     },
      //     {
      //       id: 2,
      //       path: require("../assets/slider2jpeg.jpeg"),
      //     },
      //     {
      //       id: 3,
      //       path: require("../assets/slider3.jpeg"),
      //     },
      //     {
      //       id: 4,
      //       path: require("../assets/slider4.jpeg"),
      //     },
      //     {
      //       id: 5,
      //       path: require("../assets/slider5.jpeg"),
      //     },
      //   ],
    };
    $(function() {
      // Activate Carousel
      $("#myCarousel").carousel();
    });
  },
};
</script>

<style lang="less" scoped></style>

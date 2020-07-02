<template>
  <div class="home">
    <HelloWorld />
    <Slider />
    <Fashion />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/Carousel.vue";
import Slider from "@/components/Slider.vue";
import Fashion from "@/components/Fashion.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Carousel,
    Slider,
    Fashion,
  },
};
</script>
<style scoped>
.home {
  background-color: #e4e7e6;
}
</style>

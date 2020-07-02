<template>
  <div class="container">
    <div class="case">
      <div class="card flex-md-row mb-4 shadow-sm h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <div v-for="fashion in blog" :key="fashion.id">
            <strong
              class="d-inline-block mb-2 text-success"
              @click="displayFashion(fashion)"
              style="font-size:20px; font-family:serif; text-transform:capitalize"
              >{{ fashion.title }}</strong
            >

            <img
              :src="fashion.image"
              width="350px"
              height="250px"
              class="card-img-right flex-auto d-none d-lg-block"
              style="margin-left:350px"
            />
            <p class="card-text mb-auto" style="font-size:22px">
              {{ fashion.story }}
            </p>
            <a
              class="btn btn-outline-success btn-sm"
              @click="displayFashion(fashion)"
              style=" font-size:15px; margin-bottom:10px"
              >Continue reading</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fashion",
  props: ["fashion"],
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.$store.state.fashion;
    },
  },
  methods: {
    displayFashion(fashion) {
      this.$store.commit("setSelectFashionValue", fashion);

      this.$router.push({ path: "/about" });
    },
  },
};
</script>
<style scoped>
.first-segment {
  background-color: #3a5169;
  width: 1000px;
}
.first {
  width: 5rem;
  float: left;
}

.second {
  width: 5rem;
  padding-left: 750px;
}
.heading {
  margin-bottom: 7px;
}
.fa-angle-right {
  color: white;
}
.social-card-header {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 96px;
}
.social-card-header i {
  font-size: 32px;
  color: #fff;
}
.bg-facebook {
  background-color: #3b5998;
}
.text-facebook {
  color: #3b5998;
}
.bg-google-plus {
  background-color: #dd4b39;
}
.text-google-plus {
  color: #dd4b39;
}
.bg-twitter {
  background-color: #1da1f2;
}
.text-twitter {
  color: #1da1f2;
}
.bg-pinterest {
  background-color: #bd081c;
}
.text-pinterest {
  color: #bd081c;
}
.share:hover {
  text-decoration: none;
  opacity: 0.8;
}
.col-md-6 {
  display: inline-block;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
}
.card-body {
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  width: 50%;
  display: inline-block;
}
.case {
}
.row {
}
</style>

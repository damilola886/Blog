<template>
  <div class="container ">
    <div class="card">
      <div class="card text-white bg-dark mb-0">
        <div class="card-body">
          <a href="#" class="top-link">Home</a>
          <a href="#" class="top-link">About us</a>
          <a href="#" class="top-link">Contact us</a>
          <div class="icon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-google-plus-g"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="card2">
      <div class="card text-white bg-dark mb-0">
        <div class="card-body2">
          <div class="right-brand">
            <div v-for="image in images" :key="image.id">
              <img
                :src="image.path"
                width="150rem"
                height="100rem"
                srcset=""
                style="margin-left:220px"
              />
              <p class="name">
                <span class="blue">D</span
                ><span style="margin-right:15px">AMZ</span>Blog
              </p>
            </div>

            <p class="description">
              Welcome to Damz blog, a blog that caters to your taste for
              fashion,lifestyle and current happenings trending globally.
              <span class="dot">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mb-0 h1" href="#">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Fashion
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lifestyle
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    name: "HelloWorld",
  },
  data() {
    return {
      images: [
        {
          id: 1,
          path: require("../assets/download1.png"),
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  margin-bottom: 0px;
  border-radius: 0px;
  border-bottom: 2px solid #bfb8b8;
}
.card-body {
  padding: 0px;

  height: 2rem;
}
.top-link {
  margin-top: 0px;
  text-decoration: none;
  color: white;
  font-family: Helvetica Narrow, sans-serif;
  margin-left: 15px;
  font-size: 13px;
}
.top-link:hover {
  color: blue;
  font-size: 15px;
}
.icon {
  width: 10rem;
  float: right;
  margin-right: 3px;
}
.fa-facebook,
.fa-twitter,
.fa-instagram,
.fa-google-plus-g,
.fa-youtube {
  margin-left: 10px;
  cursor: pointer;
}
.fa-facebook:hover,
.fa-twitter:hover,
.fa-instagram:hover,
.fa-google-plus-g:hover,
.fa-youtube:hover {
  color: blue;
  font-size: 19px;
}
.navbar-brand {
  font-family: Century Gothic;
  font-size: 17px;
}
.card-body2 {
  height: 12rem;
}
p {
  margin-bottom: 0px;
}
.name {
  margin-top: 12px;
  font-size: 35px;
  font-family: cormorant;
  margin-left: 0px;
  margin-bottom: 0px;
  text-align: none;
}
.blue {
  color: #4429c4;
}
.description {
  margin-left: 10px;
  color: #8a8796;
  margin-top: 60px;
  font-family: papyrus;
  font-size: 17px;
}
.dot {
  font-family: impact;
  margin-right: 5px;

  color: #4429c4;
}
li {
  font-family: Century Gothic;
  font-size: 17px;
}
img {
  float: left;
}
.right-brand {
  width: 35rem;
  float: right;
  margin-right: 280px;
}
p {
}
</style>

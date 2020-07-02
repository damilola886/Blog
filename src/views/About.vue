<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mb-0 h1" href="#">DAMZ Blog</a>
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
    <section class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h1 style="width:1000px; font-size:28px; font-family:fantasy">
              {{ fashion.title }}
            </h1>
          </div>
        </div>
        <div class="image">
          <img
            :src="fashion.image"
            width="600px"
            height="400px"
            class="card-img-right flex-auto d-none d-lg-block"
            style="margin-left:250px; margin-top:10px"
          />
        </div>

        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <p
              style="width:1000px;font-size:20px;text-align:justify; font-family:sans-serif"
            >
              {{ fashion.fullStory }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "about",

  computed: {
    fashion() {
      return this.$store.state.showFashion;
    },
  },
};
</script>
<style>
body {
  background: #e4e7e6;
  color: white;
  font-family: "Roboto", sans-serif;
}

span {
  font-family: "Reenie Beanie", cursive;
  font-size: 1.5em;
}

.text-primary {
  color: #dcc6fb;
}

p {
  font-size: 1.6em;
  padding-top: 30px;
}
a {
  color: #dcc6fb;
}
</style>

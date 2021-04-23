<template>
  <div class="app4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link tag="a" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/user"
              >Weather</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/weather"
              >Form</router-link>
          </li>
           <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/login"
              >login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'app4'
}
</script>
<style scoped></style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white nav-1">
    <div class="container mw-0 px-3">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" style="margin-left: 50px">
          <router-link :to="{ name: 'posts' }" exact>Posts</router-link>
        </li>
        <li class="nav-item" style="margin-left: 50px">
          <router-link :to="{ name: 'login' }" exact v-if="accessToken != null"
            >Login</router-link
          >
        </li>
        <li class="nav-item" style="margin-left: 50px">
          <router-link :to="{ name: 'logout' }" exact v-if="accessToken == null"
            >Logout</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  accessToken: localStorage.getItem("access-token"),
};
</script>

<style scoped>
a {
  color: #000;
}
</style>
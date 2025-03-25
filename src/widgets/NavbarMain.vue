<template>
  <nav class="navbar">
    <router-link to="/" class="main-nav-link">Main Page</router-link>

    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 1rem">
      <router-link to="/register" class="nav-link">Registration</router-link>
      <router-link to="/login" class="nav-link">Log In</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

.nav-link {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #45a049;
}

.main-nav-link {
  background-color: #3568c7;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-nav-link:hover {
  background-color: #4a6cb6;
}
</style>


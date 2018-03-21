<template>
  <div id="app">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="{ name: 'Dashboard'}" class="navbar-item">
            Fitness
          </router-link>
        </div>
        <div class="navbar-end">
          <router-link :to="{ name: 'ManageExercises'}" class="navbar-item">
            Manage Exercises
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

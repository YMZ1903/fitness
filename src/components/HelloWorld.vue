<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t('dashboard.title') }}</h1>
          <h2 class="subtitle">
            {{ $t('dashboard.subtitle') }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

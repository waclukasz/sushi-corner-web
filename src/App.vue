<template>
  <div
    id="app"
  >
    <navigation-bar />

    <div class="main-container">
      <filter-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import FilterBar from '@/components/FilterBar';

export default {
  components: { NavigationBar, FilterBar }
};
</script>

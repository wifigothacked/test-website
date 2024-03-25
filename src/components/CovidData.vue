<template>
  <Suspense>
    <CovidDataHelper />
    <template #fallback>
      Loading .....
    </template>
  </Suspense>
</template>

<script setup>
import CovidDataHelper from './CovidDataHelper.vue';
</script>

<style></style>

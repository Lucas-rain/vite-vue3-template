<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: $test-color;
}
</style>

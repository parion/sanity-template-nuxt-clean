<script setup lang="ts">
defineProps<{ value?: { text?: string } }>();
</script>
<template>
  <u>{{ value?.text }}</u>
</template>
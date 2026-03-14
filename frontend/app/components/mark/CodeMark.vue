<script setup lang="ts">
defineProps<{ value?: { text?: string } }>();
</script>
<template>
  <code>{{ value?.text }}</code>
</template>
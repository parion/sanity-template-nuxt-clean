<script setup lang="ts">
defineProps<{ value?: { text?: string } }>();
</script>
<template>
  <s>{{ value?.text }}</s>
</template>
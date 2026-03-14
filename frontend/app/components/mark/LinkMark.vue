<script setup lang="ts">
defineProps<{ value?: { link?: Link }, text?: string }>();
</script>
<template>
  <ResolvedLink v-if="value?.link" :link="value.link">{{ text }}</ResolvedLink>
  <span v-else>{{ text }}</span>
</template>
<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@nuxtjs/sanity/runtime/types.js';

defineProps<PortableTextMarkComponentProps>();
</script>
<template>
  <u>{{ value?.text }}</u>
</template>
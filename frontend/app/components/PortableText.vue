<script setup lang="ts">
import LinkMark from './mark/LinkMark.vue';
import UnderlineMark from './mark/UnderlineMark.vue';
import CodeMark from './mark/CodeMark.vue';
import StrikethroughMark from './mark/StrikethroughMark.vue';

const components = {
  marks: {
    link: LinkMark,
    underline: UnderlineMark,
    code: CodeMark,
    "strike-through": StrikethroughMark,
  },
};

defineProps<{
  portableText: BlockContent;
}>();
</script>

<template>
  <div v-if="portableText">
    <SanityContent :value="portableText" :components="components" />
  </div>
</template>

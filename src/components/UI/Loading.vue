<template>
  <img :class="[color === 'White' ? 'White' : '']" src="src/assets/img/Loading.svg" width="20" height="20" />
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
  name: 'Loading',
  props: {
    color: { type: String as PropType<'Black' | 'White'>, default: 'Black' },
  },
};
</script>

<style scoped>
.White {
  filter: brightness(10000%);
}
</style>

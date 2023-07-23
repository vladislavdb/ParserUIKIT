<template>
  <img
    :class="[color === 'White' ? 'White' : '', color === 'Grey' ? 'Grey' : '']"
    :src="src"
    :width="size"
    :height="size"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Logos } from '../../types/Logos';
import { Sizes } from '../../types/Sizes';

interface State {
  src: string;
  logos: {
    name: Logos;
    src: string;
  }[];
}
export default defineComponent({
  name: 'Icon',
  data(): State {
    return {
      src: '',
      logos: [
        { name: 'Cancel', src: 'src/assets/img/Cancel.svg' },
        { name: 'Download', src: 'src/assets/img/Download.svg' },
        { name: 'Menu', src: 'src/assets/img/Menu.svg' },
        { name: 'Minus', src: 'src/assets/img/Minus.svg' },
        { name: 'Nav-arrow-down', src: 'src/assets/img/Nav-arrow-down.svg' },
        { name: 'Nav-arrow-left', src: 'src/assets/img/Nav-arrow-left.svg' },
        { name: 'Nav-arrow-right', src: 'src/assets/img/Nav-arrow-right.svg' },
        { name: 'Nav-arrow-up', src: 'src/assets/img/Nav-arrow-up.svg' },
        { name: 'Plus', src: 'src/assets/img/Plus.svg' },
        { name: 'QR', src: 'src/assets/img/QR.svg' },
        { name: 'Search', src: 'src/assets/img/Search.svg' },
        { name: 'Slash', src: 'src/assets/img/Slash.svg' },
        { name: 'Star', src: 'src/assets/img/Star.svg' },
      ],
    };
  },
  methods: {
    findSrc() {
      for (let i = 0; i <= this.logos.length - 1; i++) {
        if (this.name === this.logos[i].name) {
          this.src = this.logos[i].src;
        }
      }
    },
  },
  mounted() {
    this.findSrc();
  },
  props: {
    size: { type: Number as PropType<Sizes>, default: 24 },
    name: { type: String as PropType<Logos>, required: true },
    color: { type: String as PropType<'Black' | 'Grey' | 'White'>, default: 'Black' },
  },
});
</script>

<style scoped>
.White {
  filter: brightness(10000%);
}
.Grey {
  filter: brightness(700%);
}
</style>

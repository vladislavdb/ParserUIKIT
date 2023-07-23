<template>
  <button
    :disabled="disabled || load"
    class="flex gap-[12px] items-center rounded-[16px] w-fit"
    :class="[
      size === 'Big' ? 'px-[24px] h-[56px]' : '',
      size === 'Small' ? 'px-[16px] h-[48px]' : '',
      type === 'Primary' ? 'Primary focus:outline-Brand20' : '',
      type === 'Secondary' ? 'Secondary focus:outline-Neutral20' : '',
      type === 'Outline' ? 'Outline focus:outline-Neutral20' : '',
      disabled ? 'Disabled' : '',
    ]"
  >
    <p
      v-show="!load"
      class="text-Base10"
      :class="[type === 'Secondary' || type === 'Outline' ? 'text-Neutral100' : '', disabled ? 'Disabled' : '']"
    >
      <slot>Button</slot>
    </p>
    <Icon :color="logoColor" v-show="!load && logo" :name="logo" :size="20" />
    <transition name="fade">
      <Loading :color="logoColor" v-show="load" />
    </transition>
  </button>
</template>

<script lang="ts">
import Icon from './Icon.vue';
import { defineComponent, PropType } from 'vue';
import Loading from './Loading.vue';
import { Logos } from '../../types/Logos';

export default defineComponent({
  data() {
    return { logoColor: 'Black' };
  },
  methods: {
    updateLogoColor() {
      if (this.type === 'Primary' && !this.disabled) {
        this.logoColor = 'White';
      }
      if (this.type === 'Secondary' && !this.disabled) {
        this.logoColor = 'Black';
      }
      if (this.type === 'Outline' && !this.disabled) {
        this.logoColor = 'Black';
      }
      if (this.disabled) {
        this.logoColor = 'Grey';
      }
    },
  },
  mounted() {
    this.updateLogoColor();
  },
  name: 'Button',
  components: {
    Loading,
    Icon,
  },
  props: {
    load: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    logo: { type: String as PropType<Logos> },
    type: { type: String as PropType<'Primary' | 'Secondary' | 'Outline'>, default: 'Primary' },
    size: { type: Number as PropType<'Big' | 'Small'>, default: 'Big' },
  },
  watch: {
    disabled(NewValue) {
      this.updateLogoColor();
    },
    type(NewValue) {
      this.updateLogoColor();
    },
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 40s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: rotate(5720deg);
}
.Primary {
  background: #fb4023;
  &:hover {
    background: linear-gradient(0deg, rgba(51, 59, 71, 0.04) 0%, rgba(51, 59, 71, 0.04) 100%), #fb4023;
  }
  &:active {
    background: linear-gradient(0deg, rgba(51, 59, 71, 0.08) 0%, rgba(51, 59, 71, 0.08) 100%), #fb4023;
  }
}
.Secondary {
  background: var(--neutral-10, #f3f4f6);
  &:hover {
    border-radius: 16px;
    background: linear-gradient(0deg, rgba(51, 59, 71, 0.04) 0%, rgba(51, 59, 71, 0.04) 100%), #f3f4f6;
  }
  &:active {
    border-radius: 16px;
    background: linear-gradient(0deg, rgba(51, 59, 71, 0.08) 0%, rgba(51, 59, 71, 0.08) 100%), #f3f4f6;
  }
}
.Outline {
  border: 2px solid var(--neutral-10, #f3f4f6);
  &:hover {
    border: 2px solid var(--neutral-10, #f3f4f6);
    background: rgba(51, 59, 71, 0.04);
  }
  &:active {
    border: 2px solid var(--neutral-10, #f3f4f6);
    background: rgba(51, 59, 71, 0.08);
  }
}
.Disabled {
  background: #f3f4f6;
  color: var(--neutral-60, #7d8ba1);
  &:hover {
    background: #f3f4f6;
  }
  &:active {
    background: #f3f4f6;
  }
}
</style>

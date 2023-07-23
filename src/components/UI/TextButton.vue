<template>
  <button
    :disabled="disabled"
    class="flex gap-[8px] items-center w-fit focus:outline-none"
    :class="[size === 'Big' ? 'h-[40px]' : '', size === 'Small' ? 'h-[32px]' : '']"
  >
    <p
      class="text-Base10"
      :class="[
        size === 'Small' ? 'text-[14px]' : '',
        type === 'Primary' ? 'Primary' : '',
        type === 'Secondary' ? 'Secondary' : '',
        disabled ? 'Disabled' : '',
      ]"
    >
      <slot>Text Button</slot>
    </p>
    <svg
      v-if="size === 'Big'"
      :class="[
        type === 'Primary' ? 'Primary' : '',
        type === 'Secondary' ? 'Secondary' : '',
        disabled ? 'Disabled' : '',
      ]"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="#FB634B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      v-if="size === 'Small'"
      :class="[
        type === 'Primary' ? 'Primary' : '',
        type === 'Secondary' ? 'Secondary' : '',
        disabled ? 'Disabled' : '',
      ]"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M6 4L10 8L6 12" stroke="#FB634B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script lang="ts">
import Icon from './Icon.vue';
import { defineComponent, PropType } from 'vue';
import { Logos } from '../../types/Logos';

export default defineComponent({
  data() {
    return { logoColor: 'Black' };
  },
  name: 'TextButton',
  components: {
    Icon,
  },
  props: {
    disabled: { type: Boolean, default: false },
    type: { type: String as PropType<'Primary' | 'Secondary'>, default: 'Primary' },
    size: { type: String as PropType<'Big' | 'Small'>, default: 'Big' },
  },
});
</script>

<style lang="scss" scoped>
button {
  .Primary {
    color: var(--brand-80, #fb634b);
    path {
      stroke: #fb634b;
    }
  }
  .Secondary {
    color: var(--neutral-80, #566376);
    path {
      stroke: #566376;
    }
  }
  .Disabled {
    color: var(--neutral-60, #7d8ba1);
    path {
      stroke: #7d8ba1;
    }
  }
  &:hover {
    .Primary {
      color: var(--brand-100, #fb4023);
      path {
        stroke: #fb4023;
      }
    }
    .Secondary {
      color: var(--neutral-100, #333b47);
      path {
        stroke: #333b47;
      }
    }
    .Disabled {
      color: var(--neutral-60, #7d8ba1);
      path {
        stroke: #7d8ba1;
      }
    }
  }
}
</style>

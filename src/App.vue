<template>
  <div class="flex">
    <div class="flex-col pl-10">
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :disabled="false" :load="ff" :logo="'Plus'">Button</Button>
        <Button :type="'Secondary'" :disabled="false" :load="ff" :logo="'Plus'">Button</Button>
        <Button :type="'Outline'" :disabled="false" :load="ff" :logo="'Plus'">Button</Button>
      </div>
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :size="'Small'" :disabled="false" :load="false" :logo="'Plus'">Button</Button>
        <Button :size="'Small'" :type="'Secondary'" :disabled="false" :load="false" :logo="'Plus'">Button</Button>
        <Button :size="'Small'" :type="'Outline'" :disabled="false" :load="false" :logo="'Plus'">Button</Button>
      </div>
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :disabled="false" :load="true" :logo="'Plus'">Button</Button>
        <Button :type="'Secondary'" :disabled="false" :load="true" :logo="'Plus'">Button</Button>
        <Button :type="'Outline'" :disabled="false" :load="true" :logo="'Plus'">Button</Button>
      </div>
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :size="'Small'" :disabled="false" :load="true" :logo="'Plus'">Button</Button>
        <Button :size="'Small'" :type="'Secondary'" :disabled="false" :load="true" :logo="'Plus'">Button</Button>
        <Button :size="'Small'" :type="'Outline'" :disabled="false" :load="true" :logo="'Plus'">Button</Button>
      </div>
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :disabled="true" :load="false" :logo="'Plus'">Button</Button>
        <Button :type="'Secondary'" :disabled="true" :load="false" :logo="'Plus'">Button</Button>
        <Button :type="'Outline'" :disabled="true" :load="false" :logo="'Plus'">Button</Button>
      </div>
      <div class="pt-20 w-[600px] flex gap-10">
        <Icon :name="'Cancel'" :size="24" />
        <Button :disabled="true" :load="true" :logo="'Plus'">Button</Button>
        <Button :type="'Secondary'" :disabled="true" :load="true" :logo="'Plus'">Button</Button>
        <Button :type="'Outline'" :disabled="true" :load="true" :logo="'Plus'">Button</Button>
      </div>
    </div>
    <div class="flex-col pt-20">
      <div class="w-[250px] flex gap-10">
        <IconButton logo="Menu" type="Primary" :load="ff" />
        <IconButton logo="Menu" type="Secondary" :load="ff" />
        <IconButton logo="Menu" type="Outline" :load="ff" />
      </div>
      <div class="pt-20 w-[250px] flex gap-10">
        <IconButton logo="Menu" type="Primary" size="Small" />
        <IconButton logo="Menu" type="Secondary" size="Small" />
        <IconButton logo="Menu" type="Outline" size="Small" />
      </div>
      <div class="pt-20 w-[250px] flex gap-10">
        <IconButton logo="Menu" type="Primary" load />
        <IconButton logo="Menu" type="Secondary" load />
        <IconButton logo="Menu" type="Outline" load />
      </div>
      <div class="pt-20 w-[250px] flex gap-10">
        <IconButton logo="Menu" type="Primary" disabled />
        <IconButton logo="Menu" type="Secondary" disabled />
        <IconButton logo="Menu" type="Outline" disabled />
      </div>
    </div>
    <div class="flex-col pt-20 pl-20">
      <div class="w-[450px] flex gap-10">
        <TextButton type="Primary"></TextButton>
        <TextButton type="Primary" size="Small"></TextButton>
      </div>
      <div class="w-[450px] flex gap-10">
        <TextButton type="Secondary"></TextButton>
        <TextButton type="Secondary" size="Small"></TextButton>
      </div>
      <div class="w-[450px] flex gap-10">
        <TextButton disabled type="Primary" size="Big"></TextButton>
        <TextButton disabled type="Secondary" size="Small"></TextButton>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './components/UI/Icon.vue';
import { defineComponent } from 'vue';
import Button from './components/UI/Button.vue';
import IconButton from './components/UI/IconButton.vue';
import TextButton from './components/UI/TextButton.vue';
export default defineComponent({
  data() {
    return { ff: false };
  },
  methods: {},
  mounted() {},
  watch: {},
  components: { Button, Icon, IconButton, TextButton },
});
</script>
<style></style>

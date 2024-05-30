<template>
  <div class="align-middle">
      <select
          id="size"
          v-model="selectedSize"
          class="text-input rounded border-gray-200 focus:outline-none"
          @change="selectSize"
      >
          <option v-for="size in sizesList" :key="size" :value="size">
              <span class="text-lg">
                  {{size}}
              </span>
          </option>
      </select>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
  size: {
      type: [Number, String],
      default: 4
  }
})
const emits = defineEmits(['sizeSelected'])
const sizesList = ref([4,5, 10, 50, 100, 150])
const selectedSize = ref(0)
onBeforeMount(() => {
  selectedSize.value = props.size
})
function selectSize() {
  emits('sizeSelected', selectedSize.value)
}
</script>
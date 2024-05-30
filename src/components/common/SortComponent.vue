<template>
  <button type="button" @click="sortItem" class="flex items-center">
      <font-awesome-icon v-show="props.showSort" :icon="faSort" class="mr-2 text-sm" />
      <span>{{ props.item.columnName}}</span>
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faSort} from '@fortawesome/free-solid-svg-icons'


const props = defineProps({
  item: {
    type: Object,
    required: true
  },
    showSort: {
      type: Boolean,
      required: false,
      default: true
    }
})
const emits = defineEmits(['sorted'])
const sorts = ref({
  key: props.item.id,
  direction: 'ASC'
})
const sortDirection = computed(() => {
  if (sorts.value.direction === 'ASC') {
    return 'DESC'
  }

  if (sorts.value.direction === 'DESC') {
    return 'ASC'
  }

  return 'DESC'
})

function sortItem() {
  if (props.showSort) {
    sorts.value.direction = sortDirection.value
    emits('sorted', sorts.value)
  }
}
</script>
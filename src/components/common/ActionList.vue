<template>
  <div class="relative inline-block text-left whitespace-nowrap">
      <button
          type="button"
          class="rounded-full px-3 py-1 text-white hover:shadow"
          :class="{ 'shadow-md rounded-full': isDropDownOpen }"
          @click.prevent="toggleDropDown"
      >
          <font-awesome-icon :icon="faEllipsisVertical" style="color: black;font-size: 14px;"/>
      </button>
      <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
      >
          <div
              v-show="isDropDownOpen"
              ref="dropDown"
              class="absolute bg-white border rounded-lg p-2 right-4 top-8 z-10 flex flex-col"
          >
              <slot></slot>
          </div>
      </transition>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const isDropDownOpen = ref(false)
const dropDown = ref(null)

onClickOutside(dropDown, () => {
  if (isDropDownOpen.value) {
  isDropDownOpen.value = false
  }
})
function toggleDropDown() {
  isDropDownOpen.value = !isDropDownOpen.value
}
</script>
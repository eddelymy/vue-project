<template>
  <div
    ref="PopupMenu"
    class="rounded-md pb-3 shadow-cyan-200/50 absolute top-0 left-full min-w-max bg-[#0f172a] border-[#0f172a] overflow-auto max-h-[400px] shadow-lg"
  >
    <div class="d-flex flex-column">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emits = defineEmits(['togglePopuMenu'])

const PopupMenu = ref(false)

onClickOutside(PopupMenu, () => (
emits('togglePopuMenu', false) 
))
</script>

<style scoped>
.popup-menu {
position:absolute;
left: 100%;
top:0px;
background-color: #0f172a;
border: #0f172a !important;
min-width: max-content;
z-index: 6;
max-height: 400px;
overflow-y: auto;

}
</style>

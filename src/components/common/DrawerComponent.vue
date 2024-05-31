<template>
  <div class="drawer-mask" v-show="props.showDrawer">
    <div class="drawer-container">
      <div class="drawer-header flex justify-between items-center">
        <h5 style="font-weight: 600; font-size: 1.25rem;">
          <slot name="header"></slot>
        </h5>
        <button class="drawer-default-button" @click.prevent="close">
          <font-awesome-icon :icon="faXmark" class="text-2xl text-[#94a3b8]" />
        </button>
      </div>
      <div class="my-2">
        <hr />
      </div>
      <div class="drawer-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  showDrawer: {
      type: Boolean,
      required: true
  }
})
const emits = defineEmits(['close'])

function close() {
  emits('close')
}
</script>

<style scoped>
.drawer-header h5 {
  margin-top: 0;
  margin-bottom: 0;
}
.drawer-default-button {
  width: 4%;
  background-color: #fff;
  border-style: none;
}
.drawer-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  transition: opacity 0.15s linear;
  z-index: 10;
}
.drawer-container {
  width: 30%;
  height: 100%;
  min-height: 100vh;
  margin-left: auto;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: none;
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
}
.drawer-body {
  width: 100%;
  max-width: 100%;
  min-width: 50%;
  overflow-y: hidden;
  overflow-x: hidden;
  padding-top: 20px;
  flex-grow: 1;
}
.button-container {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-top: 1px solid #dee2e6;
}
</style>

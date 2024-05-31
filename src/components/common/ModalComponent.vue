<template>
  <transition name="fade" mode="in-out">
      <div v-show="props.showModal" class="modal-mask">
          <div class="modal-wrapper">
              <div class="modal-container">
                  <div class="modal-header flex justify-between items-center">
                      <h5 style="font-weight: 600;font-size: 1.25rem;">
                          <slot name="header"></slot>
                      </h5>
                      <button type="button" class="modal-default-button" @click="close">
                        <font-awesome-icon :icon="faXmark" class="text-2xl text-[#94a3b8]" />                      </button>
                  </div>
                  <div className="my-2" >
                    <hr  />
                  </div>
                  <div class="modal-body">
                      <slot name="body"></slot>
                  </div>
              </div>
          </div>
      </div>
  </transition>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const emits = defineEmits(['close'])
const props = defineProps({
  showModal: {
      type: Boolean,
      required: true
  }
})

function close() {
  emits('close')
}
</script>

<style scoped>
.modal-default-button {
  width: 4%;
  text-align: center;
  background-color: #fff;
  border-style: none;
}
.modal-mask {
  max-width: 100vw;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /*transition: opacity 0.15s linear;*/
  display: table;
  overflow-y: auto;
  overflow-x: hidden;
}
.modal-wrapper {
  max-width: 100vw;
  display: table-cell;
  vertical-align: middle;
  padding: 10px 10px;
}
.modal-container {
  width: fit-content;
  max-width: 100%;
  min-width: 50%;
  overflow-y: auto;
  margin: 0 auto;
  padding: 20px 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  /*transition: all 0.3s ease;*/
  border-radius: 8px;
  /*transition: transform 0.3s ease-out;*/
  /*transform: none;*/
}
.modal-header h5 {
  margin-top: 0;
  margin-bottom: 0;
}
.modal-body {
  margin: 30px 0 0 0;
  width: 100%;
  max-width: 100%;
  min-width: 50%;
  overflow-x: auto;
  padding-bottom: 20px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .15s linear;
}
.fade-leave-to {
  transition: opacity .15s linear;
  opacity: 0;
}
.fade-move {
  transition: all .15s linear;
}

</style>
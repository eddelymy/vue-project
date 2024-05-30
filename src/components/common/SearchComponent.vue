<template>
  <div class="w-fit h-fit relative bg-transparent flex items-center">
      <button class="btn-search absolute right-0">
          <font-awesome-icon :icon="faMagnifyingGlass"/>
      </button>
      <input
          v-model="search.value"
          type="text"
          class="input-search"
          placeholder="Rechercher..."
          @keyup.enter="searching"
          @keyup.delete="cancel"
      />
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const props = defineProps({
filters: {
  type: Object,
  required: true
}
})
const emit = defineEmits(['filter', 'cancel'])
const search = ref(props.filters)

function searching() {
emit('filter', search.value)
}
function cancel() {
emit('cancel', search.value)
}
</script>

<style scoped>
.input-search {
  height: 30px;
  width: 10px;
  border-style: none;
  font-size: 13px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  padding: 1px 40px 1px 1px;
  color: black;
  border-color: white !important;
}
.input-search::placeholder{
  color: black;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 100;
}
.input-search:focus{
  width: 200px;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.btn-search:focus ~ .input-search {
  width: 300px;
  margin-left: 12px;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
</style>
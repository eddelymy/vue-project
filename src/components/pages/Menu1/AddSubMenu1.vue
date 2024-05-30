<template>
  <button type="button" class="btn mr-3" @click="showOffCanvas">
    <font-awesome-icon :icon="faAdd" class="mr-1"/>
    Add
  </button>
  <drawer-component :showDrawer="showDrawer" @close="showDrawer = false">
    <template #header>
      Add item
    </template>
    <template #body>
      <form class="h-full flex flex-col">
        <div class="form-offcanvas">
          <div class="mb-3">
            <label for="id"> Id </label>
            <input
              type="text"
              v-model="data.id"
              class="text-input mt-1"
            />
          </div>
          <div class="mb-3">
            <label for="label"> Label </label>
            <input
              type="text"
              v-model="data.label"
              class="text-input mt-1"
            />
          </div>
          <div class="mb-3">
            <label for="status" > Status </label>
            <multiselect
              v-model="data.status"
              :options="lists"
              label="label"
              track-by="id"
              :searchable="false"
              select-label="selectionner"
              deselect-label="rejeter valeur">
              <template #noOptions>
                  <span>La liste est vide.</span>
              </template>
            </multiselect>
          </div>
          <div class="mb-3">
            <label for="date" > Date </label>
            <VueDatePicker
              input-class-name="dp-custom-input mt-1"
              v-model="data.date"
              id="date"
              format="dd-MM-yyyy"
              model-type="yyyy-MM-dd"
              vertical
              placeholder="Selectionner une date"
              auto-apply
            />
          </div>
        </div>
        <div class="button-offcanvas w-full flex justify-end items-center">
          <button type="button" class="reset" @click="cancel">Annuler</button>
          <button type="submit" class="btn ms-2" :disabled="isSubmitDisabled">Sauvegarder</button>
        </div> 
      </form>
    </template>
  </drawer-component>
</template>

<script setup>
import { ref } from 'vue'
import DrawerComponent from '@/components/common/DrawerComponent.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import Multiselect from 'vue-multiselect'

const emit = defineEmits(['addData'])
const data = ref({
  id: null,
  label: null,
  status: null,
  date: null,
})
const showDrawer = ref(false)
const lists = ref([{id:'1',label:'active'},{id:'2',label:'inactive'}])

function cancel() {
  data.value.id = null
  data.value.label = null
  data.value.status = null
  data.value.date = null
}

function showOffCanvas() {
  cancel()
  showDrawer.value = true
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>



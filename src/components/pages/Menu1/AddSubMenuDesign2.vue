<template>
  <button type="button" class="btn mr-3" @click="openModal">
    <font-awesome-icon :icon="faAdd" class="mr-1"/>
    Add (modal)
  </button>
  <modal-component :show-modal="showModal" @close="closeModal">
    <template #header>
      Add item
    </template>
    <template #body>
      <form class="w-100" @submit.prevent="submit">
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
        <div class="flex justify-end mb-3">
          <button type="button" class="reset" @click="cancel">Annuler</button>
          <button type="submit" class="btn ms-2" :disabled="isSubmitDisabled">Sauvegarder</button>
        </div>
      </form>
    </template>
  </modal-component>
</template>

<script setup>
import ModalComponent from '@/components/common/ModalComponent.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import Multiselect from 'vue-multiselect'
import { ref } from 'vue'

const emit = defineEmits(['AddItem'])

const showModal = ref(false)
const isSubmitDisabled = ref(false)

const data = ref({
  id: null,
  label: null,
  status: null,
  date: null,
})
const lists = ref([{id:'1',label:'active'},{id:'2',label:'inactive'}])

function cancel() {
  data.value.id = null
  data.value.label = null
  data.value.status = null
  data.value.date = null
}
function openModal() {
  showModal.value = true
}
function closeModal() {
  cancel()
  showModal.value = false
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

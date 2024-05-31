<template>
  <div class="w-full h-full">
    <breadcrumb-component :pages="['Menu 1','SubMenu 1']"></breadcrumb-component>
    <div class="flex w-full justify-end mt-6">
      <AddSubMenu1design2 @addData="getData"/>
      <AddSubMenu1 @addData="getData" />
      <button type="button" class="btn"> 
        <font-awesome-icon :icon="faFileExport" class="mr-1"/>
        Export
      </button>
    </div>
    <div class="bg-white rounded-md w-full mt-2 shadow-md">
      <div class="overflow-auto w-full">
        <table class="w-full rounded-md">
          <thead>
            <tr>
              <th v-for="item in tableHead" :key="item.id" class="p-3 border-b">
                    <div class="flex justify-between">
                        <sort-component :item="item"></sort-component>
                        <search-component :filters="item.filter"></search-component>
                    </div>
                </th>
                <th class="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="!loading && data.length === 0">
              <tr class="text-[#6c757d]">
                <td colspan="6" class="text-center p-3">
                  <span>La liste est vide</span>
                </td>
              </tr>
            </template>
            <template v-else-if="loading">
              <tr class="text-[#6c757d]">
                <td colspan="6" class="text-center p-3">
                  <LoadingSpinner />
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="item in data" :key="item.id" class="border-t">
                <td class="px-3 py-2">{{ item.id }}</td>
                <td class="px-3 py-2">{{ item.label }}</td>
                <td class="px-3 py-2">{{ item.status }}</td>
                <td class="px-3 py-2">{{ item.date }}</td>
                <td class="p-3 text-slate-400 flex justify-center">
                  <action-list>
                      <button
                          type="button"
                          class="w-full p-1 mr-2 rounded-sm hover:bg-[#eef2ff] flex items-center"
                      >
                          <i class="fa-solid fa-pen-to-square w-6" style="color:#4B5563"></i>
                          <span>Edit</span>
                      </button>
                      <button
                          type="button"
                          class="w-full p-1 mr-2 rounded-sm hover:bg-[#eef2ff] flex items-center"
                      >
                          <i class="fa-solid fa-copy w-6" style="color:#4B5563"></i>
                          <span>Duplicate</span>
                      </button>
                      <button
                          type="button"
                          class="w-full p-1 rounded-sm hover:bg-[#eef2ff] flex items-center"
                      >
                          <i class="fa-solid fa-trash w-6" style="color:#EF5944;"></i>
                          <span>Delete</span>
                      </button>
                  </action-list>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between p-3 border-t">
        <page-size :size="size" @toggle-rows-number="showElements" />
        <pagination-bar
          :current-page="currentPage"
          :total-pages="totalPages"
          :total-items="totalItems"
          :is-last-page="isLastPage"
          :is-first-page="isFirstPage"
          @page-changed="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AddSubMenu1 from '../components/pages/Menu1/AddSubMenu1Design1.vue'
import AddSubMenu1design2 from '../components/pages/Menu1/AddSubMenuDesign2.vue'
import BreadcrumbComponent from '../components/common/BreadcrumbComponent.vue'
import SearchComponent from '../components/common/SearchComponent.vue'
import SortComponent from '../components/common/SortComponent.vue'
import LoadingSpinner from '../components/common/LoadingSpinner.vue'
import PaginationBar from '../components/common/PaginationComponent.vue'
import PageSize from '../components/common/TableSize.vue'
import ActionList from '../components/common/ActionList.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faFileExport,faAdd} from '@fortawesome/free-solid-svg-icons'
import {ref} from 'vue'

const tableHead = ref([
    {
        id: 'id',
        columnName: 'Id',
        showSearchBar: true,
        filter: {
        key: 'id',
        operator: 'EQUAL',
        field_type: 'STRING',
        value: ''
        }
    },
    {
        id: 'label',
        columnName: 'Label',
        showSearchBar: true,
        filter: {
        key: 'label',
        operator: 'LIKE',
        field_type: 'STRING',
        value: ''
        }
    },
    {
        id: 'status',
        columnName: 'Status',
        showSearchBar: true,
        filter: {
        key: 'status',
        operator: 'EQUAL',
        field_type: 'BOOLEAN',
        value: ''
        }
    },
    {
        id: 'date',
        columnName: 'Date',
        showSearchBar: true,
        filter: {
        key: 'date',
        operator: 'BETWEEN',
        field_type: 'DATE',
        value: '',
        value_to:''
        }
    },
])
const data = ref([
  {
    id:1,
    label:'test',
    status:'test1',
    date:'30/05/2024'
  },
  {
    id:2,
    label:'test',
    status:'test2',
    date:'30/05/2024'
  },
  {
    id:3,
    label:'test',
    status:'test3',
    date:'30/05/2024'
  },
  {
    id:4,
    label:'test',
    status:'test4',
    date:'30/05/2024'
  }
])
const currentPage = ref(0)
const totalPages = ref(0)
const totalItems = ref(0)
 
const size = ref(4)
const loading = ref(false)

function getData(){
  console.log('hello')
}
function onPageChange(newPage) {
    currentPage.value = newPage
}
function selectSize(newSize) {
    size.value = newSize
}

</script>

<style scoped>
</style>
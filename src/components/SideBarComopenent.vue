<template>
  <div class="flex flex-col justify-between relative h-full bg-[#020617] pt-4 pb-8 border border-[#020617] text-white w-80 max-h-full">
    <button 
        type="button" 
        class="flex items-center absolute bg-slate-500 rounded-full border border-slate-500 text-white -right-3 top-4 px-2 py-1">
        <font-awesome-icon :icon="faChevronLeft" class=" text-sm" />
    </button>
    <div class="flex flex-row w-full">
      <img src="../assets/images/logo.png" 
          alt="logo vueJs" 
          class="w-16" />
      <span class="text-xl font-semibold">Project Name</span>
    </div>
    <div class="px-3 my-5">
      <hr/>
    </div>
    <div class="flex px-5 items-center">
      <font-awesome-icon :icon="faCircleUser" class="text-3xl mr-4" />
      <div class="flex flex-col text-sm">
        <span class="font-bold">
          Full name
        </span>
        <span class="text-slate-400">
          email@gmail.com
        </span>
      </div>
    </div>
    <div class="px-3 my-5">
      <hr/>
    </div>
    <div class="h-full w-[100%] flex flex-col px-5 mt-7">
      <div v-for="(menu,key) in menus" :key="key" class="w-full">
        <RouterLink v-if="menu.path" :to="menu.path" class="w-full flex px-2 items-center py-1">
          <font-awesome-icon :icon="menu.icon" class="mr-2" />
          <span>{{ menu.name }}</span>
        </RouterLink>
        <div v-else class="mt-8">
          <div class="flex items-center">
            <div class="grow">
              <font-awesome-icon :icon="menu.icon" class="mr-2" />
              <span>{{ menu.name }}</span>
            </div>
            <font-awesome-icon :icon="faChevronUp" class="text-sm"/>
          </div>
          <div v-for="(subMenu , index) in menu.childreen" :key="index" class="ml-2 px-6 border-l">
            <div class="pt-3">
              <RouterLink :to="subMenu.path" class="w-full flex px-2 items-center py-1">
                <span>{{ subMenu.name }}</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faChevronUp,faEnvelopeOpenText,faHouse, faCircleUser,faGear,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {ref} from 'vue'
import { faFile, faFileWord } from '@fortawesome/free-regular-svg-icons';

const menus = ref(
  [
    {
      name:'Home',
      path:'/home',
      icon:faHouse,
      isOpen:false,
      isActive:false,
      childreen:[]
    },
    {
      name:'Menu 1',
      icon:faGear,
      isOpen:false,
      isActive:false,
      childreen:[
        {
          name:'SubMenu 1',
          path:'/SubMenu1'
        },
        {
          name:'SubMenu 2',
          path:'/SubMenu2'
        },
        {
          name:'SubMenu 3',
          path:'/SubMenu3'
        }
      ]
    },
    {
      name:'Menu 2',
      icon:faEnvelopeOpenText,
      isOpen:false,
      isActive:false,
      childreen:[
        {
          name:'SubMenu1',
          path:'/SubMenu1'
        },
        {
          name:'SubMenu2',
          path:'/SubMenu2'
        },
        {
          name:'SubMenu3',
          path:'/SubMenu3'
        }
      ]
    },
    {
      name:'Menu 3',
      icon:faFileWord,
      isOpen:false,
      isActive:false,
      childreen:[
        {
          name:'SubMenu1',
          path:'/SubMenu1'
        },
        {
          name:'SubMenu2',
          path:'/SubMenu2'
        },
        {
          name:'SubMenu3',
          path:'/SubMenu3'
        }
      ]
    }


  ]
)
</script>

<style scoped></style>
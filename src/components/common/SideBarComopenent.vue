<template>
  <div 
    class="flex flex-col relative h-full bg-[#0f172a] border border-[#0f172a] text-white max-h-full"
    :class=" !isClosed ? 'w-96' : 'w-20'">
    <button 
        type="button" 
        @click="showMenu"
        class="flex items-center absolute bg-slate-500 rounded-full border border-slate-500 text-white -right-3 top-4 px-2 py-1">
        <font-awesome-icon :icon="faChevronLeft" class=" text-sm" :class="{'rotate-180': isClosed}" />
    </button>
    <div 
      class="flex flex-row w-full items-center px-4 py-4"
      :class="{'justify-center' : isClosed}">
      <img src="../assets/images/vue.svg" 
          alt="logo vueJs" 
          class="w-10 h-5" />
      <span 
        v-show="!isClosed"
        class="text-xl font-semibold">
        Project Name
      </span>
    </div>
    <div class="px-4 mb-5">
      <hr/>
    </div>
    <div 
      class="w-[100%] h-full flex flex-col pt-5"
      >
      <div class="px-5 grow pb-6 h-full">
        <div v-for="(menu,key) in menus" :key="key" 
          class="w-full relative"
          >
          <MenuPopup v-show="showPopupMenu && menu.isOpen" @togglePopuMenu="closePopupMenu">
            <OnClickOutside v-if="isClosed" @trigger="menu.isOpen = false">
              <div  
                v-for="(subMenu , index) in menu.childreen" 
                :key="index" 
                class="px-4">
                <div class="pt-3" v-show="menu.isOpen">
                  <RouterLink :to="subMenu.path"  @click="getActiveMenu(menu)" class="w-full flex px-2 items-center py-1">
                    <span>{{ subMenu.name }}</span>
                  </RouterLink>
                </div>
              </div>
            </OnClickOutside>
          </MenuPopup>
          <RouterLink v-if="menu.path" :to="menu.path" 
            @click="deactivateAll" 
            class="w-full flex px-2 items-center py-1"
            :class="{'flex justify-center' : isClosed}">
            <font-awesome-icon :icon="menu.icon"/>
            <span v-show="!isClosed" class="ml-2">{{ menu.name }}</span>
          </RouterLink>
          <div v-else class="mt-8">
            <div class="flex items-center cursor-pointer px-2" @click="toggleMenu(menu)"
            :class="{'activeParent':isClosed && menu.isActive}"
            >
              <div class="grow py-1" :class="{'flex justify-center' : isClosed}">
                <font-awesome-icon :icon="menu.icon" />
                <span v-show="!isClosed" class="ml-2">{{ menu.name }}</span>
              </div>
              <font-awesome-icon 
                :icon="faChevronUp" 
                class="text-sm" 
                :class="{'rotate-180': menu.isOpen}"
                v-show="!isClosed"/>
            </div>
            <div 
              v-show="!isClosed" 
              v-for="(subMenu , index) in menu.childreen" 
              :key="index" 
              class="ml-4 px-6 border-l">
              <div class="pt-3" v-show="menu.isOpen">
                <RouterLink :to="subMenu.path" class="w-full flex px-2 items-center py-1">
                  <span>{{ subMenu.name }}</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4">
        <hr/>
      </div>
      <div 
        class="flex px-5 py-4 items-center"
        :class="{'justify-center' : isClosed}">
        <font-awesome-icon :icon="faCircleUser" class="text-3xl" />
        <div v-show="!isClosed" class="ml-4 flex flex-col text-sm">
          <span class="font-bold">
            Full name
          </span>
          <span class="text-slate-400">
            email@gmail.com
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faChevronUp,faEnvelopeOpenText,faHouse, faCircleUser,faGear,faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {ref,onBeforeMount} from 'vue'
import { faFileWord } from '@fortawesome/free-regular-svg-icons';
import { OnClickOutside } from '@vueuse/components'
import MenuPopup from './MenuPopup.vue'
import { useRoute } from 'vue-router';

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
          path:'/Menu1/SubMenu1'
        },
        {
          name:'SubMenu 2',
          path:'/Menu1/SubMenu2'
        },
        {
          name:'SubMenu 3',
          path:'/Menu1/SubMenu3'
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
          path:'/Menu2/SubMenu1'
        },
        {
          name:'SubMenu2',
          path:'/Menu2/SubMenu2'
        },
        {
          name:'SubMenu3',
          path:'/Menu2/SubMenu3'
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
          path:'/Menu3/SubMenu1'
        },
        {
          name:'SubMenu2',
          path:'/Menu3/SubMenu2'
        },
        {
          name:'SubMenu3',
          path:'/Menu3/SubMenu3'
        }
      ]
    }
  ]
)
const isClosed = ref(false)
const showPopupMenu = ref(false)
const route = useRoute()

onBeforeMount(() => {
  setMenus()
})

function setMenus() {
  menus.value.forEach(menu => {
    menu?.childreen.forEach(subMenu => {
      if (subMenu.path === route.path) {
        menu.isOpen = true
        menu.isActive = true
      }
    })
  })
}
function toggleMenu(menu){
  menu.isOpen = !menu.isOpen
  if(isClosed.value && menu.isOpen){
    showPopupMenu.value = true
  }
}
function showMenu(){
  setMenus()
  isClosed.value = ! isClosed.value
}
function getActiveMenu(menu){
  menus.value.forEach(item => {
    item.isActive = false
  })
  menu.isActive = true
}
function deactivateAll(){
  menus.value.forEach(item => {
    item.isActive = false
  })
}
function closePopupMenu(value){
  showPopupMenu.value = value
}
</script>

<style scoped></style>
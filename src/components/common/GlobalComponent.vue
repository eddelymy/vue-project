<template>
  <div 
    v-if="router.meta.showBars"
    class="h-screen w-full grid grid-cols-gridColmn overflow-hidden">
    <side-bar-comopenent />
    <div class="flex flex-col h-full">
      <header-component />
      <div class="overflow-auto h-full w-full p-4">
        <RouterView />
      </div>
    </div>
  </div>
  <div v-else>
    <RouterView/>
  </div>
</template>

<script setup>
import SideBarComopenent from './SideBarComopenent.vue';
import HeaderComponent from './HeaderComponent.vue';
import { RouterView,useRoute } from 'vue-router';

const router = useRoute()
</script>
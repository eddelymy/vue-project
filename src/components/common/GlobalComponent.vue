<template>
  <div 
    v-if="router.meta.showBars"
    class="h-screen w-full grid grid-cols-gridColmn overflow-hidden">
    <side-bar-comopenent />
    <div class="flex flex-col h-fullw-full overflow-auto">
      <header-component /> 
      <!-- bg-red-50 -->
      <div class="h-full w-full px-4 py-3 bg-gray-100">
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
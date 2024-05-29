<template>
  <div class="flex flex-col justify-between relative h-full bg-[#020617] pt-4 pb-8 border border-[#020617] text-white w-80 max-h-full">
    <div class="flex flex-row w-full">
      <img src="../assets/logo.png" 
          alt="logo vueJs" 
          class="w-16" />
      <span class="text-xl font-semibold">Project Name</span>
      <button 
        type="button" 
        class="flex items-center absolute bg-[#80CBC4] rounded-full border border-[#80CBC4] text-slate-800 -right-3 top-4 px-2 py-1">
        <font-awesome-icon :icon="faChevronLeft" class=" text-sm" />
    </button>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faArrowRightFromBracket,faHouse,faCalendarAlt,faBan, faCircleUser,faGear,faChevronLeft, faChevronRight,faRepeat,faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
</script>

<style scoped></style>
<template>
  <div class="h-14 bg-white shadow-md w-full flex flex-row justify-end px-4">
    <button class="bg-transparent text-[#020617] hover:text-[#80CBC4] mr-5">
      <font-awesome-icon :icon="faBell" />
    </button>
    <button class="bg-transparent text-[#020617] hover:text-[#80CBC4] ">
      <font-awesome-icon :icon="faArrowRightFromBracket" />
    </button> 
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBell,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

</script>

<style scoped></style>
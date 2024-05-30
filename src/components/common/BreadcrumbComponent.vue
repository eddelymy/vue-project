<template>
  <nav class="text-slate-950 text-base">
    <ul class="flex">
        <li  v-for="(page,index) in pages" :key="index">
          <span :class="{'text-slate-400' : pages[pages.length - 1]=== page}">
            {{ page }}
          </span>
          <span v-if="pages[pages.length - 1]!==page" class="mx-1 font-sans font-normal text-blue-gray-500">
              /
          </span>  
        </li> 
    </ul>
  </nav>
</template>

<script setup>
defineProps(
  {pages:{
    type: Array,
    default() {
      return []
    }
  }}
)
</script>

<style scoped></style>
<template>
  <div class="lg:grid w-full h-full login-container">
      <div class="h-full flex flex-col justify-center items-center">
          <h1 class="text-3xl my-5 font-bold text-gray-900 leading-4">Bienvenue</h1>
          <h2 class="text-lg mb-7 font-semibold text-gray-500">Se connecter a votre compte</h2>
          <form @submit.prevent="submit" class="w-full px-3">
              <div class="mb-9">
                  <input 
                      type="text" 
                      class="text-input"
                      placeholder="username"
                      v-model="username">
              </div>
              <div class="mb-9">
                  <input 
                      type="password" 
                      class="text-input"
                      placeholder="password"
                      v-model="password">
              </div>
              <div>
                  <button 
                      type="submit" 
                      class="btn w-full">
                      Login
                  </button>
              </div>
          </form>
      </div>
      <div class="max-[1000px]:hidden">
          <img src="../assets/images/background.jpg" 
              alt="login image" 
              class="object-cover h-screen w-full" />
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const username = ref(null)
const password = ref(null)

function submit(){
  const user = {
    username:username.value,
    password:password.value
  }
  router.push('/login')
  
}
</script>

<style scoped>
@media screen and (min-width: 1000px) {
.login-container {
  grid-template-columns: 1fr 2fr;
}
}
</style>
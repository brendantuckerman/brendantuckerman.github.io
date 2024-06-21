<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <header class="flex flex-col relative sm:gap-8 mt-16 sm:mt-0 justify-center items-center ml-16">
    <img alt="A headshot of Brendan Tuckerman" class="rounded-full w-20 h-20 sm:w-40 sm:h-40 border-4 border-blue-400" src="@/assets/img/tucbr1.webp"  />

    <div class="wrapper flex flex-col justify-center items-center w-2/3">
      <HelloWorld msg="BRENDAN TUCKERMAN" />
    </div>
  </header>
  <TheSidebar />
  <div class="ml-16 sm:ml-0">
    <RouterView />

  </div>
</template>



<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <header class="flex  flex-col relative gap-8  justify-center items-center ml-16">
    <img alt="A headshot of Brendan Tuckerman" class="rounded-full w-40 h-40 border-4 border-blue-400" src="@/assets/img/tucbr1.webp"  />

    <div class="wrapper flex flex-col justify-center items-center w-2/3">
      <HelloWorld msg="BRENDAN TUCKERMAN" />
    </div>
  </header>
  <TheSidebar />
  <RouterView />
</template>



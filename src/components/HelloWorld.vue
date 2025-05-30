<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greeting flex flex-col justify-center items-center gap-4">
    <h1 class="text-3xl sm:text-6xl text-center">{{ msg }}</h1>
    <h2 class="text-xl sm:text4xl">Web Developer</h2>
    <ul class="flex px-4 gap-8">
      <a href="https://github.com/brendantuckerman" rel="nofollow" target="_blank"
        ><li><font-awesome-icon :icon="['fab', 'github']" class="icon" /></li
      ></a>
      <a
        href="https://www.linkedin.com/in/brendan-tuckerman-3b24a030b/"
        rel="nofollow"
        target="_blank"
        ><li><font-awesome-icon :icon="['fab', 'linkedin']" class="icon" /></li
      ></a>
      <a href="https://fosstodon.org/@mrmaverick" rel="nofollow" target="_blank"
        ><li><font-awesome-icon :icon="['fab', 'mastodon']" class="icon" /></li
      ></a>
    </ul>
  </div>
</template>

<style scoped>
.icon {
  @apply h-10;
}

svg:hover {
  @apply text-white;
  transform: scale(1.3);
  transition: all 0.5s ease;
}
</style>

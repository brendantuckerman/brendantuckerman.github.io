<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greeting container">
    <h1 class="text-6xl">{{ msg }}</h1>
    <h2 class="text-5xl">
     Web Developer
    </h2>
    <ul class="flex px-4 gap-4">
        <li> <font-awesome-icon :icon="['fab', 'github']" /></li>
        <li> <font-awesome-icon :icon="['fab', 'linkedin']" /></li>
        <li> <font-awesome-icon :icon="['fab', 'mastodon']" /></li>
      </ul>
  </div>
</template>


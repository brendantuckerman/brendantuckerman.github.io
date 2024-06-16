<script setup lang="ts">
defineProps<{
  name: string,
  url: string,
  imgURL: string, //path to img
  description: string,
  builtWith: string[] //urls for icons
}>()
</script>

<template>
    <div class="project-item-container border-2 border-grey rounded min-h-content">
        <div class="project-item-img">
            <img :src="imgURL" :alt="'A screenshot from' + name" class="w-full rounded">
        </div>
        <div class ="project-item-text p-4">
            <h3 class="text-2xl"><a class="text-[#fff]" :href="url" rel="nofollow" target="_blank">{{ name }}</a></h3>
            <p>{{ description }}</p>
        </div>
        <div class ="project-item-icons flex gap-4 p-4">
            <i v-for="built in builtWith"  :class="built"></i>
        </div>
    </div>
</template>

<style scoped>

i{
    @apply text-6xl;
}

</style>
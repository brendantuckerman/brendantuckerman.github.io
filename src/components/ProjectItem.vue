<script setup lang="ts">
defineProps<{
  name: string,
  url: string,
  imgURL: string, //path to img
  description: string,
  builtWith: string[], //urls for icons
  builtText: string[], //text for tags
}>()



</script>

<template>
    <div class="project-item-container border-2 border-grey rounded min-h-content flex flex-col justify-end">
        <div class="project-item-img">
            <img :src="imgURL" :alt="'A screenshot from' + name" class="w-full h-40">
        </div>
        <div class ="project-item-text p-4 flex flex-col gap-2 justify-center items-center">
            <h3 class="text-2xl"><a class="text-[#fff]" :href="url" rel="nofollow" target="_blank">{{ name }}</a></h3>
            <p>{{ description }}</p>
        </div>
        <div class="built-container h-50 items-center justify-end">
            <div class ="project-item-icons flex gap-4 p-4">
                <i v-for="built in builtWith"  :class="built"></i>
            </div>
            <div class ="project-item-text flex gap-4 p-4">
                <p v-for="text in builtText" class="text-xs">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

i{
    @apply text-6xl;
}

.built-container{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

</style>
<template>
    <!-- A sidebar menu -->
    <div class="absolute flex flex-col items-center p-2 left-4 h-screen">
      <nav>
        <ul class="flex flex-col justify-evenly h-screen mb-16 w-12 justify-center items-center">
           <li class="relative flex flex-col text-xs gap-2 h-8 w-8" :class="{' selected-icon ' : isSelectedIcon }" > <RouterLink to="/" class="icon-link flex flex-col justify-center items-center"><font-awesome-icon :icon="['fas', 'house']" class="icon"/>Home</RouterLink></li>
            <li class=" relative flex flex-col text-xs gap-2 h-8 w-8 " ><RouterLink to="/projects" class="icon-link flex flex-col justify-center items-center"><font-awesome-icon :icon="['fas', 'wrench']" class="icon"/>Projects</RouterLink></li>
            <li class="relative flex flex-col text-xs gap-2 h-8 w-8"><RouterLink to="/contact" class="icon-link flex flex-col justify-center items-center"><font-awesome-icon :icon="['fas', 'address-book']" class="icon"/>Contact</RouterLink></li>
            <li class=" relative flex flex-col text-xs gap-2 h-8 w-8"><RouterLink to="/skills" class="icon-link flex flex-col justify-center items-center"><font-awesome-icon :icon="['fas', 'book']" class="icon"/>Skills</RouterLink></li>
           <li class=" relative flex flex-col text-xs gap-2 h-8 w-8"> <RouterLink to="/" class="icon-link flex flex-col justify-center items-center"><font-awesome-icon :icon="['fas', 'paperclip']" class="icon"/>Resume</RouterLink></li>
           
        </ul>
      </nav>

    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isSelectedIcon = computed(() => {
  return route.path === '/projects';
});
</script>

<style scoped>

.icon{
    @apply h-6;
}

.icon-link:hover {
    @apply text-white;
        
}

.icon-link:hover::before,
.selected-icon::before{
    @apply text-white border-l-2 border-white;
    content: " ";
    position: absolute;
    left: -15px;
    height: 100%;
}


.icon-link:hover .icon{
    @apply text-white;
}



    .selected-icon{
        .icon{
            @apply text-[#fff];
        }
    }


</style>

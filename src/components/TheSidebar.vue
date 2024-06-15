<template>
    <!-- A sidebar menu -->
    <div class="absolute flex flex-col items-center p-2 left-0 h-screen">
      <nav>
        <ul class="flex flex-col justify-evenly h-screen mb-16 w-12 justify-center items-center">
            <RouterLink to="/"><li class="flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" class="icon"/>Home</li></RouterLink>
            <RouterLink to="/about"><li class="flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'book']" class="icon"/>About</li></RouterLink>
            <RouterLink to="/projects"><li class="flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'wrench']" class="icon"/>Recent Projects</li></RouterLink>
            <RouterLink to="/contact"><li class="flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'address-book']" class="icon"/>Contact</li></RouterLink>
            <RouterLink to="/"><li class="flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'paperclip']" class="icon"/>Resume</li></RouterLink>
           
        </ul>
      </nav>

    </div>

</template>

<style scoped>

.icon{
    @apply h-6;
}

</style>

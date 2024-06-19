<template>
    <!-- A sidebar menu -->
    <div class="absolute flex flex-col items-center p-2 left-0 h-screen">
      <nav>
        <ul class="flex flex-col justify-evenly h-screen mb-16 w-12 justify-center items-center">
            <RouterLink to="/"><li class="relative selected-icon flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" class="icon"/>Home</li></RouterLink>
            <RouterLink to="/projects"><li class=" relativeflex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'wrench']" class="icon"/>Recent Projects</li></RouterLink>
            <RouterLink to="/contact"><li class=" relative flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'address-book']" class="icon"/>Contact</li></RouterLink>
            <RouterLink to="/skills"><li class=" relative flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'book']" class="icon"/>Skills</li></RouterLink>
            <RouterLink to="/"><li class=" relative flex flex-col text-xs gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'paperclip']" class="icon"/>Resume</li></RouterLink>
           
        </ul>
      </nav>

    </div>

</template>

<style scoped>

.icon{
    @apply h-6;
}



    .selected-icon::before{
        @apply text-[#fff] border-l-2 border-[#fff];
        content: " ";
        position: absolute;
        left: -5px;
        height: 100%;
    }

    .selected-icon{
        .icon{
            @apply text-[#fff];
        }
    }


</style>
